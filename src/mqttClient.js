import mqtt from "mqtt";
import { setKey, key, loadSong } from "./vanilla";
import {
  currentRGB,
  rgbToXy,
  rgbToHexWithBrightness,
  setLight,
  changeGradCol,
} from "./phillipsHue";

export const url = "mqtt://mqtt-plain.nextservices.dk:9001";
let sunOn = true;
let client = null;
let bri = 150;
let col = 0;
const songNum = document.querySelector(".sang-num");
const amBright = document.querySelector(".am-bright");

export function initMQTT(url, animateParams) {
  if (client) return client;
  client = mqtt.connect(url);
  client.on("connect", () => console.log("MQTT connected to", url));
  client.on("error", (err) => console.error("MQTT error:", err));
  client.subscribe("ControlPanel2/Response", (err) => {
    if (err) {
      console.log("There war an error subscribing: " + err);
    } else {
      console.log("Conntected!");
    }
  });

  client.on("message", function (topic, message) {
    let rawMessage = message.toString();

    // Ensure the message starts and ends with curly braces, as valid JSON must be enclosed in them
    if (!rawMessage.startsWith("{") || !rawMessage.endsWith("}")) {
      throw new Error("Invalid message format");
    }
    // Replace unquoted property names with quoted ones
    // https://stackoverflow.com/questions/44562635/regular-expression-add-double-quotes-around-values-and-keys-in-javascript
    rawMessage = rawMessage.replace(/([a-zA-Z0-9]+):/g, '"$1":'); // Quote property names
    rawMessage = rawMessage.replace(/: ([a-zA-Z0-9/]+)/g, ': "$1"'); // Quote string values

    // Parse the fixed JSON string into a JavaScript object
    const response = JSON.parse(rawMessage);
    console.log("Received response from Pairing/Client:", response);
    handleInterface(response, animateParams);
  });
}

function handleInterface(r, animateParams) {
  if (r.ComponentType == "Knob") {
    handleKnob(r, animateParams);
  } else if (r.ComponentType == "Toggle") {
    handleToggle(r, animateParams);
  } else if (r.ComponentType == "Button") {
    handleButton(r, animateParams);
  }
}

function handleKnob(r, animateParams) {
  if (r.ID == 1) {
    if (sunOn) {
      if (r.Direction == 1) {
        if (animateParams.lightIntensity < 100) {
          animateParams.lightIntensity += 10;
        } else {
          animateParams.lightIntensity = 10;
        }
      } else {
        if (animateParams.lightIntensity > 10) {
          animateParams.lightIntensity -= 10;
        } else {
          animateParams.lightIntensity = 100;
        }
      }
    }
  }
  if (r.ID == 2) {
    if (r.Direction == 1) {
      if (animateParams.earthSpeed < 100) {
        animateParams.earthSpeed += 10;
      }
    } else {
      if (animateParams.earthSpeed > 10) {
        animateParams.earthSpeed -= 10;
      }
    }
  }
  if (r.ID == 3) {
    if (r.Direction == 1) {
      if (key < 5) {
        setKey(key + 1);
        songNum.innerHTML = "Ambient Song: " + key;
      } else {
        setKey(1);
        songNum.innerHTML = "Ambient Song: " + key;
      }
    } else {
      if (key > 1) {
        setKey(key - 1);
        songNum.innerHTML = "Ambient Song: " + key;
      } else {
        setKey(5);
        songNum.innerHTML = "Ambient Song: " + key;
      }
    }
  }
  if (r.ID == 4) {
    if (r.Direction == 1) {
      if (bri < 200) {
        bri += 10;
        const mappedBri = Math.round(((bri - 30) * (100 - 5)) / (200 - 30) + 5);
        console.log(mappedBri);
        amBright.innerHTML = "Ambient Brightness: " + mappedBri;
      }
    } else {
      if (bri > 30) {
        bri -= 10;
        const mappedBri = Math.round(((bri - 30) * (100 - 5)) / (200 - 30) + 5);
        amBright.innerHTML = "Ambient Brightness: " + mappedBri;
      }
    }
  }
  if (r.ID == 5) {
    if (r.Direction == 1) {
      if (col < 100) {
        col += 10;
        changeGradCol(col);
      }
    } else {
      if (col > 0) {
        col -= 10;
        changeGradCol(col);
      }
    }
  }
}

function handleToggle(r, animateParams) {
  if (r.ID == 1) {
    if (sunOn) {
      animateParams.lightIntensity = 0;
      sunOn = !sunOn;
    } else {
      animateParams.lightIntensity = 10;
      sunOn = !sunOn;
    }
  }
  if (r.ID == 2) {
    animateParams.aroundSunDirection *= -1;
  }
}

function sendToLED(hex, command) {
  client.publish(command, `${hex}`);
  console.log("sent to LED");
}

function sendToMotor(speed, dir) {
  let actualDir;
  if (dir == 1) {
    actualDir = dir;
  } else {
    actualDir = 0;
  }

  let message = {
    Steps: "Run",
    Speed: speed,
    Dir: actualDir,
    MicroSteps: 32,
  };
  client.publish("ESPStepper1/Motor", JSON.stringify(message));
}

function handleButton(message, animateParams) {
  const { r, g, b } = currentRGB;
  const xy = rgbToXy(r, g, b);
  const hex = rgbToHexWithBrightness(r, g, b, bri);
  console.log(hex);

  const lightPayload = {
    on: true,
    xy,
    bri,
    colormode: "xy",
  };

  const secondLight = {
    xy: [0.3127, 0.329],
    colormode: "xy",
    bri: animateParams.lightIntensity,
    on: true,
  };

  loadSong();
  sendToLED(hex, "Star3/Command");
  sendToLED(hex, "Star4/Command");

  // Send to Hue Hub
  setLight(lightPayload, "state", 13);
  setLight(secondLight, "state", 2);

  const mappedSpeed =
    ((animateParams.earthSpeed - 10) * (10 - 1)) / (100 - 10) + 1;

  sendToMotor(mappedSpeed, animateParams.aroundSunDirection);
  /*const msg = message;
  client.publish(
    "ESPStepper1/Motor",
    JSON.stringify(msg),
    { qos: 0 },
    (err) => {
      if (err) console.error("Publish error:", err);
      else console.log("▶️ Motor command sent");
    }
  );*/
}

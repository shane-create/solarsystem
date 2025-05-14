import mqtt from "mqtt";
import { setKey, key, loadSong } from "./vanilla";

let client = null;
export const url = "mqtt://mqtt-plain.nextservices.dk:9001";
let sunOn = true;

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
    handleButton();
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
        loadSong();
      } else {
        setKey(1);
        loadSong();
      }
    } else {
      if (key > 1) {
        setKey(key - 1);
        loadSong();
      } else {
        setKey(5);
        loadSong();
      }
    }
  }
  if (r.ID == 4) {
    console.log("Not here either");
  }
  if (r.ID == 5) {
    console.log("Yea, theres nothin here right now");
  }
}

function handleToggle(r, animateParams) {
  if (r.ID == 1) {
    animateParams.aroundSunDirection *= -1;
  }
  if (r.ID == 2) {
    if (sunOn) {
      animateParams.lightIntensity = 0;
      sunOn = !sunOn;
    } else {
      animateParams.lightIntensity = 10;
      sunOn = !sunOn;
    }
  }
}

function handleButton(message) {
  const msg = message;
  client.publish(
    "ESPStepper1/Motor",
    JSON.stringify(msg),
    { qos: 0 },
    (err) => {
      if (err) console.error("Publish error:", err);
      else console.log("▶️ Motor command sent");
    }
  );
}

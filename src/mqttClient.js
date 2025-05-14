import mqtt from "mqtt";
import { setKey, key, loadSong } from "./vanilla";

let client = null;
export const url = "ws://mqtt-plain.nextservices.dk:9001/mqtt";
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
  const { componentType } = r;
  switch (componentType) {
    case "Knob":
      handleKnob(r, animateParams);
      break;
    case "Toggle":
      handleToggle(r, animateParams);
      break;
    case "Button":
      handleButton(r);
      break;
    default:
      console.log("Invalid response");
  }
}

function handleKnob(r, params) {
  const { ID, Direction } = r;

  const increment = Direction === 1 ? 10 : -10;

  switch (ID) {
    case 1:
      if (sunOn) {
        params.lightIntensity = clampWrap(
          params.lightIntensity + increment,
          10,
          100
        );
      }
      break;

    case 2:
      params.earthSpeed = clamp(params.earthSpeed + increment, 10, 100);
      break;

    case 3: // Change song key
      const newKey = wrap(key + increment / 10, 1, 5);
      setKey(newKey);
      loadSong();
      break;

    case 4:
    case 5:
      console.log(`ℹ️ No handler for Knob ID ${ID}`);
      break;
  }
}
function handleToggle(r, animateParams) {
  const { ID } = r;
  switch (ID) {
    case 1:
      animateParams.aroundSunDirection *= -1;
      break;
    case 2:
      sunOn = !sunOn;
      params.lightIntensity = sunOn ? 10 : 0;
      break;
    default:
      console.log("Improper input");
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

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function wrap(value, min, max) {
  const range = max - min + 1;
  return ((value - min + range) % range) + min;
}

function clampWrap(value, min, max) {
  if (value > max) return min;
  if (value < min) return max;
  return value;
}

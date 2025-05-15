var ip = "10.78.16.62";
var username = "pAEzbkQouu3gf1UwgpNFM4TGBmU038Hd3vXCF2Vy";
let url = "http://" + ip + "/api/" + username + "/lights/";

export let currentRGB = { r: 0, g: 0, b: 0 };

// RGB to XY conversion for Philips Hue
export function rgbToXy(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  const X = r * 0.4124 + g * 0.3576 + b * 0.1805;
  const Y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  const Z = r * 0.0193 + g * 0.1192 + b * 0.9505;

  const sum = X + Y + Z;
  const x = X / sum;
  const y = Y / sum;

  return [x || 0, y || 0];
}

// Send update to Philips Hue
export function setLight(data, command, lightNum) {
  const path = `${url + lightNum}/${command}`;
  const content = JSON.stringify(data);

  fetch(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: content,
  })
    .then((res) => res.json())
    .then(setLightsCallback)
    .catch((err) => console.error("Failed to update Hue light:", err));
}

function setLightsCallback(response) {
  console.log("back from api call", response);
}

// Visual gradient background and current RGB tracking
export function changeGradCol(value) {
  let r, g, b;
  if (value <= 33) {
    // Deep Blue → Icy Blue
    const t = value / 33;
    r = Math.round(20 + t * (80 - 20)); // More blue than red
    g = Math.round(20 + t * (120 - 20));
    b = Math.round(120 + t * (255 - 120)); // Strong blue channel
  } else if (value <= 66) {
    // Icy Blue → Purple → Magenta
    const t = (value - 33) / 33;
    r = Math.round(80 + t * (200 - 80)); // Increase red for magenta
    g = Math.round(120 - t * 100); // Drop green for purples
    b = Math.round(255 - t * 40); // Slightly reduce blue
  } else {
    // Magenta → Hot Pink → Pale Pink
    const t = (value - 66) / 34;
    r = Math.round(200 + t * (255 - 200)); // Max red
    g = Math.round(20 + t * (150 - 20)); // Add back some green
    b = Math.round(215 - t * 80); // Reduce blue for pink
  }

  currentRGB = { r, g, b };
  const rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
  const gradient = document.getElementById("gradient");
  if (gradient) {
    gradient.style.background = `linear-gradient(to top, ${rgba}, transparent)`;
  }
}

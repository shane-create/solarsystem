var ip = "10.78.16.62";
var username = "pAEzbkQouu3gf1UwgpNFM4TGBmU038Hd3vXCF2Vy";
let url = "http://" + ip + "/api/" + username + "/lights/";

export let currentRGB = { r: 246, g: 57, b: 252 };

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

export function rgbToHexWithBrightness(r, g, b, brightness) {
  // Clamp RGB
  const clamp = (val) => Math.max(0, Math.min(255, val));
  r = clamp(r);
  g = clamp(g);
  b = clamp(b);

  // Map brightness 30–200 → 0–255
  const clampedBrightness = Math.max(30, Math.min(200, brightness));
  const alpha = Math.round(((clampedBrightness - 30) / (200 - 30)) * 255);
  const mappedAlpha = Math.round(((alpha - 30) * (50 - 20)) / (200 - 30) + 20);

  // Convert to hex
  const toHex = (val) => val.toString(16).padStart(2, "0");
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(mappedAlpha)}`;

  return hex;
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
    // 27,0,201 → 34,129,201
    const t = value / 33;
    r = Math.round(27 + t * (34 - 27));
    g = Math.round(0 + t * (129 - 0));
    b = Math.round(201 + t * (201 - 201));
  } else if (value <= 66) {
    // 34,129,201 → 87,0,173
    const t = (value - 33) / 33;
    r = Math.round(34 + t * (87 - 34));
    g = Math.round(129 + t * (0 - 129));
    b = Math.round(201 + t * (173 - 201));
  } else {
    // 87,0,173 → 171,0,74 (passing through 163,0,191 and 191,0,156)
    const t = (value - 66) / 34;
    if (t < 0.33) {
      // 87,0,173 → 163,0,191
      const localT = t / 0.33;
      r = Math.round(87 + localT * (163 - 87));
      g = 0;
      b = Math.round(173 + localT * (191 - 173));
    } else if (t < 0.66) {
      // 163,0,191 → 191,0,156
      const localT = (t - 0.33) / 0.33;
      r = Math.round(163 + localT * (191 - 163));
      g = 0;
      b = Math.round(191 + localT * (156 - 191));
    } else {
      // 191,0,156 → 171,0,74
      const localT = (t - 0.66) / 0.34;
      r = Math.round(191 + localT * (171 - 191));
      g = 0;
      b = Math.round(156 + localT * (74 - 156));
    }
  }

  currentRGB = { r, g, b };
  makeChange(currentRGB);
}

function makeChange(current) {
  const { r, g, b } = current;
  const rgba = `rgba(${r}, ${g}, ${b}, 0.2)`;
  const gradient = document.getElementById("gradient");
  if (gradient) {
    gradient.style.background = `linear-gradient(to top, ${rgba}, transparent)`;
  }
}

export function setCurrentRGB(newRGB) {
  currentRGB = newRGB;
  makeChange(newRGB);
}

import { setBri } from "./mqttClient";
import { setCurrentRGB } from "./phillipsHue";
const base = import.meta.env.BASE_URL;

/* Her henter vi en masse html elementer */
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const addButton = document.querySelector(".add-button");
const presetsContainer = document.querySelector(".presets-container");
const title = document.querySelector(".title");
const menu = document.querySelector(".menu");
const presetSaver = document.querySelector(".preset-saver");
const saveButton = document.getElementById("saveButton");
const inputField = document.getElementById("preset-input");
const info = document.querySelector(".information");

/* Vi laver såvel som expoterer en masse variabler så de kan bruges i main.js. Når man eksporter et varibel,
og så ændrer på den lokalt, vil ændringerne også finde sted, i alle andre filer hvor den bruges */
saveButton.disabled = true;
export let inputValue;
export let audioElement = null;
export let key = 1;

/* Denne toggle menu funtkion tilføjer aktive classen til nogle html elementer, hvis den ikke allerede er på, og 
sletter aktive classen hvis den allerede er på elementet. Dette giver os lov til at ændre cssen. */
export function toggleMenu() {
  hamburgerWrapper.classList.toggle("active");
  menu.classList.toggle("active");
  presetsContainer.classList.toggle("active");
  title.classList.toggle("active");
  info.classList.toggle("active");
}

/* Toggle pop up gør det samme. Vi har dem separeret, da vi gerne vil toggle disse ved forskellige tidspunkter */
export function togglePopUp() {
  addButton.classList.toggle("active");
  presetSaver.classList.toggle("active");
  hamburgerWrapper.classList.toggle("hide");
}

export function loadSong() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement = null;
  }
  audioElement = new Audio(base + "static/music/Song_" + key + ".mp3");
  audioElement.play();
  audioElement.addEventListener(
    "ended",
    () => {
      audioElement.currentTime = 0;
      audioElement.volume = 30;
      audioElement.play();
    },
    false
  );
}

export function setValues(presetParams, animateParams) {
  setBri(presetParams.ambientLightIntensity);

  setCurrentRGB(presetParams.ambientColor);
  animateParams.aroundSunDirection = presetParams.rotationDirection;
  animateParams.earthSpeed = presetParams.earthSpeed;
  animateParams.lightIntensity = presetParams.lightIntensity;
}

export function setKey(newKey) {
  key = newKey;
}

/* Her laver vi en evnetlistener der lytter efter, enhver knap på keyboardet trykkes. */
document.addEventListener("keydown", (event) => {
  /* Den gemmer den knap der trykkes */
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) {
    key = event.key;
    loadSong();
  }
});

/* En anden event listener til vores input field.  */
inputField.addEventListener("input", () => {
  inputValue =
    inputField.value.trim(); /* Her får vi input fieldens værdi, men med alle overflødelige mellemtrum trukket fra */
  if (inputValue.length > 0) {
    /* Hvis inputens værdi er større end 0, altså er der karakterer der ikke blot er mellemrum */
    saveButton.disabled = false; /* Kan knappen til at gemme klikkes på */
  } else {
    saveButton.disabled = true; /* Ellers kan den ikke klikkes */
  }
});

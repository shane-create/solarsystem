import "./style.css";
import "./vanilla.js";
import "./three.js";
import "./firebase.js";
import "./dataSave.js";
import { initScene, updateScene, toggleVisible } from "./three.js";
import { fetchData, savePreset, savedPresets } from "./dataSave.js";
import { currentRGB } from "./phillipsHue.js";
import { initMQTT, url, bri } from "./mqttClient.js";
import {
  toggleMenu,
  togglePopUp,
  inputValue,
  key,
  loadSong,
  setKey,
  setValues,
} from "./vanilla.js";
const base = import.meta.env.BASE_URL;

/* Oven over, henter vi alle funktioner og variabler der eksporteres fra de forskellige javascript filer */

/* Her gør vi brug af dom, til at hente visse elementer. Dette er eksempelvis vores hamburger menu knap */
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const addButton = document.querySelector(".add-button");
const presetsContainer = document.querySelector(".presets-container");
const saveButton = document.getElementById("saveButton");
const inputField = document.getElementById("preset-input");
/* Nu initialiserer vi scenen, og gemmer alle variabler der returneres fra den. */
const { scene, camera, renderer, labelRenderer, controls, animateParams } =
  initScene();

/* Vi initialiserer også vores youtube player */
/*const musicParams = musicInit();*/

initMQTT(url, animateParams);

/* En variabel af om objekter er synlige */
let objectsVisible = true;

/* Genbrugbar funktion der kalder flere importered funktioner, såvel som sætter objekternes synlighed til det 
modsatte af det den var før */
function toggleEverything() {
  objectsVisible = !objectsVisible;
  toggleMenu();
  toggleVisible(scene, objectsVisible);
}

function loadPresets() {
  presetsContainer.innerHTML = "";
  savedPresets.forEach((preset) => {
    const newElm = document.createElement("div");
    newElm.addEventListener("click", () => {
      setKey(preset.songNum);
      loadSong();
      setValues(preset, animateParams);
      toggleEverything();
    });
    newElm.className = "preset";
    newElm.innerHTML = `<p>${preset.name}</p>`;
    presetsContainer.appendChild(newElm);
  });
}

/* Denne eventlistener lytter efter, når brugere ændrer vinduets større. HVis dette sker, vil vi gerne have 
at begge renderers ændrer størrelse, og kameraes forhold også ændres */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
  loadPresets();
  console.log("loaded");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  fullscreenBtn.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
    // Remove the button from the DOM
    fullscreenBtn.remove();
  });
});

/* Her tilføjer vi en eventlistener til saveknappen. Den skal i virkeligheden kunne gemme dette data på firebase,
men det er del af en anden gruppe medlems kode. */
saveButton.addEventListener("click", async () => {
  /* Hvis inputen har en værdi, laver den en savedpreset objekt. Den har alle værdierne der skal gemme. */
  if (inputValue.length > 0) {
    await savePreset(
      inputValue,
      key,
      animateParams.earthSpeed,
      currentRGB,
      animateParams.lightIntensity,
      animateParams.aroundSunDirection,
      bri
    );
    await fetchData();
    /* Inputens værdi sættes til tom. */
    inputField.value = "";
    /* Og vi lukker for alle pop ups så vi kan se vores scene */
    loadPresets();
    togglePopUp();
    toggleEverything();
  } else {
    /* Hvis inputværdien ikke har nogen værdi, og burgeren prøver at gemme, vil vi gerne have at de får at vide, 
    at de skal indskrive noget i inputfeltet. */
    alert("Please enter a valid preset name.");
  }
});

/* Hvis hamburgerknappen klikkes på, skal alle three js og GUI elementerne blive usynlige imens pop uppen skal være synlig
Hvis den klikkes på igen, sker der modsatte*/
hamburgerWrapper.addEventListener("click", () => {
  toggleEverything();
});

/* Hvis addbutton klikkes på, skal en ny pop up blive synlig. Klikkes igen sker det modsatte*/
addButton.addEventListener("click", async () => {
  togglePopUp();
});

/* Vi har brug for en loop. Render giver som sagt et billede, vi har brug for en masse billeder, så ting bevæger sig.
derfor kaldes alle opdateringer i denne loop, så brugeren kan se dem */
function animate() {
  /* Vores updatescene funktion med alle animationerne */
  updateScene();

  /* Og vores controllere og renders */
  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
  /* Dette kører funktionen hver ny anitmations frame */
  window.requestAnimationFrame(animate);
}

/* Funktionen skal dog kaldes mindst en gang */
animate();

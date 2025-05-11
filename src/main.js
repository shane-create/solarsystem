import { initScene, updateScene, toggleVisible } from "./three.js";
import { initGUI, toggleGUI, setValues } from "./gui.js";
import {
  musicInit,
  getPlayer,
  toggleMenu,
  songs,
  togglePopUp,
  inputValue,
  song,
} from "./vanilla.js";

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
const musicParams = musicInit();

/* Her laves en tom array til de presets vi kommer til at hente */
let presets = [];

/* Vi initialiserer også vores GUI, og giver den blandt andet vores player, vores musicobjekt og vores animateobjekt.
Dette er blot værdier som vi vil vise med vores GUI*/
initGUI(animateParams, musicParams, getPlayer);

/* En variabel af om objekter er synlige */
let objectsVisible = true;

/* Genbrugbar funktion der kalder flere importered funktioner, såvel som sætter objekternes synlighed til det 
modsatte af det den var før */
function toggleEverything() {
  objectsVisible = !objectsVisible;
  toggleMenu();
  toggleVisible(scene, objectsVisible);
  toggleGUI(objectsVisible);
}

/* Her henter vi vores json presets fil */
fetch("static/testJSON/presets.json")
  .then((response) =>
    response.json()
  ) /* ud fra den response vi får, kovneterer vi det objekt til json. */
  .then((data) => {
    /* og af den json behandler vi dataen */
    presets =
      data.presets; /* Vores presets array bliver alt der er inde i presets keyen, som er en array af objects */
    presets.forEach((preset) => {
      /* For hver preset objekt laver vi en ny div */
      const newElm = document.createElement("div");
      newElm.addEventListener("click", () => {
        /* Denne div for en evenlistener, som så lytter efter clicks på den. */
        setValues(
          preset,
          songs
        ); /* Hvis der opleves click, kaldes setvalue funktionen og alle værdier inden for webside ændres baseret på preseten*/
        toggleEverything(); /* Nu lukkes pop upet ned, så vi kan se vores scene igen */
      });
      /* Hvert preset div får classen preset, såvel som en p tag inden i, der kun viser presetens navn */
      newElm.className = "preset";
      newElm.innerHTML = `<p>${preset.name}</p>`;
      /* Hvert preset div tilføjes til en presetcontainer div inde i htmlen. */
      presetsContainer.appendChild(newElm);
    });
  })
  .catch((error) =>
    console.error("Presets could not be loaded:", error)
  ); /* Hvis der er en error, når den prøver loade presets console.logger den erorren */

/* Denne eventlistener lytter efter, når brugere ændrer vinduets større. HVis dette sker, vil vi gerne have 
at begge renderers ændrer størrelse, og kameraes forhold også ændres */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
});

/* Her tilføjer vi en eventlistener til saveknappen. Den skal i virkeligheden kunne gemme dette data på firebase,
men det er del af en anden gruppe medlems kode. */
saveButton.addEventListener("click", () => {
  /* Hvis inputen har en værdi, laver den en savedpreset objekt. Den har alle værdierne der skal gemme. */
  if (inputValue.length > 0) {
    const savedPreset = {
      name: inputValue,
      volume: musicParams.volume,
      songNum: song ? song.num : 1,
      earthSpeed: animateParams.earthSpeed,
      earthRotationSpeed: animateParams.earthRotationSpeed,
      lightIntensity: animateParams.lightIntensity,
      rotationDirection: animateParams.rotationDirection,
    };
    /* Da jeg ikk kan gemme den lige nu, console.logger jeg den istedet. */
    console.log(savedPreset);
    /* Inputens værdi sættes til tom. */
    inputField.value = "";
    /* Og vi lukker for alle pop ups så vi kan se vores scene */
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
addButton.addEventListener("click", () => {
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

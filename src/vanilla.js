/* Her henter vi en masse html elementer */
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const addButton = document.querySelector(".add-button");
const presetsContainer = document.querySelector(".presets-container");
const title = document.querySelector(".title");
const menu = document.querySelector(".menu");
const presetSaver = document.querySelector(".preset-saver");
const saveButton = document.getElementById("saveButton");
const inputField = document.getElementById("preset-input");

/* Vi laver såvel som expoterer en masse variabler så de kan bruges i main.js. Når man eksporter et varibel,
og så ændrer på den lokalt, vil ændringerne også finde sted, i alle andre filer hvor den bruges */
saveButton.disabled = true;
let player, musicParams;
export let inputValue;
export let song;
export let songs = [];

/* Denne toggle menu funtkion tilføjer aktive classen til nogle html elementer, hvis den ikke allerede er på, og 
sletter aktive classen hvis den allerede er på elementet. Dette giver os lov til at ændre cssen. */
export function toggleMenu() {
  hamburgerWrapper.classList.toggle("active");
  menu.classList.toggle("active");
  presetsContainer.classList.toggle("active");
  title.classList.toggle("active");
}

/* Toggle pop up gør det samme. Vi har dem separeret, da vi gerne vil toggle disse ved forskellige tidspunkter */
export function togglePopUp() {
  addButton.classList.toggle("active");
  presetSaver.classList.toggle("active");
  hamburgerWrapper.classList.toggle("hide");
}

/* HEr laver vi vores musik afspiller ved brug af youtubes iframe api: */
export function musicInit() {
  /* Youtubes iframe api har brug for en youtube video id. Vi laver derfor en funktion her, der tager en url som input
og udtrækker dens id */
  function extractYouTubeID(url) {
    const match =
      url.match(
        /v=([^&]+)/
      ); /* dette er en regular expression. Den siger, træk alle karakterer der er imellem to '/', har 'v=' før dem,  og ikke er &, ud */
    return match
      ? match[1]
      : null; /* hvis vi får en udtrukket id, skal den retuneres, hvis ikke, retuneres null */
  }

  /* Her henter vi vores songs.json fil */
  fetch("static/testJSON/songs.json") /* Se main js */
    .then((response) => response.json())
    .then((data) => {
      songs = data.songs.map((song) => ({
        /* for hver song, gemmes den som en objekt i en array */
        num: song.num /* dens keys vil være num, hvilket er lig med sang numeret, og id, den udtrukkede sang id */,
        id: extractYouTubeID(song.url),
      }));
      /* Her kalder vi funktionen der skal loade vores youtube api */
      loadYouTubeAPI();
    })
    .catch((error) => console.error("Error loading songs:", error));

  /* Her loader vi youtubes API ind i vores projekt. Det gør vi ved at oprette et nyt <script> tag i JavaScript, og 
sætte dets src til youtubes officielle iframe API link. Når scriptet er hentet og indlæst af browseren, kan vi bruge 
youtubes funktioner, fx til at oprette og styre en youtube afspiller i vores app. */
  function loadYouTubeAPI() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  }

  /* HEr laver vi en funktion der kaldes når apien er klar. */
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      /* Vi laver en ny youtube player, der eksisterer i diven med id player, og har ingenstørrelse,
        og ingen video id til at begynde med. Dette er fordi browsers ikke giver lov til lyd afspilling, uden at brugeren 
        interagerer med noget */
      height: "0",
      width: "0",
      videoId: "",
      events: {
        onReady: () =>
          console.log(
            "YouTube Player ready"
          ) /* Når playeren er klar, console.logges dette */,
      },
    });
  }

  /* Her giver vi vores vindue en ny funtkion, nemlig vores youtubeready funktion. Den bliver således en global funktion.
  En global funktion er en funktion vi kan få fat på hvor som helt i vores applikation, fordi den sidder på vinduet.
  Youtube apiet kræver sådan en funktion under lige sådan et navn */
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  /* Her laver vi også en objekt, som vi gerne vil ændre med vores GUI */
  musicParams = {
    volume: 30,
  };

  /* Vi returnerer så kun vores musik objekt */
  return musicParams;
}

/* Denne funktion giver adgang til youtubeplayeren når den kaldes */
export function getPlayer() {
  return player;
}

/* Her laver vi en evnetlistener der lytter efter, enhver knap på keyboardet trykkes. */
document.addEventListener("keydown", (event) => {
  const key = event.key; /* Den gemmer den knap der trykkes */
  if (["1", "2", "3", "4", "5"].includes(key)) {
    /* hvis knappen er enten 1, 2, 3, 4 eller 5 */
    const index =
      parseInt(key) -
      1; /* vi konverterer vores keys navn til et tal, og fratrækker 1, for at lave det til en index. Kode tæller fra 0. */
    song =
      songs[
        index
      ]; /* Vi finder sangen ved den specifikke index, fra vores sange array */
    if (player && song) {
      /* Hvis både playeren og den sang vi henter eksisterer */
      player.loadVideoById(
        song.id
      ); /* Så bruger vi playeren til at loade den specifikke sang */
      player.setVolume(
        musicParams.volume
      ); /* sætter dens volumen dynamisk baseret på vores musikparams. */
      player.playVideo(); /* Og afspuller videoen */
    }
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

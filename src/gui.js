import GUI from "lil-gui";

/* Dette er en javascript library, der give mig lov til at lave små boxe til a kontrollere og debugge min kode. */

/* Her laves variabler */
let gui;
let player;

/* Denne variabel gør manuel ændring af GUI muligt */
const controllers = [];

/* Funktionen der laver min GUI. Den exporteres */
export function initGUI(params, musicParams, getPlayer) {
  /* Laver en ny GUI */
  gui = new GUI();
  /* laver en key i controllers, der kan holde på volumen. */
  controllers.volume = gui
    .add(
      musicParams,
      "volume",
      0,
      100,
      1
    ) /* Tilføjer her en ny slider, der tager udganspunkt i musicparams objektet. Slideren går fra 0 til 100, og kune imellem hele værdier */
    .name("Volume") /* Navngiver slideren */
    .onChange((value) => {
      /* Denne slider er speciel da den skal ændre volumen af en youtube video,  getPlayer() returnerer YouTube-spilleren, som bruges til at ændre volumen. */
      player =
        getPlayer(); /* Den sætter player lig med det den får returneret fra getplayer funktionen */
      if (player && player.setVolume) {
        /* Hvis den får en player, og dens volumen kan ændres */
        player.setVolume(
          value
        ); /* sætter den volumen til den værdi som slideren har */
      }
    });
  controllers.earthSpeed = gui /* En anden gui */
    .add(
      params,
      "earthSpeed",
      1,
      100,
      1
    ) /* Fra 1 til 100 og kun hele værdier. Tager udgangspunkt i params objektet. */
    .name("Earth Speed");
  controllers.earthRotationSpeed = gui /* osv. */
    .add(params, "earthRotationSpeed", 1, 100, 1)
    .name("Earth Rotation Speed");
  controllers.lightIntensity = gui
    .add(params, "lightIntensity", 1, 100)
    .name("Light Intensity");
  controllers.rotationDirection = gui
    .add(params, "rotationDirection")
    .name("Change Rotation Direction");
}

/* Denne funktion bruges til at sætte værdierne af hvert slider og knap manuelt. Dette bruges blandt andet til at loade presets */
export function setValues(presetParams, songs) {
  /* Tager udgangspunkt i den preset object den får */
  const songNum = presetParams.songNum;
  /* sætter alle værdier af de forskellige GUI til værdierne fra preset params objektet. */
  controllers.earthSpeed.setValue(presetParams.earthSpeed);
  controllers.earthRotationSpeed.setValue(presetParams.earthRotationSpeed);
  controllers.lightIntensity.setValue(presetParams.lightIntensity);
  controllers.rotationDirection.setValue(presetParams.rotationDirection);
  controllers.volume.setValue(presetParams.volume);
  /* denne parameter er ikke i min gui, men da den skal sættes sammen med de andre sættes den her */
  /* Dette ser hvilken music video bør afspilles, på basis ad den preset der lige er blevet åbnet.
  Tjekker om både player, sang numeret, og sang arrayet eksisterer */
  if (player && songNum && songs) {
    /* Loader videoen på basis af dens video id, som den får fra sang arrayen. -1 da arrays starter med at tælle fra 0 */
    player.loadVideoById(songs[songNum - 1].id);
    /* Afspiller videoen */
    player.playVideo();
  }
}

/* En anden expoteret function, der bare skal skifte GUI fra synlig til usynlig*/
export function toggleGUI(objectsVisible) {
  gui.show(objectsVisible);
}

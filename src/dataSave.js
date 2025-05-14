import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  arrayUnion,
} from "firebase/firestore";

let dataModel;
export let savedPresets = [];

export async function fetchData() {
  const realoadCollection = collection(db, "reload");
  const snapshot = await getDocs(realoadCollection);

  const doc = snapshot.docs[0];
  dataModel = doc.data();
  getSavedPresets();
}

//A function that sends presets with rgb values of accent lighting and main lighting, and speed + rotation direction
//of the motors to the firebase database.
export async function savePreset(
  name,
  volume,
  song,
  earthSpeed,
  earthRotationSpeed,
  lightIntensity,
  rotationDirection
) {
  let savedPreset = {
    name: name,
    volume: volume,
    songNum: song,
    earthSpeed: earthSpeed,
    earthRotationSpeed: earthRotationSpeed,
    lightIntensity: lightIntensity,
    rotationDirection: rotationDirection,
  };
  const docRef = doc(db, "reload", "presets");
  try {
    await setDoc(
      docRef,
      {
        presets: arrayUnion(savedPreset),
      },
      { merge: true }
    );

    console.log("database updated", savedPreset);
  } catch (error) {
    console.log("det gik mindre godt", error);
  }
  getSavedPresets();
}

//A function that takes the presets from the database and puts them in an array alphabetically.
async function getSavedPresets() {
  savedPresets = dataModel.presets;
  savedPresets.sort((a, b) => (a.name > b.name ? 1 : -1));
  return savedPresets;
}

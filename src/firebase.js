import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { theKey } from "./key.js";

const firebaseConfig = {
  apiKey: theKey,

  authDomain: "mental-reload-95d66.firebaseapp.com",

  projectId: "mental-reload-95d66",

  storageBucket: "mental-reload-95d66.firebasestorage.app",

  messagingSenderId: "634955541388",

  appId: "1:634955541388:web:64a9e7fc037ead46f1c4a9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

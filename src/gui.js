import GUI from "lil-gui";
import { changeGradCol } from "./phillipsHue";

let gui;

export function initGUI(params) {
  gui = new GUI();
  gui
    .add(params, "color", 0, 100, 1)
    .name("color")
    .onChange((value) => {
      changeGradCol(value);
      console.log(value);
    });
}

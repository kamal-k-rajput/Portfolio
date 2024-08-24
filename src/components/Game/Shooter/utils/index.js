import { Stage } from "createjs-module";
import { Container } from "createjs-module";
import { background } from "./background";

const canvasRef = document.getElementById("shooter-game");
export const stage = new Stage(canvasRef);
export const parentContainer = new Container();
stage.addChild(background);
stage.addChild(parentContainer);

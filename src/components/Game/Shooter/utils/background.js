import { Shape } from "createjs-module";

export const background = new Shape();
background.graphics
  .beginFill("white")
  .drawRect(0, 0, window.innerWidth, window.screen.height);

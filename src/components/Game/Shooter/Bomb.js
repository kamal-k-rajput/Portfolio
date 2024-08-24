import { Shape } from "createjs-module";
import { getRandomHexColor, getRandomNumber } from "./utils/math";

export class Bomb extends Shape {
  radius;
  color;
  shape;
  constructor() {
    super();
    this.radius = getRandomNumber(40, 100);
    this.color = getRandomHexColor();
    // this.shape = new Shape();
    this.graphics.beginFill(this.color).drawCircle(0, 0, this.radius);

    this.x = getRandomNumber(this.radius, window.screen.width);
    this.y = getRandomNumber(this.radius, window.screen.height);;
  }
}

import { Shape } from "createjs-module";

export class Bullet extends Shape {
  color;
  shape;
  constructor() {
    super();

    this.color = "#E25822";
    // this.shape = new Shape();
    this.graphics.beginFill(this.color).drawRect(0, 0, 5, 20);
    this.x = 300;
    this.y = 300;
  }
}

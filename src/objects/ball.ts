import p5 from "p5";
import { getCanvasWidth, getCanvasHeight } from "../utils";

export class Ball {
  x: number;
  y: number;
  r: number;
  p: p5;
  stroke_subtractor: number;
  bgColor: number;
  bgColorVelocity: number = +5;
  BG_COLOR_VELOCITY_UP: number = +10;
  BG_COLOR_VELOCITY_DOWN: number = -5;

  constructor({
    p,
    x,
    y,
    r,
    initialColor,
  }: {
    p: p5;
    x: number;
    y: number;
    r: number;
    initialColor: number;
  }) {
    this.p = p;

    this.x = x;
    this.y = y;
    this.r = r;
    this.stroke_subtractor = -30;
    this.bgColor = initialColor;
  }

  changeColor() {
    // change direction
    if (this.bgColor < 0) {
      this.bgColorVelocity = this.BG_COLOR_VELOCITY_UP;
    } else if (this.bgColor > 255) {
      this.bgColorVelocity = this.BG_COLOR_VELOCITY_DOWN;
    }

    // apply velocity on color
    this.bgColor = this.bgColor + this.bgColorVelocity;
  }

  paint() {
    this.p.stroke(
      (this.bgColor + this.stroke_subtractor) % 255,
      (this.bgColor + this.stroke_subtractor) % 255,
      (this.bgColor + this.stroke_subtractor) % 255
    );
    this.p.fill(this.bgColor, this.bgColor, this.bgColor);
    this.p.ellipse(this.x, this.y, this.r);
  }
}

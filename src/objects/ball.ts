import p5 from "p5";

export class Ball {
  p: p5;

  width: number;
  height: number;
  raid: number;

  stroke_subtractor: number;
  bgColor: number;
  bgColorVelocity: number = +5;
  BG_COLOR_VELOCITY_UP: number = +10;
  BG_COLOR_VELOCITY_DOWN: number = -5;

  constructor({
    p,
    width,
    height,
    raid,
    defaultBgColor,
  }: {
    p: p5;
    width: number;
    height: number;
    raid: number;
    defaultBgColor: number;
  }) {
    this.p = p;

    this.width = width;
    this.height = height;
    this.raid = raid;
    this.stroke_subtractor = -30;
    this.bgColor = defaultBgColor;
  }

  changeColorWithVelocity() {
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
    this.p.ellipse(this.width, this.height, this.raid);
  }
}

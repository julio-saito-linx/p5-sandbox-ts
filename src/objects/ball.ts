import p5 from "p5";

export class Ball {
  p: p5;

  width: number;
  height: number;
  raid: number;

  stroke_subtractor: number;
  bgColor: number;
  bgColorVelocity: number = -5;
  BG_COLOR_VELOCITY_UP: number = +5;
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
    this.stroke_subtractor = -10;
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
    const r = (this.bgColor + 10 + this.stroke_subtractor) % 255;
    const g = (this.bgColor + 10 + this.stroke_subtractor) % 255;
    const b = (this.bgColor + 20 + this.stroke_subtractor) % 255;

    this.p.stroke(
      r + this.stroke_subtractor,
      g + this.stroke_subtractor,
      b + this.stroke_subtractor
    );
    this.p.fill(r, g, b);
    this.p.ellipse(this.width, this.height, this.raid);
  }
}

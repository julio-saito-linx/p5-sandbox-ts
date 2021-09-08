import p5 from "p5";

export class Ball {
  p: p5;

  width: number;
  height: number;
  raid: number;

  stroke_subtractor: number;
  bgColor: number;
  defaultBgColor: number;

  color_velocity: number = 10;
  bgColorVelocity: number = -this.color_velocity;
  BG_COLOR_VELOCITY_UP: number = +this.color_velocity;
  BG_COLOR_VELOCITY_DOWN: number = -this.color_velocity;

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
    this.defaultBgColor = defaultBgColor;
    this.bgColor = defaultBgColor;
  }

  changeColorWithVelocity() {
    // change direction
    if (this.bgColor < -10) {
      this.bgColor = 0;
      this.bgColorVelocity = this.BG_COLOR_VELOCITY_UP;
    } else if (this.bgColor >= 255) {
      this.bgColorVelocity = this.BG_COLOR_VELOCITY_DOWN;
    }

    // apply velocity on color
    this.bgColor = this.bgColor + this.bgColorVelocity;
  }

  paint() {
    const color = (this.bgColor + this.stroke_subtractor) % 255;

    this.p.stroke(color + this.stroke_subtractor);
    this.p.fill(color);
    this.p.ellipse(this.width, this.height, this.raid);
  }
}

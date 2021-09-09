import p5 from 'p5'

export class Ball {
  p: p5

  width: number
  height: number
  raid: number

  stroke_subtractor: number
  bgColor: number
  defaultBgColor: number

  color_velocity: number = 1

  bgColorRedVelocity: number = -this.color_velocity
  bgColorRed: number

  bgColorGreenVelocity: number = -this.color_velocity
  bgColorGreen: number

  bgColorBlueVelocity: number = -this.color_velocity
  bgColorBlue: number

  constructor({
    p,
    width,
    height,
    raid,
    defaultBgColor,
  }: {
    p: p5
    width: number
    height: number
    raid: number
    defaultBgColor: number
  }) {
    this.p = p

    this.width = width
    this.height = height
    this.raid = raid
    this.stroke_subtractor = -15
    this.defaultBgColor = defaultBgColor
    this.bgColor = defaultBgColor
    this.bgColorRed = defaultBgColor + 0
    this.bgColorGreen = defaultBgColor + 20
    this.bgColorBlue = defaultBgColor + 40
  }

  changeColorWithVelocity() {
    // change direction
    if (this.bgColorRed <= -60) {
      this.bgColorRed = 0
      this.bgColorRedVelocity = this.bgColorRedVelocity * -1
    } else if (this.bgColorRed >= 255) {
      this.bgColorRedVelocity = this.bgColorRedVelocity * -1
    }
    if (this.bgColorGreen <= -50) {
      this.bgColorGreen = 0
      this.bgColorGreenVelocity = this.bgColorGreenVelocity * -1
    } else if (this.bgColorGreen >= 255) {
      this.bgColorGreenVelocity = this.bgColorGreenVelocity * -1
    }
    if (this.bgColorBlue <= -40) {
      this.bgColorBlue = 0
      this.bgColorBlueVelocity = this.bgColorBlueVelocity * -1
    } else if (this.bgColorBlue >= 255) {
      this.bgColorBlueVelocity = this.bgColorBlueVelocity * -1
    }

    // apply velocity on color
    this.bgColorRed = this.bgColorRed + this.bgColorRedVelocity
    this.bgColorGreen = this.bgColorGreen + this.bgColorGreenVelocity
    this.bgColorBlue = this.bgColorBlue + this.bgColorBlueVelocity
  }

  paint() {
    this.p.stroke(
      this.bgColorRed + this.stroke_subtractor,
      this.bgColorGreen + this.stroke_subtractor,
      this.bgColorBlue + this.stroke_subtractor
    )
    this.p.fill(this.bgColorRed, this.bgColorGreen, this.bgColorBlue)
    this.p.ellipse(this.width, this.height, this.raid)

    // console.log({
    //   bgColorRed: this.bgColorRed,
    //   bgColorGreen: this.bgColorGreen,
    //   bgColorBlue: this.bgColorBlue,
    // });
  }
}

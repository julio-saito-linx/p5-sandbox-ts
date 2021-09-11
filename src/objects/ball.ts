import p5 from 'p5'

export class Ball {
  _p: p5

  position: p5.Vector
  velocity?: p5.Vector
  acceleration?: p5.Vector
  raid: number
  mass?: number

  body: {
    stroke_subtractor: number
    bgColor: number
    defaultBgColor: number

    color_velocity: number

    bgColorRedVelocity: number
    bgColorRed: number

    bgColorGreenVelocity: number
    bgColorGreen: number

    bgColorBlueVelocity: number
    bgColorBlue: number
  }

  constructor({
    _p: p,
    position,
    velocity,
    acceleration: accel,
    raid,
    mass,
    defaultBgColor,
  }: {
    _p: p5
    position: p5.Vector
    velocity?: p5.Vector
    acceleration?: p5.Vector
    raid: number
    mass?: number
    defaultBgColor: number
  }) {
    this._p = p

    this.position = position
    this.velocity = velocity
    this.acceleration = accel

    this.raid = raid
    this.mass = mass

    this.body = {
      color_velocity: 1,
      bgColorRedVelocity: -1,
      bgColorGreenVelocity: -1,
      bgColorBlueVelocity: -1,
      stroke_subtractor: -15,
      defaultBgColor: defaultBgColor,
      bgColor: defaultBgColor,
      bgColorRed: defaultBgColor + 0,
      bgColorGreen: defaultBgColor + 20,
      bgColorBlue: defaultBgColor + 40,
    }
  }

  changeColorWithVelocity() {
    // change direction
    if (this.body.bgColorRed <= -60) {
      this.body.bgColorRed = 0
      this.body.bgColorRedVelocity = this.body.bgColorRedVelocity * -1
    } else if (this.body.bgColorRed >= 255) {
      this.body.bgColorRedVelocity = this.body.bgColorRedVelocity * -1
    }
    if (this.body.bgColorGreen <= -50) {
      this.body.bgColorGreen = 0
      this.body.bgColorGreenVelocity = this.body.bgColorGreenVelocity * -1
    } else if (this.body.bgColorGreen >= 255) {
      this.body.bgColorGreenVelocity = this.body.bgColorGreenVelocity * -1
    }
    if (this.body.bgColorBlue <= -40) {
      this.body.bgColorBlue = 0
      this.body.bgColorBlueVelocity = this.body.bgColorBlueVelocity * -1
    } else if (this.body.bgColorBlue >= 255) {
      this.body.bgColorBlueVelocity = this.body.bgColorBlueVelocity * -1
    }

    // apply velocity on color
    this.body.bgColorRed = this.body.bgColorRed + this.body.bgColorRedVelocity
    this.body.bgColorGreen = this.body.bgColorGreen + this.body.bgColorGreenVelocity
    this.body.bgColorBlue = this.body.bgColorBlue + this.body.bgColorBlueVelocity
  }

  changeColorByVelocity() {
    // change direction
    if (this.velocity.y > 0) {
      this.body.bgColorRed = 167
    } else {
      this.body.bgColorRed = 67
    }
    if (this.velocity.x > 0) {
      this.body.bgColorGreen = 255
    } else {
      this.body.bgColorGreen = 130
    }
  }

  applyForce(force: p5.Vector) {
    this.velocity.add(force.div(this.mass))
    this.position.add(this.velocity)
  }

  paint() {
    this._p.stroke(
      this.body.bgColorRed + this.body.stroke_subtractor,
      this.body.bgColorGreen + this.body.stroke_subtractor,
      this.body.bgColorBlue + this.body.stroke_subtractor
    )
    this._p.fill(this.body.bgColorRed, this.body.bgColorGreen, this.body.bgColorBlue)
    this._p.ellipse(this.position.x, this.position.y, this.raid)

    // console.log({
    //   bgColorRed: this.bgColorRed,
    //   bgColorGreen: this.bgColorGreen,
    //   bgColorBlue: this.bgColorBlue,
    // });
  }
}

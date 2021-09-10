import p5 from 'p5'
import { Ball } from '../objects/ball'
import { getCanvasWidth, getCanvasHeight } from '../utils'
import { createBalls } from '../objects/createBalls'

/**
 * @param {p5} p
 */
export const simpleGravity = (p: p5) => {
  var yVal: number
  var accel: number
  var velocity: number
  var mass: number

  p.setup = () => {
    const canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p))
    canvas.parent('sketch-holder')
    // p.frameRate(60)

    yVal = 0
    velocity = 0
    mass = 40

    accel = mass * 0.1
    // balls = createBalls(p);
  }

  p.draw = () => {
    p.background(0)

    p.fill(255, 0, 0)

    velocity += accel
    yVal += velocity
    p.ellipse(p.width / 2, yVal, mass, mass)

    if (yVal > p.height - mass / 2) {
      // A little dampening when hitting the bottom
      velocity *= -0.6
      yVal = p.height - mass / 2
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p))
  }

  p.mousePressed = () => {
    yVal = 0
    velocity = 0
  }
}

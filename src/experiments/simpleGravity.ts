import p5 from 'p5'
import { Ball } from '../objects/ball'
import { getCanvasWidth, getCanvasHeight } from '../utils'
import { createBalls } from '../objects/createBalls'

/**
 * @param {p5} p
 */
export const simpleGravity = (p: p5) => {
  let ball: Ball

  p.setup = () => {
    const canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p))
    canvas.parent('sketch-holder')
    // p.frameRate(60)

    ball = new Ball({
      _p: p,
      position: p.createVector(getCanvasWidth(p) / 2, 0),
      velocity: p.createVector(0, 0),
      acceleration: p.createVector(0, 0),
      raid: 30,
      mass: 1,
      defaultBgColor: 30,
    })
  }

  const gravity = p.createVector(0, 0.6)
  const wind = p.createVector(0.2, 0)

  p.draw = () => {
    p.background(0)

    p.fill(255, 0, 0)

    ball.applyForce(gravity)
    ball.applyForce(wind)

    if (ball.position.y > p.height - ball.raid / 2) {
      // A little dampening when hitting the bottom
      ball.velocity.y *= -0.7
      ball.position.y = p.height - ball.raid / 2
    }
    if (ball.position.x > p.width - ball.raid / 2) {
      // A little dampening when hitting the bottom
      ball.velocity.x *= -0.4
      ball.position.x = p.width - ball.raid / 2
      wind.rotate(180)
    }
    if (ball.position.x < 0 + ball.raid / 2) {
      // A little dampening when hitting the bottom
      ball.velocity.x *= -0.4
      ball.position.x = 0 + ball.raid / 2
      wind.rotate(180)
    }

    ball.changeColorByVelocity()
    ball.paint()
  }

  p.windowResized = () => {
    p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p))
  }

  p.mousePressed = () => {
    ball.position.x = p.mouseX
    ball.position.y = p.mouseY
    ball.velocity.y = 0
  }
}

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
      accel: p.createVector(0, 0),
      raid: 30,
      mass: 40,
      defaultBgColor: 30,
    })

    ball.accel.set(0, ball.mass * 0.1)
    // balls = createBalls(p);
  }

  p.draw = () => {
    p.background(0)

    p.fill(255, 0, 0)

    ball.velocity.add(ball.accel)
    ball.position.add(ball.velocity)
    ball.paint()
    // p.ellipse(p.width / 2, ball.position.y, ball.mass, ball.mass)

    if (ball.position.y > p.height - ball.mass / 2) {
      // A little dampening when hitting the bottom
      ball.velocity.y *= -0.6
      ball.position.y = p.height - ball.mass / 2
    }
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

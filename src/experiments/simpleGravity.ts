import p5 from 'p5'
import { Ball } from '../objects/ball'
import { getCanvasWidth, getCanvasHeight } from '../utils'

/**
 * @param {p5} p
 */
export const simpleGravity = (p: p5) => {
  let balls: Ball[] = []
  const MAX_BALLS: number = 10

  p.setup = () => {
    const canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p))
    canvas.parent('sketch-holder')
  }

  const gravity = p.createVector(0, 0.6)
  const wind = p.createVector(0.2, 0)

  p.draw = () => {
    p.background(0)

    p.fill(255, 0, 0)

    for (let i = 0; i < balls.length; i += 1) {
      const ball = balls[i]

      ball.applyForce(gravity)
      ball.applyForce(wind)

      if (ball.position.y > p.height - ball.raid / 2) {
        // A little dampening when hitting the bottom
        ball.velocity.y *= -1
        ball.position.y = p.height - ball.raid / 2
      }
      if (ball.position.x > p.width - ball.raid / 2) {
        // A little dampening when hitting the bottom
        ball.velocity.x *= -1
        ball.position.x = p.width - ball.raid / 2
        wind.rotate(180)
      }
      if (ball.position.x < 0 + ball.raid / 2) {
        // A little dampening when hitting the bottom
        ball.velocity.x *= -1
        ball.position.x = 0 + ball.raid / 2
        wind.rotate(180)
      }

      ball.changeColorByVelocity()
      ball.paint()
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p))
  }

  p.mousePressed = (ev) => {
    console.log('--  ev: ', ev)
    const ball = new Ball({
      _p: p,
      position: p.createVector(p.mouseX, p.mouseY),
      velocity: p.createVector(0, 0),
      acceleration: p.createVector(0, 0),
      raid: 30,
      mass: 1,
      defaultBgColor: 30,
    })

    if (balls.length > MAX_BALLS) {
      balls.shift()
    }

    balls.push(ball)
  }
}

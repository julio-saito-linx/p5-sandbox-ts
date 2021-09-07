import _ from "lodash";
import p5 from "p5";
import { Ball } from "./objects/ball";
import { getCanvasWidth, getCanvasHeight } from "./utils";

function createBalls(p: p5) {
  const balls: Ball[] = [];
  const numbers = _.range(25, getCanvasWidth(p) - 50, 60);

  for (let i = 0; i < numbers.length; i++) {
    const xCenter = getCanvasWidth(p) / 2;
    const yCenter = getCanvasHeight(p) / 2;
    const r = numbers[i];

    const ball = new Ball({
      p,
      x: xCenter,
      y: yCenter,
      r,
      initialColor: i * 10,
    });
    balls.push(ball);
  }

  return balls;
}

/**
 * @param {p5} p
 */
export const sketch = (p: p5) => {
  let balls: Ball[] = [];

  p.setup = () => {
    p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
    p.frameRate(30);
    balls = createBalls(p);
  };

  p.draw = () => {
    p.background(0);

    // paint balls
    for (let i = balls.length - 1; i >= 0; i--) {
      const ball = balls[i];
      ball.changeColor();
      ball.paint();
    }
  };

  p.windowResized = () => {
    console.log("windowResized");
    balls = createBalls(p);
    p.resizeCanvas(getCanvasWidth(p), getCanvasHeight(p));
  };

  p.keyPressed = () => {
    // Export sketch's canvas to file
    if (p.keyCode === 80) {
      p.saveCanvas("sketch", "png");
    }
  };
};

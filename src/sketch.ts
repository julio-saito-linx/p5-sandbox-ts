import _ from "lodash";
import p5 from "p5";
import { Ball } from "./objects/ball";
import { getCanvasWidth, getCanvasHeight } from "./utils";

function createBalls(p: p5) {
  const balls: Ball[] = [];
  const raids = _.range(
    25,
    p.min(getCanvasWidth(p) - 50, getCanvasHeight(p) - 50),
    20
  );

  const ballsCount = raids.length;
  console.log("--  ballsCount: ", ballsCount);

  for (let i = 0; i < raids.length; i++) {
    const xCenter = getCanvasWidth(p) / 2;
    const yCenter = getCanvasHeight(p) / 2;
    const r = raids[i];

    const ball = new Ball({
      p,
      width: xCenter,
      height: yCenter,
      raid: r,
      defaultBgColor: i * 10,
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
      ball.changeColorWithVelocity();
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

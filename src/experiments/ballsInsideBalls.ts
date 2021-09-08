import p5 from "p5";
import { Ball } from "../objects/ball";
import { getCanvasWidth, getCanvasHeight } from "../utils";
import { createBalls } from "../objects/createBalls";

/**
 * @param {p5} p
 */
export const ballsInsideBalls = (p: p5) => {
  let balls: Ball[] = [];

  p.setup = () => {
    const canvas = p.createCanvas(getCanvasWidth(p), getCanvasHeight(p));
    canvas.parent("sketch-holder");
    p.frameRate(60);
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

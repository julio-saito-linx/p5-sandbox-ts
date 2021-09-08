import _ from "lodash";
import p5 from "p5";
import { Ball } from "./ball";
import { getCanvasWidth, getCanvasHeight } from "../utils";

export function createBalls(p: p5) {
  const balls: Ball[] = [];
  const raids = _.range(
    25,
    p.min(getCanvasWidth(p) - 50, getCanvasHeight(p) - 50),
    20
  );

  const ballsCount = raids.length;
  console.log({ ballsCount });
  const increment_color = 200 / ballsCount;

  for (let i = 0; i < raids.length; i++) {
    const xCenter = getCanvasWidth(p) / 2;
    const yCenter = getCanvasHeight(p) / 2;
    const r = raids[i];

    const ball = new Ball({
      p,
      width: xCenter,
      height: yCenter,
      raid: r,
      defaultBgColor: i * increment_color,
    });
    balls.push(ball);
  }

  return balls;
}

import p5 from 'p5'
import { ballsInsideBalls } from './experiments/ballsInsideBalls'
import { simpleGravity } from './experiments/simpleGravity'

// show list of experiments
if (
  document.location.href === `${document.location.origin}/p5-sandbox-ts` ||
  document.location.href === `${document.location.origin}/`
) {
  document.querySelector<HTMLDivElement>('.experiments').style.display = 'flex'
}

// experiments:
if (document.location.href === `${document.location.origin}/p5-sandbox-ts/ballsInsideBalls`) {
  new p5(ballsInsideBalls)
}
if (document.location.href === `${document.location.origin}/p5-sandbox-ts/simpleGravity`) {
  new p5(simpleGravity)
}

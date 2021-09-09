import p5 from 'p5'
import { ballsInsideBalls } from './experiments/ballsInsideBalls'
import { simpleGravity } from './experiments/simpleGravity'

// show list of experiments
if (document.location.pathname === '/' || document.location.pathname === '') {
  document.querySelector<HTMLDivElement>('.experiments').style.display = 'flex'
}

// experiments:
if (document.location.pathname === '/ballsInsideBalls') {
  new p5(ballsInsideBalls)
}
if (document.location.pathname === '/simpleGravity') {
  new p5(simpleGravity)
}

import p5 from 'p5'

export function getCanvasWidth(p: p5) {
  return p.windowWidth - 40
}

export function getCanvasHeight(p: p5) {
  return p.windowHeight - 70
}

import p5 from "p5";

/**
 * @param {p5} p
 */
export const sketch = (p: p5) => {
  const STROKE_SUB = -20;

  p.setup = () => {
    p.createCanvas(getCanvasWidth(), getCanvasHeight());
    p.frameRate(60);
  };

  p.draw = () => {
    p.background(50);

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      p.stroke(
        num * 17 + STROKE_SUB,
        num * 17 + STROKE_SUB,
        num * 17 + STROKE_SUB
      );
      p.fill(num * 10, num * 10, num * 10);
      p.ellipse(
        getCanvasWidth() / 2,
        getCanvasHeight() / 2,
        getCanvasWidth() * 0.1 * num,
        getCanvasWidth() * 0.1 * num
      );
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(getCanvasWidth(), getCanvasHeight());
  };

  p.keyPressed = () => {
    // Export sketch's canvas to file
    if (p.keyCode === 80) {
      p.saveCanvas("sketch", "png");
    }
  };

  function getCanvasWidth() {
    return p.windowWidth - 40;
  }

  function getCanvasHeight() {
    return p.windowHeight - 20;
  }
};

import p5 from "p5";

/**
 * @param {p5} p
 */
export const sketch = (p: p5) => {
  const canvasWidth = p.windowWidth - 40;
  const canvasHeight = p.windowHeight - 20;
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight);
    p.frameRate(30);
  };

  p.draw = () => {
    p.background(50);

    const numbers = [0, 1, 2, 3, 4, 5, 6].reverse();
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      p.ellipse(canvasWidth / 2, canvasHeight / 2, 50 * element, 50 * element);
    }
  };

  p.keyPressed = () => {
    // Export sketch's canvas to file
    if (p.keyCode === 80) {
      p.saveCanvas("sketch", "png");
    }
  };
};

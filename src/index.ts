import p5 from "p5";
import { ballsInsideBalls } from "./experiments/ballsInsideBalls";

// show list of experiments
if (document.location.pathname === "/") {
  document.getElementById("experiments").style.display = "";
}

// experiments:
if (document.location.pathname === "/ballsInsideBalls") {
  new p5(ballsInsideBalls);
}

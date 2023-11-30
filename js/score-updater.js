import { elScore } from "./html-elements.js";
import { ai, user } from "./players.js";

const scoreUpdater = (winner, score, value) => {
  if (winner === ai && value === "-" && +elScore.innerText - score >= 0) {
    elScore.innerText = +elScore.innerText - score;
  } else if (value === "+") {
    if (winner === user) elScore.innerText = +elScore.innerText + score;
  }
};

export default scoreUpdater;

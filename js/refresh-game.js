import cssClassModifiers from "./css-class-modifiers.js";
import { elRefreshGameWindow, elStatus } from "./html-elements.js";
import { ai, user } from "./players.js";

const refreshGame = (winner = "tied") => {
  const { flex, hidden } = cssClassModifiers;
  if (winner === ai) {
    elStatus.innerText = "You lose";
  } else if (winner === user) {
    elStatus.innerText = "You win";
  } else {
    elStatus.innerText = `You ${winner}`;
  }
  elRefreshGameWindow.classList.remove(hidden);
  elRefreshGameWindow.classList.add(flex);
};

export default refreshGame;

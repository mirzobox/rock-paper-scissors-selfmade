import cssClassModifiers from "./css-class-modifiers.js";
import { paper, rock, scissors } from "./hands.js";
import { elAiHand, elUserHand } from "./html-elements.js";
import { ai, user } from "./players.js";
import refreshGame from "./refresh-game.js";
import scoreUpdater from "./score-updater.js";

const checkWinner = (userHand, aiHand) => {
  const { winShadow, smallScreenSize, winShadowSmall } = cssClassModifiers;
  if (userHand === aiHand) {
    refreshGame();
  } else {
    if (
      (userHand === paper && aiHand === rock) ||
      (userHand === scissors && aiHand === paper) ||
      (userHand === rock && aiHand === scissors)
    ) {
      if (innerWidth <= smallScreenSize)
        elUserHand.classList.add(winShadowSmall);
      else elUserHand.classList.add(winShadow);
      scoreUpdater(user, 1, "+");
      refreshGame(user);
    } else {
      if (innerWidth <= smallScreenSize) elAiHand.classList.add(winShadowSmall);
      else elAiHand.classList.add(winShadow);
      scoreUpdater(ai, 1, "-");
      refreshGame(ai);
    }
  }
};

export default checkWinner;

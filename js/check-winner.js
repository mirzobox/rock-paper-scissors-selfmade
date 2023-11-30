import cssClassModifiers from "./css-class-modifiers.js";
import { paper, rock, scissors } from "./hands.js";
import { elAiHand, elUserHand } from "./html-elements.js";
import { ai, user } from "./players.js";
import scoreUpdater from "./score-updater.js";

const checkWinner = (userHand, aiHand) => {
  const { winShadow } = cssClassModifiers;
  if (userHand === aiHand) console.log("Durang bo'ldi");
  else {
    if (
      (userHand === paper && aiHand === rock) ||
      (userHand === scissors && aiHand === paper) ||
      (userHand === rock && aiHand === scissors)
    ) {
      elUserHand.classList.add(winShadow);
      scoreUpdater(user, 1, "+");
    } else {
      elAiHand.classList.add(winShadow);
      scoreUpdater(ai, 1, "-");
    }
  }
};

export default checkWinner;

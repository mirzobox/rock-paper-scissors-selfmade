import aiHands from "./ai-hands.js";
import cssClassModifiers from "./css-class-modifiers.js";
import { elAiHand, elUserHand } from "./html-elements.js";

const uiUpdater = (target) => {
  const { timeout } = cssClassModifiers;
  elUserHand.src = target.src;
  elUserHand.dataset.hand = target.alt;
  setTimeout(() => {
    const aiHand = aiHands();
    elAiHand.src = origin + `/img/${aiHand}.svg`;
    elAiHand.dataset.hand = aiHand;
  }, timeout);
};

export default uiUpdater;

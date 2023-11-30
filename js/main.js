import cssClassModifiers from "./css-class-modifiers.js";
import {
  elAiHand,
  elHands,
  elRefreshGameButton,
  elRefreshGameWindow,
  elRulesModal,
  elShowRulesModalButton,
  elUserHand,
} from "./html-elements.js";
import loader from "./loader.js";
import setProcess from "./set-process.js";
import uiUpdater from "./ui-updater.js";

// Loader
window.onload = () => {
  loader(false);
};

// Rules modal controller
elShowRulesModalButton.onclick = () => {
  elRulesModal.showModal();
};

elRulesModal.onclick = ({ target }) => {
  target === elRulesModal && elRulesModal.close();
};

// Set hand
elHands.forEach((hand) => {
  hand.onclick = ({ target }) => {
    uiUpdater(target);
    setProcess(true);
  };
});

// Refresh game
elRefreshGameButton.onclick = () => {
  const { hidden, flex, winShadow } = cssClassModifiers;
  elRefreshGameWindow.classList.remove(flex);
  elRefreshGameWindow.classList.add(hidden);

  // Remove winner shadow
  elUserHand.classList.remove(winShadow);
  elAiHand.classList.remove(winShadow);
  setProcess(false);
};

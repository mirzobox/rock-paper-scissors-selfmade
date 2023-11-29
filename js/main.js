import {
  elHands,
  elRulesModal,
  elShowRulesModalButton,
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

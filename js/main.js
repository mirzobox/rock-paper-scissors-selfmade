import { elRulesModal, elShowRulesModalButton } from "./html-elements.js";
import loader from "./loader.js";

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

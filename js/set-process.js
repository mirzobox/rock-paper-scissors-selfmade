import cssClassModifiers from "./css-class-modifiers.js";
import { elGameZone, elProcess } from "./html-elements.js";

const setProcess = (value) => {
  const { hidden } = cssClassModifiers;
  if (value) {
    elGameZone.classList.add(hidden);
    elProcess.classList.remove(hidden);
  } else {
    elGameZone.classList.remove(hidden);
    elProcess.classList.add(hidden);
  }
};

export default setProcess;

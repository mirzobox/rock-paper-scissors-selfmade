import cssClassModifiers from "./css-class-modifiers.js";
import { elLoader } from "./html-elements.js";

const loader = (value) => {
  const { loaderWrapperNone, timeout } = cssClassModifiers;
  if (value) {
    elLoader.classList.remove(loaderWrapperNone);
  } else {
    setTimeout(() => {
      elLoader.classList.add(loaderWrapperNone);
    }, timeout);
  }
};

export default loader;

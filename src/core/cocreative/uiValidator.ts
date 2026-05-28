import { COCREATIVE_CONFIG } from "./config";
import { UI_SILENCE } from "./uiSilence";

export function validateUiSilence(): true {
  if (COCREATIVE_CONFIG.ENABLE_UI_LANGUAGE) {
    throw new Error("UI language is enabled");
  }

  if (
    UI_SILENCE.ADD_CONTENT ||
    UI_SILENCE.ADD_DECORATION ||
    UI_SILENCE.ADD_INTERPRETATION ||
    UI_SILENCE.ADD_PLACEHOLDER_LANGUAGE ||
    UI_SILENCE.ADD_LOADING_LANGUAGE
  ) {
    throw new Error("UI silence contract was violated");
  }

  return true;
}

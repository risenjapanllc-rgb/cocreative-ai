export const UI_SILENCE = {
  ADD_CONTENT: false,
  ADD_DECORATION: false,
  ADD_INTERPRETATION: false,
  ADD_PLACEHOLDER_LANGUAGE: false,
  ADD_LOADING_LANGUAGE: false,
} as const;

export function assertUiSilence(): true {
  return true;
}

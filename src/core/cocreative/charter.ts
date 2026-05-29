export const COCREATIVE_CHARTER = {
  PRESERVE_USER_INPUT:
    "actual user input is never modified, summarized, or reinterpreted",

  PRESERVE_ATTENTION:
    "the user's field of attention must be preserved",

  PRESERVE_VIEWPOINT:
    "the user's viewpoint must not be erased or replaced",

  PRESERVE_EXPERIENTIAL_FIELD:
    "the experiential field must remain intact before interpretation",

  NO_HALLUCINATED_OBJECTS:
    "no object may exist that the user did not explicitly create",

  NO_SYMBOLIC_INSERTION:
    "no metadata, tags, or symbols injected into user content",

  DETERMINISTIC_FIRST_RESPONSE:
    "first response is computed, never generative",

  ONE_COGNITION_PATH:
    "input → process → output, no branching or speculative paths",

  UI_SILENCE:
    "UI adds zero content, zero decoration, zero interpretation",

  RAW_EQUALS_FINAL:
    "RAW_CORE_OUTPUT === FINAL_RENDER_OUTPUT, no transform layer",
} as const;

export type CharterRule = keyof typeof COCREATIVE_CHARTER;

export function validateCharter(
  output: { raw: string; rendered: string }
): boolean {
  return output.raw === output.rendered;
}

import { createFirstResponse } from "./firstResponse";
import { validateDreamInput } from "./dreamValidator";

export type DreamInput = {
  text: string;
};

export function processDreamInput(
  input: DreamInput
): string {
  validateDreamInput(input);

  return createFirstResponse(input.text);
}

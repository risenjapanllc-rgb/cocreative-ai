import { createFirstResponse } from "./firstResponse";

export type DreamInput = {
  text: string;
};

export function processDreamInput(
  input: DreamInput
): string {
  return createFirstResponse(input.text);
}

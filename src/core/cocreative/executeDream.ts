import { DreamInput, processDreamInput } from "./dream";

export function executeDream(
  input: DreamInput
): string {
  return processDreamInput(input);
}

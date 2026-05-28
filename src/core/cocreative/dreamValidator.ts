import { DreamInput } from "./dream";

export function validateDreamInput(
  input: DreamInput
): true {
  if (!input.text.trim()) {
    throw new Error("Dream input is empty");
  }

  return true;
}

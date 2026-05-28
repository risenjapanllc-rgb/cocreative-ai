import { createCognition } from "./cognition";
import { validatePipelineOutput } from "./validator";
import { RAW_EQUALS_FINAL } from "./pipeline";

export function runCoCreativeCore(input: string): string {
  const output = createCognition(input);

  validatePipelineOutput(output);

  if (!RAW_EQUALS_FINAL) {
    throw new Error("RAW and FINAL output diverged");
  }

  return output.final;
}

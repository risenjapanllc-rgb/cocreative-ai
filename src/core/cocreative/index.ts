import { createCognition } from "./cognition";
import { RAW_EQUALS_FINAL } from "./pipeline";
import { canReflect } from "./reflect";
import { validateCoreIntegrity } from "./integrity";

export function runCoCreativeCore(input: string): string {
  const output = createCognition(input);

  validateCoreIntegrity(output);

  if (!RAW_EQUALS_FINAL) {
    throw new Error("RAW and FINAL output diverged");
  }

  const reflectionAllowed = canReflect({
    input,
    received: output.raw,
  });

  if (!reflectionAllowed) {
    return output.final;
  }

  return output.final;
}

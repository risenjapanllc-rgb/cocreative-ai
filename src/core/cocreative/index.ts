import { createCognition } from "./cognition";
import { validatePipelineOutput } from "./validator";

export function runCoCreativeCore(input: string) {
  const output = createCognition(input);

  validatePipelineOutput(output);

  return output.final;
}

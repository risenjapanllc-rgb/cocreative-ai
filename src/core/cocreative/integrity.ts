import { CorePipelineOutput } from "./pipeline";
import { validatePipelineOutput } from "./validator";
import { validateUiSilence } from "./uiValidator";

export function validateCoreIntegrity(
  output: CorePipelineOutput
): true {
  validatePipelineOutput(output);
  validateUiSilence();

  return true;
}

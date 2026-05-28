import { CorePipelineOutput } from "./pipeline";

export function validatePipelineOutput(
  output: CorePipelineOutput
): boolean {
  if (output.raw !== output.final) {
    throw new Error(
      "RAW_CORE_OUTPUT does not match FINAL_RENDER_OUTPUT"
    );
  }

  return true;
}

import { createDeterministicReception } from "./reception";
import {
  createPipelineOutput,
  CorePipelineOutput,
} from "./pipeline";

export function createCognition(
  input: string
): CorePipelineOutput {
  const received =
    createDeterministicReception(input);

  return createPipelineOutput(received);
}

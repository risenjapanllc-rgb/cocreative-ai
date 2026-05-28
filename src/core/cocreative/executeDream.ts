import { DreamInput, processDreamInput } from "./dream";
import { assertValidResponse } from "./responseGuard";

export function executeDream(
  input: DreamInput
): string {
  const response = processDreamInput(input);

  assertValidResponse(response);

  return response;
}

import { renderDreamFromInput } from "./uiAdapter";

export function runPublicDreamPipeline(
  input: string
): string {
  return renderDreamFromInput(input);
}

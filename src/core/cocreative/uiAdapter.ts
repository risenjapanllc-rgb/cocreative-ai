import { executeDream } from "./executeDream";

export function renderDreamFromInput(
  text: string
): string {
  return executeDream({
    text,
  });
}

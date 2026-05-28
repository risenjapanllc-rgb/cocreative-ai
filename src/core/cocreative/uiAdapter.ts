import { executeDream } from "./executeDream";
import { assertCoreRoute } from "./routeGuard";

export function renderDreamFromInput(
  text: string
): string {
  assertCoreRoute("COCREATIVE_CORE");

  return executeDream({
    text,
  });
}

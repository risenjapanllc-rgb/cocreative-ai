import { COCREATIVE_CONFIG } from "./config";

export type ReflectiveContext = {
  input: string;
  received: string;
};

export function canReflect(
  context: ReflectiveContext
): boolean {
  if (!COCREATIVE_CONFIG.ENABLE_REFLECTION) {
    return false;
  }

  if (!COCREATIVE_CONFIG.ENABLE_LLM) {
    return false;
  }

  if (!context.input.trim()) {
    return false;
  }

  return false;
}

export type ReflectiveContext = {
  input: string;
  received: string;
};

export function canReflect(
  context: ReflectiveContext
): boolean {
  if (!context.input.trim()) {
    return false;
  }

  return false;
}

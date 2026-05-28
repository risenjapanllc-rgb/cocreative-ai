export function assertCoreRoute(
  route: string
): true {
  if (route !== "COCREATIVE_CORE") {
    throw new Error(
      `Invalid cognition route: ${route}`
    );
  }

  return true;
}

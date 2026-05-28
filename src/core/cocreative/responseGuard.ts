export function assertValidResponse(
  response: string
): true {
  if (!response.trim()) {
    throw new Error("Response is empty");
  }

  return true;
}

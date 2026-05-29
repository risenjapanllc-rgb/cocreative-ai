/**
 * Reception Phase 1
 *
 * Minimal deterministic reception.
 *
 * Purpose:
 * - preserve input continuity
 * - verify one cognition path
 * - verify RAW_CORE_OUTPUT === FINAL_RENDER_OUTPUT
 *
 * See:
 * RECEPTION_EVOLUTION.md
 */
export const RECEPTION_PHASE = 1 as const;

export function createDeterministicReception(input: string): string {
  const trimmed = input.trim();

  if (!trimmed) {
    return "";
  }

  return `${trimmed}なのですね。`;
}

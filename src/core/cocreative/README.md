# CoCreative Core

This core preserves the user's actual input before any generative layer.

## Principles

- Preserve actual user input
- No hallucinated objects
- No symbolic insertion
- Deterministic first response
- One cognition path
- UI silence
- RAW_CORE_OUTPUT === FINAL_RENDER_OUTPUT

## Current flow

```text
input
→ deterministic reception
→ cognition
→ pipeline(raw = final)
→ integrity validation
→ first response

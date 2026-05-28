export type CorePipelineOutput = {
  raw: string;
  final: string;
};

export function createPipelineOutput(
  raw: string
): CorePipelineOutput {
  return {
    raw,
    final: raw,
  };
}

export const RAW_EQUALS_FINAL = true;

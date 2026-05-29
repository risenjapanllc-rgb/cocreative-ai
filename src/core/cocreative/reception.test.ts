import {
  createDeterministicReception,
  RECEPTION_PHASE,
} from "./reception";

const input = "窓の外は雨";
const output = createDeterministicReception(input);

console.log({
  phase: RECEPTION_PHASE,
  input,
  output,
});

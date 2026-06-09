import { Float } from "@internal/prelude";
import { Spring } from "./Spring.ts";

export interface Springs {
  readonly spatialFast: Spring,
  readonly spatialDefault: Spring,
  readonly spatialSlow: Spring,
  readonly effectsFast: Spring,
  readonly effectsDefault: Spring,
  readonly effectsSlow: Spring,
}

const baseline = (): Springs => {
  return {
    spatialFast: {
      damping: Float.create(0.9),
      stiffness: Float.create(1400),
    },
    spatialDefault: {
      damping: Float.create(0.9),
      stiffness: Float.create(700),
    },
    spatialSlow: {
      damping: Float.create(0.9),
      stiffness: Float.create(300),
    },
    effectsFast: {
      damping: Float.create(1),
      stiffness: Float.create(3800),
    },
    effectsDefault: {
      damping: Float.create(1),
      stiffness: Float.create(1600),
    },
    effectsSlow: {
      damping: Float.create(1),
      stiffness: Float.create(800),
    },
  };
};

export const Springs = {
  baseline,
};
import { Reference, Springs } from "@internal/prelude";

export const SpringsReferences = {
  spatialFast: Reference.create(
    "Springs.spatialFast",
    (it: Springs) => it.spatialFast,
  ),
  spatialFastDamping: Reference.create(
    "Springs.spatialFast.damping",
    (it: Springs) => it.spatialFast.damping,
  ),
  spatialFastStiffness: Reference.create(
    "Springs.spatialFast.stiffness",
    (it: Springs) => it.spatialFast.stiffness,
  ),
  spatialDefault: Reference.create(
    "Springs.spatialDefault",
    (it: Springs) => it.spatialDefault,
  ),
  spatialDefaultDamping: Reference.create(
    "Springs.spatialDefault.damping",
    (it: Springs) => it.spatialDefault.damping,
  ),
  spatialDefaultStiffness: Reference.create(
    "Springs.spatialDefault.stiffness",
    (it: Springs) => it.spatialDefault.stiffness,
  ),
  spatialSlow: Reference.create(
    "Springs.spatialSlow",
    (it: Springs) => it.spatialSlow,
  ),
  spatialSlowDamping: Reference.create(
    "Springs.spatialSlow.damping",
    (it: Springs) => it.spatialSlow.damping,
  ),
  spatialSlowStiffness: Reference.create(
    "Springs.spatialSlow.stiffness",
    (it: Springs) => it.spatialSlow.stiffness,
  ),
  effectsFast: Reference.create(
    "Springs.effectsFast",
    (it: Springs) => it.effectsFast,
  ),
  effectsFastDamping: Reference.create(
    "Springs.effectsFast.damping",
    (it: Springs) => it.effectsFast.damping,
  ),
  effectsFastStiffness: Reference.create(
    "Springs.effectsFast.stiffness",
    (it: Springs) => it.effectsFast.stiffness,
  ),
  effectsDefault: Reference.create(
    "Springs.effectsDefault",
    (it: Springs) => it.effectsDefault,
  ),
  effectsDefaultDamping: Reference.create(
    "Springs.effectsDefault.damping",
    (it: Springs) => it.effectsDefault.damping,
  ),
  effectsDefaultStiffness: Reference.create(
    "Springs.effectsDefault.stiffness",
    (it: Springs) => it.effectsDefault.stiffness,
  ),
  effectsSlow: Reference.create(
    "Springs.effectsSlow",
    (it: Springs) => it.effectsSlow,
  ),
  effectsSlowDamping: Reference.create(
    "Springs.effectsSlow.damping",
    (it: Springs) => it.effectsSlow.damping,
  ),
  effectsSlowStiffness: Reference.create(
    "Springs.effectsSlow.stiffness",
    (it: Springs) => it.effectsSlow.stiffness,
  ),
} as const;
import * as Prelude from "@internal/prelude";

export const enum CurvesKey {
  Expressive,
  ExpressiveSpatial,
  ExpressiveSpatialFast,
  ExpressiveSpatialFastEasing,
  ExpressiveSpatialFastDuration,
  ExpressiveSpatialDefault,
  ExpressiveSpatialDefaultEasing,
  ExpressiveSpatialDefaultDuration,
  ExpressiveSpatialSlow,
  ExpressiveSpatialSlowEasing,
  ExpressiveSpatialSlowDuration,
  ExpressiveEffects,
  ExpressiveEffectsFast,
  ExpressiveEffectsFastEasing,
  ExpressiveEffectsFastDuration,
  ExpressiveEffectsDefault,
  ExpressiveEffectsDefaultEasing,
  ExpressiveEffectsDefaultDuration,
  ExpressiveEffectsSlow,
  ExpressiveEffectsSlowEasing,
  ExpressiveEffectsSlowDuration,
  Standard,
  StandardSpatial,
  StandardSpatialFast,
  StandardSpatialFastEasing,
  StandardSpatialFastDuration,
  StandardSpatialDefault,
  StandardSpatialDefaultEasing,
  StandardSpatialDefaultDuration,
  StandardSpatialSlow,
  StandardSpatialSlowEasing,
  StandardSpatialSlowDuration,
  StandardEffects,
  StandardEffectsFast,
  StandardEffectsFastEasing,
  StandardEffectsFastDuration,
  StandardEffectsDefault,
  StandardEffectsDefaultEasing,
  StandardEffectsDefaultDuration,
  StandardEffectsSlow,
  StandardEffectsSlowEasing,
  StandardEffectsSlowDuration,
}

const brand = Symbol();

type Ref<Key extends CurvesKey> = {
  readonly [brand]: Key,
};

const Ref = <Key extends CurvesKey>(key: Key): Ref<Key> => ({
  [brand]: key,
});

export type Expressive = Ref<CurvesKey.Expressive>;
export type ExpressiveSpatial = Ref<CurvesKey.ExpressiveSpatial>;
export type ExpressiveSpatialFast = Ref<CurvesKey.ExpressiveSpatialFast>;
export type ExpressiveSpatialFastEasing = Ref<CurvesKey.ExpressiveSpatialFastEasing>;
export type ExpressiveSpatialFastDuration = Ref<CurvesKey.ExpressiveSpatialFastDuration>;
export type ExpressiveSpatialDefault = Ref<CurvesKey.ExpressiveSpatialDefault>;
export type ExpressiveSpatialDefaultEasing = Ref<CurvesKey.ExpressiveSpatialDefaultEasing>;
export type ExpressiveSpatialDefaultDuration = Ref<CurvesKey.ExpressiveSpatialDefaultDuration>;
export type ExpressiveSpatialSlow = Ref<CurvesKey.ExpressiveSpatialSlow>;
export type ExpressiveSpatialSlowEasing = Ref<CurvesKey.ExpressiveSpatialSlowEasing>;
export type ExpressiveSpatialSlowDuration = Ref<CurvesKey.ExpressiveSpatialSlowDuration>;
export type ExpressiveEffects = Ref<CurvesKey.ExpressiveEffects>;
export type ExpressiveEffectsFast = Ref<CurvesKey.ExpressiveEffectsFast>;
export type ExpressiveEffectsFastEasing = Ref<CurvesKey.ExpressiveEffectsFastEasing>;
export type ExpressiveEffectsFastDuration = Ref<CurvesKey.ExpressiveEffectsFastDuration>;
export type ExpressiveEffectsDefault = Ref<CurvesKey.ExpressiveEffectsDefault>;
export type ExpressiveEffectsDefaultEasing = Ref<CurvesKey.ExpressiveEffectsDefaultEasing>;
export type ExpressiveEffectsDefaultDuration = Ref<CurvesKey.ExpressiveEffectsDefaultDuration>;
export type ExpressiveEffectsSlow = Ref<CurvesKey.ExpressiveEffectsSlow>;
export type ExpressiveEffectsSlowEasing = Ref<CurvesKey.ExpressiveEffectsSlowEasing>;
export type ExpressiveEffectsSlowDuration = Ref<CurvesKey.ExpressiveEffectsSlowDuration>;
export type Standard = Ref<CurvesKey.Standard>;
export type StandardSpatial = Ref<CurvesKey.StandardSpatial>;
export type StandardSpatialFast = Ref<CurvesKey.StandardSpatialFast>;
export type StandardSpatialFastEasing = Ref<CurvesKey.StandardSpatialFastEasing>;
export type StandardSpatialFastDuration = Ref<CurvesKey.StandardSpatialFastDuration>;
export type StandardSpatialDefault = Ref<CurvesKey.StandardSpatialDefault>;
export type StandardSpatialDefaultEasing = Ref<CurvesKey.StandardSpatialDefaultEasing>;
export type StandardSpatialDefaultDuration = Ref<CurvesKey.StandardSpatialDefaultDuration>;
export type StandardSpatialSlow = Ref<CurvesKey.StandardSpatialSlow>;
export type StandardSpatialSlowEasing = Ref<CurvesKey.StandardSpatialSlowEasing>;
export type StandardSpatialSlowDuration = Ref<CurvesKey.StandardSpatialSlowDuration>;
export type StandardEffects = Ref<CurvesKey.StandardEffects>;
export type StandardEffectsFast = Ref<CurvesKey.StandardEffectsFast>;
export type StandardEffectsFastEasing = Ref<CurvesKey.StandardEffectsFastEasing>;
export type StandardEffectsFastDuration = Ref<CurvesKey.StandardEffectsFastDuration>;
export type StandardEffectsDefault = Ref<CurvesKey.StandardEffectsDefault>;
export type StandardEffectsDefaultEasing = Ref<CurvesKey.StandardEffectsDefaultEasing>;
export type StandardEffectsDefaultDuration = Ref<CurvesKey.StandardEffectsDefaultDuration>;
export type StandardEffectsSlow = Ref<CurvesKey.StandardEffectsSlow>;
export type StandardEffectsSlowEasing = Ref<CurvesKey.StandardEffectsSlowEasing>;
export type StandardEffectsSlowDuration = Ref<CurvesKey.StandardEffectsSlowDuration>;

export const Expressive = (): Expressive => Ref(CurvesKey.Expressive);
export const ExpressiveSpatial = (): ExpressiveSpatial => Ref(CurvesKey.ExpressiveSpatial);
export const ExpressiveSpatialFast = (): ExpressiveSpatialFast => Ref(CurvesKey.ExpressiveSpatialFast);
export const ExpressiveSpatialFastEasing = (): ExpressiveSpatialFastEasing => Ref(CurvesKey.ExpressiveSpatialFastEasing);
export const ExpressiveSpatialFastDuration = (): ExpressiveSpatialFastDuration => Ref(CurvesKey.ExpressiveSpatialFastDuration);
export const ExpressiveSpatialDefault = (): ExpressiveSpatialDefault => Ref(CurvesKey.ExpressiveSpatialDefault);
export const ExpressiveSpatialDefaultEasing = (): ExpressiveSpatialDefaultEasing => Ref(CurvesKey.ExpressiveSpatialDefaultEasing);
export const ExpressiveSpatialDefaultDuration = (): ExpressiveSpatialDefaultDuration => Ref(CurvesKey.ExpressiveSpatialDefaultDuration);
export const ExpressiveSpatialSlow = (): ExpressiveSpatialSlow => Ref(CurvesKey.ExpressiveSpatialSlow);
export const ExpressiveSpatialSlowEasing = (): ExpressiveSpatialSlowEasing => Ref(CurvesKey.ExpressiveSpatialSlowEasing);
export const ExpressiveSpatialSlowDuration = (): ExpressiveSpatialSlowDuration => Ref(CurvesKey.ExpressiveSpatialSlowDuration);
export const ExpressiveEffects = (): ExpressiveEffects => Ref(CurvesKey.ExpressiveEffects);
export const ExpressiveEffectsFast = (): ExpressiveEffectsFast => Ref(CurvesKey.ExpressiveEffectsFast);
export const ExpressiveEffectsFastEasing = (): ExpressiveEffectsFastEasing => Ref(CurvesKey.ExpressiveEffectsFastEasing);
export const ExpressiveEffectsFastDuration = (): ExpressiveEffectsFastDuration => Ref(CurvesKey.ExpressiveEffectsFastDuration);
export const ExpressiveEffectsDefault = (): ExpressiveEffectsDefault => Ref(CurvesKey.ExpressiveEffectsDefault);
export const ExpressiveEffectsDefaultEasing = (): ExpressiveEffectsDefaultEasing => Ref(CurvesKey.ExpressiveEffectsDefaultEasing);
export const ExpressiveEffectsDefaultDuration = (): ExpressiveEffectsDefaultDuration => Ref(CurvesKey.ExpressiveEffectsDefaultDuration);
export const ExpressiveEffectsSlow = (): ExpressiveEffectsSlow => Ref(CurvesKey.ExpressiveEffectsSlow);
export const ExpressiveEffectsSlowEasing = (): ExpressiveEffectsSlowEasing => Ref(CurvesKey.ExpressiveEffectsSlowEasing);
export const ExpressiveEffectsSlowDuration = (): ExpressiveEffectsSlowDuration => Ref(CurvesKey.ExpressiveEffectsSlowDuration);
export const Standard = (): Standard => Ref(CurvesKey.Standard);
export const StandardSpatial = (): StandardSpatial => Ref(CurvesKey.StandardSpatial);
export const StandardSpatialFast = (): StandardSpatialFast => Ref(CurvesKey.StandardSpatialFast);
export const StandardSpatialFastEasing = (): StandardSpatialFastEasing => Ref(CurvesKey.StandardSpatialFastEasing);
export const StandardSpatialFastDuration = (): StandardSpatialFastDuration => Ref(CurvesKey.StandardSpatialFastDuration);
export const StandardSpatialDefault = (): StandardSpatialDefault => Ref(CurvesKey.StandardSpatialDefault);
export const StandardSpatialDefaultEasing = (): StandardSpatialDefaultEasing => Ref(CurvesKey.StandardSpatialDefaultEasing);
export const StandardSpatialDefaultDuration = (): StandardSpatialDefaultDuration => Ref(CurvesKey.StandardSpatialDefaultDuration);
export const StandardSpatialSlow = (): StandardSpatialSlow => Ref(CurvesKey.StandardSpatialSlow);
export const StandardSpatialSlowEasing = (): StandardSpatialSlowEasing => Ref(CurvesKey.StandardSpatialSlowEasing);
export const StandardSpatialSlowDuration = (): StandardSpatialSlowDuration => Ref(CurvesKey.StandardSpatialSlowDuration);
export const StandardEffects = (): StandardEffects => Ref(CurvesKey.StandardEffects);
export const StandardEffectsFast = (): StandardEffectsFast => Ref(CurvesKey.StandardEffectsFast);
export const StandardEffectsFastEasing = (): StandardEffectsFastEasing => Ref(CurvesKey.StandardEffectsFastEasing);
export const StandardEffectsFastDuration = (): StandardEffectsFastDuration => Ref(CurvesKey.StandardEffectsFastDuration);
export const StandardEffectsDefault = (): StandardEffectsDefault => Ref(CurvesKey.StandardEffectsDefault);
export const StandardEffectsDefaultEasing = (): StandardEffectsDefaultEasing => Ref(CurvesKey.StandardEffectsDefaultEasing);
export const StandardEffectsDefaultDuration = (): StandardEffectsDefaultDuration => Ref(CurvesKey.StandardEffectsDefaultDuration);
export const StandardEffectsSlow = (): StandardEffectsSlow => Ref(CurvesKey.StandardEffectsSlow);
export const StandardEffectsSlowEasing = (): StandardEffectsSlowEasing => Ref(CurvesKey.StandardEffectsSlowEasing);
export const StandardEffectsSlowDuration = (): StandardEffectsSlowDuration => Ref(CurvesKey.StandardEffectsSlowDuration);

export type Any = (
  | Expressive
  | ExpressiveSpatial
  | ExpressiveSpatialFast
  | ExpressiveSpatialFastEasing
  | ExpressiveSpatialFastDuration
  | ExpressiveSpatialDefault
  | ExpressiveSpatialDefaultEasing
  | ExpressiveSpatialDefaultDuration
  | ExpressiveSpatialSlow
  | ExpressiveSpatialSlowEasing
  | ExpressiveSpatialSlowDuration
  | ExpressiveEffects
  | ExpressiveEffectsFast
  | ExpressiveEffectsFastEasing
  | ExpressiveEffectsFastDuration
  | ExpressiveEffectsDefault
  | ExpressiveEffectsDefaultEasing
  | ExpressiveEffectsDefaultDuration
  | ExpressiveEffectsSlow
  | ExpressiveEffectsSlowEasing
  | ExpressiveEffectsSlowDuration
  | Standard
  | StandardSpatial
  | StandardSpatialFast
  | StandardSpatialFastEasing
  | StandardSpatialFastDuration
  | StandardSpatialDefault
  | StandardSpatialDefaultEasing
  | StandardSpatialDefaultDuration
  | StandardSpatialSlow
  | StandardSpatialSlowEasing
  | StandardSpatialSlowDuration
  | StandardEffects
  | StandardEffectsFast
  | StandardEffectsFastEasing
  | StandardEffectsFastDuration
  | StandardEffectsDefault
  | StandardEffectsDefaultEasing
  | StandardEffectsDefaultDuration
  | StandardEffectsSlow
  | StandardEffectsSlowEasing
  | StandardEffectsSlowDuration
);

export type Curve = (
  | Expressive
  | ExpressiveSpatial
  | ExpressiveSpatialFast
  | ExpressiveSpatialDefault
  | ExpressiveSpatialSlow
  | ExpressiveEffects
  | ExpressiveEffectsFast
  | ExpressiveEffectsDefault
  | ExpressiveEffectsSlow
  | Standard
  | StandardSpatial
  | StandardSpatialFast
  | StandardSpatialDefault
  | StandardSpatialSlow
  | StandardEffects
  | StandardEffectsFast
  | StandardEffectsDefault
  | StandardEffectsSlow
);

export type Easing = (
  | ExpressiveSpatialFastEasing
  | ExpressiveSpatialDefaultEasing
  | ExpressiveSpatialSlowEasing
  | ExpressiveEffectsFastEasing
  | ExpressiveEffectsDefaultEasing
  | ExpressiveEffectsSlowEasing
  | StandardSpatialFastEasing
  | StandardSpatialDefaultEasing
  | StandardSpatialSlowEasing
  | StandardEffectsFastEasing
  | StandardEffectsDefaultEasing
  | StandardEffectsSlowEasing
);

export type Duration = (
  | ExpressiveSpatialFastDuration
  | ExpressiveSpatialDefaultDuration
  | ExpressiveSpatialSlowDuration
  | ExpressiveEffectsFastDuration
  | ExpressiveEffectsDefaultDuration
  | ExpressiveEffectsSlowDuration
  | StandardSpatialFastDuration
  | StandardSpatialDefaultDuration
  | StandardSpatialSlowDuration
  | StandardEffectsFastDuration
  | StandardEffectsDefaultDuration
  | StandardEffectsSlowDuration
);

export type Category = (
  | ExpressiveSpatial
  | ExpressiveEffects
  | StandardSpatial
  | StandardEffects
);

export type Scheme = (
  | Expressive
  | Standard
);

export function deref(it: Category, curves: Prelude.Curves): Prelude.CurveCategory
export function deref(it: Scheme, curves: Prelude.Curves): Prelude.CurveScheme
export function deref(it: Duration, curves: Prelude.Curves): Prelude.Duration
export function deref(it: Easing, curves: Prelude.Curves): Prelude.CubicBezier
export function deref(it: Curve, curves: Prelude.Curves): Prelude.Curve
export function deref(it: Any, curves: Prelude.Curves): Prelude.Duration | Prelude.CubicBezier | Prelude.Curve | Prelude.CurveCategory | Prelude.CurveScheme {
  switch (it[brand]) {
    case CurvesKey.Expressive: return curves.expressive;
    case CurvesKey.ExpressiveSpatial: return curves.expressive.spatial;
    case CurvesKey.ExpressiveSpatialFast: return curves.expressive.spatial.fast;
    case CurvesKey.ExpressiveSpatialFastEasing: return curves.expressive.spatial.fast.easing;
    case CurvesKey.ExpressiveSpatialFastDuration: return curves.expressive.spatial.fast.duration;
    case CurvesKey.ExpressiveSpatialDefault: return curves.expressive.spatial.default;
    case CurvesKey.ExpressiveSpatialDefaultEasing: return curves.expressive.spatial.default.easing;
    case CurvesKey.ExpressiveSpatialDefaultDuration: return curves.expressive.spatial.default.duration;
    case CurvesKey.ExpressiveSpatialSlow: return curves.expressive.spatial.slow;
    case CurvesKey.ExpressiveSpatialSlowEasing: return curves.expressive.spatial.slow.easing;
    case CurvesKey.ExpressiveSpatialSlowDuration: return curves.expressive.spatial.slow.duration;
    case CurvesKey.ExpressiveEffects: return curves.expressive.effects;
    case CurvesKey.ExpressiveEffectsFast: return curves.expressive.effects.fast;
    case CurvesKey.ExpressiveEffectsFastEasing: return curves.expressive.effects.fast.easing;
    case CurvesKey.ExpressiveEffectsFastDuration: return curves.expressive.effects.fast.duration;
    case CurvesKey.ExpressiveEffectsDefault: return curves.expressive.effects.default;
    case CurvesKey.ExpressiveEffectsDefaultEasing: return curves.expressive.effects.default.easing;
    case CurvesKey.ExpressiveEffectsDefaultDuration: return curves.expressive.effects.default.duration;
    case CurvesKey.ExpressiveEffectsSlow: return curves.expressive.effects.slow;
    case CurvesKey.ExpressiveEffectsSlowEasing: return curves.expressive.effects.slow.easing;
    case CurvesKey.ExpressiveEffectsSlowDuration: return curves.expressive.effects.slow.duration;
    case CurvesKey.Standard: return curves.standard;
    case CurvesKey.StandardSpatial: return curves.standard.spatial;
    case CurvesKey.StandardSpatialFast: return curves.standard.spatial.fast;
    case CurvesKey.StandardSpatialFastEasing: return curves.standard.spatial.fast.easing;
    case CurvesKey.StandardSpatialFastDuration: return curves.standard.spatial.fast.duration;
    case CurvesKey.StandardSpatialDefault: return curves.standard.spatial.default;
    case CurvesKey.StandardSpatialDefaultEasing: return curves.standard.spatial.default.easing;
    case CurvesKey.StandardSpatialDefaultDuration: return curves.standard.spatial.default.duration;
    case CurvesKey.StandardSpatialSlow: return curves.standard.spatial.slow;
    case CurvesKey.StandardSpatialSlowEasing: return curves.standard.spatial.slow.easing;
    case CurvesKey.StandardSpatialSlowDuration: return curves.standard.spatial.slow.duration;
    case CurvesKey.StandardEffects: return curves.standard.effects;
    case CurvesKey.StandardEffectsFast: return curves.standard.effects.fast;
    case CurvesKey.StandardEffectsFastEasing: return curves.standard.effects.fast.easing;
    case CurvesKey.StandardEffectsFastDuration: return curves.standard.effects.fast.duration;
    case CurvesKey.StandardEffectsDefault: return curves.standard.effects.default;
    case CurvesKey.StandardEffectsDefaultEasing: return curves.standard.effects.default.easing;
    case CurvesKey.StandardEffectsDefaultDuration: return curves.standard.effects.default.duration;
    case CurvesKey.StandardEffectsSlow: return curves.standard.effects.slow;
    case CurvesKey.StandardEffectsSlowEasing: return curves.standard.effects.slow.easing;
    case CurvesKey.StandardEffectsSlowDuration: return curves.standard.effects.slow.duration;
  }
};

// export type CurvesRefExpressive = CurvesRef<CurvesKey.Expressive>;
// export type CurvesRefExpressiveSpatial = CurvesRef<CurvesKey.ExpressiveSpatial>;
// export type CurvesRefExpressiveSpatialFast = CurvesRef<CurvesKey.ExpressiveSpatialFast>;
// export type CurvesRefExpressiveSpatialFastEasing = CurvesRef<CurvesKey.ExpressiveSpatialFastEasing>;
// export type CurvesRefExpressiveSpatialFastDuration = CurvesRef<CurvesKey.ExpressiveSpatialFastDuration>;
// export type CurvesRefExpressiveSpatialDefault = CurvesRef<CurvesKey.ExpressiveSpatialDefault>;
// export type CurvesRefExpressiveSpatialDefaultEasing = CurvesRef<CurvesKey.ExpressiveSpatialDefaultEasing>;
// export type CurvesRefExpressiveSpatialDefaultDuration = CurvesRef<CurvesKey.ExpressiveSpatialDefaultDuration>;
// export type CurvesRefExpressiveSpatialSlow = CurvesRef<CurvesKey.ExpressiveSpatialSlow>;
// export type CurvesRefExpressiveSpatialSlowEasing = CurvesRef<CurvesKey.ExpressiveSpatialSlowEasing>;
// export type CurvesRefExpressiveSpatialSlowDuration = CurvesRef<CurvesKey.ExpressiveSpatialSlowDuration>;
// export type CurvesRefExpressiveEffects = CurvesRef<CurvesKey.ExpressiveEffects>;
// export type CurvesRefExpressiveEffectsFast = CurvesRef<CurvesKey.ExpressiveEffectsFast>;
// export type CurvesRefExpressiveEffectsFastEasing = CurvesRef<CurvesKey.ExpressiveEffectsFastEasing>;
// export type CurvesRefExpressiveEffectsFastDuration = CurvesRef<CurvesKey.ExpressiveEffectsFastDuration>;
// export type CurvesRefExpressiveEffectsDefault = CurvesRef<CurvesKey.ExpressiveEffectsDefault>;
// export type CurvesRefExpressiveEffectsDefaultEasing = CurvesRef<CurvesKey.ExpressiveEffectsDefaultEasing>;
// export type CurvesRefExpressiveEffectsDefaultDuration = CurvesRef<CurvesKey.ExpressiveEffectsDefaultDuration>;
// export type CurvesRefExpressiveEffectsSlow = CurvesRef<CurvesKey.ExpressiveEffectsSlow>;
// export type CurvesRefExpressiveEffectsSlowEasing = CurvesRef<CurvesKey.ExpressiveEffectsSlowEasing>;
// export type CurvesRefExpressiveEffectsSlowDuration = CurvesRef<CurvesKey.ExpressiveEffectsSlowDuration>;
// export type CurvesRefStandard = CurvesRef<CurvesKey.Standard>;
// export type CurvesRefStandardSpatial = CurvesRef<CurvesKey.StandardSpatial>;
// export type CurvesRefStandardSpatialFast = CurvesRef<CurvesKey.StandardSpatialFast>;
// export type CurvesRefStandardSpatialFastEasing = CurvesRef<CurvesKey.StandardSpatialFastEasing>;
// export type CurvesRefStandardSpatialFastDuration = CurvesRef<CurvesKey.StandardSpatialFastDuration>;
// export type CurvesRefStandardSpatialDefault = CurvesRef<CurvesKey.StandardSpatialDefault>;
// export type CurvesRefStandardSpatialDefaultEasing = CurvesRef<CurvesKey.StandardSpatialDefaultEasing>;
// export type CurvesRefStandardSpatialDefaultDuration = CurvesRef<CurvesKey.StandardSpatialDefaultDuration>;
// export type CurvesRefStandardSpatialSlow = CurvesRef<CurvesKey.StandardSpatialSlow>;
// export type CurvesRefStandardSpatialSlowEasing = CurvesRef<CurvesKey.StandardSpatialSlowEasing>;
// export type CurvesRefStandardSpatialSlowDuration = CurvesRef<CurvesKey.StandardSpatialSlowDuration>;
// export type CurvesRefStandardEffects = CurvesRef<CurvesKey.StandardEffects>;
// export type CurvesRefStandardEffectsFast = CurvesRef<CurvesKey.StandardEffectsFast>;
// export type CurvesRefStandardEffectsFastEasing = CurvesRef<CurvesKey.StandardEffectsFastEasing>;
// export type CurvesRefStandardEffectsFastDuration = CurvesRef<CurvesKey.StandardEffectsFastDuration>;
// export type CurvesRefStandardEffectsDefault = CurvesRef<CurvesKey.StandardEffectsDefault>;
// export type CurvesRefStandardEffectsDefaultEasing = CurvesRef<CurvesKey.StandardEffectsDefaultEasing>;
// export type CurvesRefStandardEffectsDefaultDuration = CurvesRef<CurvesKey.StandardEffectsDefaultDuration>;
// export type CurvesRefStandardEffectsSlow = CurvesRef<CurvesKey.StandardEffectsSlow>;
// export type CurvesRefStandardEffectsSlowEasing = CurvesRef<CurvesKey.StandardEffectsSlowEasing>;
// export type CurvesRefStandardEffectsSlowDuration = CurvesRef<CurvesKey.StandardEffectsSlowDuration>;

// export type CurvesRefAny = (
//   | CurvesRefExpressive
//   | CurvesRefExpressiveSpatial
//   | CurvesRefExpressiveSpatialFast
//   | CurvesRefExpressiveSpatialFastEasing
//   | CurvesRefExpressiveSpatialFastDuration
//   | CurvesRefExpressiveSpatialDefault
//   | CurvesRefExpressiveSpatialDefaultEasing
//   | CurvesRefExpressiveSpatialDefaultDuration
//   | CurvesRefExpressiveSpatialSlow
//   | CurvesRefExpressiveSpatialSlowEasing
//   | CurvesRefExpressiveSpatialSlowDuration
//   | CurvesRefExpressiveEffects
//   | CurvesRefExpressiveEffectsFast
//   | CurvesRefExpressiveEffectsFastEasing
//   | CurvesRefExpressiveEffectsFastDuration
//   | CurvesRefExpressiveEffectsDefault
//   | CurvesRefExpressiveEffectsDefaultEasing
//   | CurvesRefExpressiveEffectsDefaultDuration
//   | CurvesRefExpressiveEffectsSlow
//   | CurvesRefExpressiveEffectsSlowEasing
//   | CurvesRefExpressiveEffectsSlowDuration
//   | CurvesRefStandard
//   | CurvesRefStandardSpatial
//   | CurvesRefStandardSpatialFast
//   | CurvesRefStandardSpatialFastEasing
//   | CurvesRefStandardSpatialFastDuration
//   | CurvesRefStandardSpatialDefault
//   | CurvesRefStandardSpatialDefaultEasing
//   | CurvesRefStandardSpatialDefaultDuration
//   | CurvesRefStandardSpatialSlow
//   | CurvesRefStandardSpatialSlowEasing
//   | CurvesRefStandardSpatialSlowDuration
//   | CurvesRefStandardEffects
//   | CurvesRefStandardEffectsFast
//   | CurvesRefStandardEffectsFastEasing
//   | CurvesRefStandardEffectsFastDuration
//   | CurvesRefStandardEffectsDefault
//   | CurvesRefStandardEffectsDefaultEasing
//   | CurvesRefStandardEffectsDefaultDuration
//   | CurvesRefStandardEffectsSlow
//   | CurvesRefStandardEffectsSlowEasing
//   | CurvesRefStandardEffectsSlowDuration
// );

// export type CurvesRefCurve = (
//   | CurvesRefExpressive
//   | CurvesRefExpressiveSpatial
//   | CurvesRefExpressiveSpatialFast
//   | CurvesRefExpressiveSpatialDefault
//   | CurvesRefExpressiveSpatialSlow
//   | CurvesRefExpressiveEffects
//   | CurvesRefExpressiveEffectsFast
//   | CurvesRefExpressiveEffectsDefault
//   | CurvesRefExpressiveEffectsSlow
//   | CurvesRefStandard
//   | CurvesRefStandardSpatial
//   | CurvesRefStandardSpatialFast
//   | CurvesRefStandardSpatialDefault
//   | CurvesRefStandardSpatialSlow
//   | CurvesRefStandardEffects
//   | CurvesRefStandardEffectsFast
//   | CurvesRefStandardEffectsDefault
//   | CurvesRefStandardEffectsSlow
// );

// export type CurvesRefEasing = (
//   | CurvesRefExpressiveSpatialFastEasing
//   | CurvesRefExpressiveSpatialDefaultEasing
//   | CurvesRefExpressiveSpatialSlowEasing
//   | CurvesRefExpressiveEffectsFastEasing
//   | CurvesRefExpressiveEffectsDefaultEasing
//   | CurvesRefExpressiveEffectsSlowEasing
//   | CurvesRefStandardSpatialFastEasing
//   | CurvesRefStandardSpatialDefaultEasing
//   | CurvesRefStandardSpatialSlowEasing
//   | CurvesRefStandardEffectsFastEasing
//   | CurvesRefStandardEffectsDefaultEasing
//   | CurvesRefStandardEffectsSlowEasing
// );

// export type CurvesRefDuration = (
//   | CurvesRefExpressiveSpatialFastDuration
//   | CurvesRefExpressiveSpatialDefaultDuration
//   | CurvesRefExpressiveSpatialSlowDuration
//   | CurvesRefExpressiveEffectsFastDuration
//   | CurvesRefExpressiveEffectsDefaultDuration
//   | CurvesRefExpressiveEffectsSlowDuration
//   | CurvesRefStandardSpatialFastDuration
//   | CurvesRefStandardSpatialDefaultDuration
//   | CurvesRefStandardSpatialSlowDuration
//   | CurvesRefStandardEffectsFastDuration
//   | CurvesRefStandardEffectsDefaultDuration
//   | CurvesRefStandardEffectsSlowDuration
// );

// export type CurvesRefCategory = (
//   | CurvesRefExpressiveSpatial
//   | CurvesRefExpressiveEffects
//   | CurvesRefStandardSpatial
//   | CurvesRefStandardEffects
// );

// export type CurvesRefScheme = (
//   | CurvesRefExpressive
//   | CurvesRefStandard
// );

// export class CurvesRef<Discriminant extends CurvesKey> {
//   private constructor(readonly discriminant: Discriminant) {}
//   private static readonly internalExpressive = new CurvesRef(CurvesKey.Expressive);
//   private static readonly internalExpressiveSpatial = new CurvesRef(CurvesKey.ExpressiveSpatial);
//   private static readonly internalExpressiveSpatialFast = new CurvesRef(CurvesKey.ExpressiveSpatialFast);
//   private static readonly internalExpressiveSpatialFastEasing = new CurvesRef(CurvesKey.ExpressiveSpatialFastEasing);
//   private static readonly internalExpressiveSpatialFastDuration = new CurvesRef(CurvesKey.ExpressiveSpatialFastDuration);
//   private static readonly internalExpressiveSpatialDefault = new CurvesRef(CurvesKey.ExpressiveSpatialDefault);
//   private static readonly internalExpressiveSpatialDefaultEasing = new CurvesRef(CurvesKey.ExpressiveSpatialDefaultEasing);
//   private static readonly internalExpressiveSpatialDefaultDuration = new CurvesRef(CurvesKey.ExpressiveSpatialDefaultDuration);
//   private static readonly internalExpressiveSpatialSlow = new CurvesRef(CurvesKey.ExpressiveSpatialSlow);
//   private static readonly internalExpressiveSpatialSlowEasing = new CurvesRef(CurvesKey.ExpressiveSpatialSlowEasing);
//   private static readonly internalExpressiveSpatialSlowDuration = new CurvesRef(CurvesKey.ExpressiveSpatialSlowDuration);
//   private static readonly internalExpressiveEffects = new CurvesRef(CurvesKey.ExpressiveEffects);
//   private static readonly internalExpressiveEffectsFast = new CurvesRef(CurvesKey.ExpressiveEffectsFast);
//   private static readonly internalExpressiveEffectsFastEasing = new CurvesRef(CurvesKey.ExpressiveEffectsFastEasing);
//   private static readonly internalExpressiveEffectsFastDuration = new CurvesRef(CurvesKey.ExpressiveEffectsFastDuration);
//   private static readonly internalExpressiveEffectsDefault = new CurvesRef(CurvesKey.ExpressiveEffectsDefault);
//   private static readonly internalExpressiveEffectsDefaultEasing = new CurvesRef(CurvesKey.ExpressiveEffectsDefaultEasing);
//   private static readonly internalExpressiveEffectsDefaultDuration = new CurvesRef(CurvesKey.ExpressiveEffectsDefaultDuration);
//   private static readonly internalExpressiveEffectsSlow = new CurvesRef(CurvesKey.ExpressiveEffectsSlow);
//   private static readonly internalExpressiveEffectsSlowEasing = new CurvesRef(CurvesKey.ExpressiveEffectsSlowEasing);
//   private static readonly internalExpressiveEffectsSlowDuration = new CurvesRef(CurvesKey.ExpressiveEffectsSlowDuration);
//   private static readonly internalStandard = new CurvesRef(CurvesKey.Standard);
//   private static readonly internalStandardSpatial = new CurvesRef(CurvesKey.StandardSpatial);
//   private static readonly internalStandardSpatialFast = new CurvesRef(CurvesKey.StandardSpatialFast);
//   private static readonly internalStandardSpatialFastEasing = new CurvesRef(CurvesKey.StandardSpatialFastEasing);
//   private static readonly internalStandardSpatialFastDuration = new CurvesRef(CurvesKey.StandardSpatialFastDuration);
//   private static readonly internalStandardSpatialDefault = new CurvesRef(CurvesKey.StandardSpatialDefault);
//   private static readonly internalStandardSpatialDefaultEasing = new CurvesRef(CurvesKey.StandardSpatialDefaultEasing);
//   private static readonly internalStandardSpatialDefaultDuration = new CurvesRef(CurvesKey.StandardSpatialDefaultDuration);
//   private static readonly internalStandardSpatialSlow = new CurvesRef(CurvesKey.StandardSpatialSlow);
//   private static readonly internalStandardSpatialSlowEasing = new CurvesRef(CurvesKey.StandardSpatialSlowEasing);
//   private static readonly internalStandardSpatialSlowDuration = new CurvesRef(CurvesKey.StandardSpatialSlowDuration);
//   private static readonly internalStandardEffects = new CurvesRef(CurvesKey.StandardEffects);
//   private static readonly internalStandardEffectsFast = new CurvesRef(CurvesKey.StandardEffectsFast);
//   private static readonly internalStandardEffectsFastEasing = new CurvesRef(CurvesKey.StandardEffectsFastEasing);
//   private static readonly internalStandardEffectsFastDuration = new CurvesRef(CurvesKey.StandardEffectsFastDuration);
//   private static readonly internalStandardEffectsDefault = new CurvesRef(CurvesKey.StandardEffectsDefault);
//   private static readonly internalStandardEffectsDefaultEasing = new CurvesRef(CurvesKey.StandardEffectsDefaultEasing);
//   private static readonly internalStandardEffectsDefaultDuration = new CurvesRef(CurvesKey.StandardEffectsDefaultDuration);
//   private static readonly internalStandardEffectsSlow = new CurvesRef(CurvesKey.StandardEffectsSlow);
//   private static readonly internalStandardEffectsSlowEasing = new CurvesRef(CurvesKey.StandardEffectsSlowEasing);
//   private static readonly internalStandardEffectsSlowDuration = new CurvesRef(CurvesKey.StandardEffectsSlowDuration);

//   static Expressive() {
//     return this.internalExpressive;
//   }
//   static ExpressiveSpatial() {
//     return this.internalExpressiveSpatial;
//   }
//   static ExpressiveSpatialFast() {
//     return this.internalExpressiveSpatialFast;
//   }
//   static ExpressiveSpatialFastEasing() {
//     return this.internalExpressiveSpatialFastEasing;
//   }
//   static ExpressiveSpatialFastDuration() {
//     return this.internalExpressiveSpatialFastDuration;
//   }
//   static ExpressiveSpatialDefault() {
//     return this.internalExpressiveSpatialDefault;
//   }
//   static ExpressiveSpatialDefaultEasing() {
//     return this.internalExpressiveSpatialDefaultEasing;
//   }
//   static ExpressiveSpatialDefaultDuration() {
//     return this.internalExpressiveSpatialDefaultDuration;
//   }
//   static ExpressiveSpatialSlow() {
//     return this.internalExpressiveSpatialSlow;
//   }
//   static ExpressiveSpatialSlowEasing() {
//     return this.internalExpressiveSpatialSlowEasing;
//   }
//   static ExpressiveSpatialSlowDuration() {
//     return this.internalExpressiveSpatialSlowDuration;
//   }
//   static ExpressiveEffects() {
//     return this.internalExpressiveEffects;
//   }
//   static ExpressiveEffectsFast() {
//     return this.internalExpressiveEffectsFast;
//   }
//   static ExpressiveEffectsFastEasing() {
//     return this.internalExpressiveEffectsFastEasing;
//   }
//   static ExpressiveEffectsFastDuration() {
//     return this.internalExpressiveEffectsFastDuration;
//   }
//   static ExpressiveEffectsDefault() {
//     return this.internalExpressiveEffectsDefault;
//   }
//   static ExpressiveEffectsDefaultEasing() {
//     return this.internalExpressiveEffectsDefaultEasing;
//   }
//   static ExpressiveEffectsDefaultDuration() {
//     return this.internalExpressiveEffectsDefaultDuration;
//   }
//   static ExpressiveEffectsSlow() {
//     return this.internalExpressiveEffectsSlow;
//   }
//   static ExpressiveEffectsSlowEasing() {
//     return this.internalExpressiveEffectsSlowEasing;
//   }
//   static ExpressiveEffectsSlowDuration() {
//     return this.internalExpressiveEffectsSlowDuration;
//   }
//   static Standard() {
//     return this.internalStandard;
//   }
//   static StandardSpatial() {
//     return this.internalStandardSpatial;
//   }
//   static StandardSpatialFast() {
//     return this.internalStandardSpatialFast;
//   }
//   static StandardSpatialFastEasing() {
//     return this.internalStandardSpatialFastEasing;
//   }
//   static StandardSpatialFastDuration() {
//     return this.internalStandardSpatialFastDuration;
//   }
//   static StandardSpatialDefault() {
//     return this.internalStandardSpatialDefault;
//   }
//   static StandardSpatialDefaultEasing() {
//     return this.internalStandardSpatialDefaultEasing;
//   }
//   static StandardSpatialDefaultDuration() {
//     return this.internalStandardSpatialDefaultDuration;
//   }
//   static StandardSpatialSlow() {
//     return this.internalStandardSpatialSlow;
//   }
//   static StandardSpatialSlowEasing() {
//     return this.internalStandardSpatialSlowEasing;
//   }
//   static StandardSpatialSlowDuration() {
//     return this.internalStandardSpatialSlowDuration;
//   }
//   static StandardEffects() {
//     return this.internalStandardEffects;
//   }
//   static StandardEffectsFast() {
//     return this.internalStandardEffectsFast;
//   }
//   static StandardEffectsFastEasing() {
//     return this.internalStandardEffectsFastEasing;
//   }
//   static StandardEffectsFastDuration() {
//     return this.internalStandardEffectsFastDuration;
//   }
//   static StandardEffectsDefault() {
//     return this.internalStandardEffectsDefault;
//   }
//   static StandardEffectsDefaultEasing() {
//     return this.internalStandardEffectsDefaultEasing;
//   }
//   static StandardEffectsDefaultDuration() {
//     return this.internalStandardEffectsDefaultDuration;
//   }
//   static StandardEffectsSlow() {
//     return this.internalStandardEffectsSlow;
//   }
//   static StandardEffectsSlowEasing() {
//     return this.internalStandardEffectsSlowEasing;
//   }
//   static StandardEffectsSlowDuration() {
//     return this.internalStandardEffectsSlowDuration;
//   }

//   deref(this: CurvesRefCategory, curves: Curves): CurveCategory
//   deref(this: CurvesRefScheme, curves: Curves): CurveScheme
//   deref(this: CurvesRefDuration, curves: Curves): Duration
//   deref(this: CurvesRefEasing, curves: Curves): CubicBezier
//   deref(this: CurvesRefCurve, curves: Curves): Curve
//   deref(this: CurvesRefAny, curves: Curves): Duration | CubicBezier | Curve | CurveCategory | CurveScheme {
//     switch (this.discriminant) {
//       case CurvesKey.Expressive: return curves.expressive;
//       case CurvesKey.ExpressiveSpatial: return curves.expressive.spatial;
//       case CurvesKey.ExpressiveSpatialFast: return curves.expressive.spatial.fast;
//       case CurvesKey.ExpressiveSpatialFastEasing: return curves.expressive.spatial.fast.easing;
//       case CurvesKey.ExpressiveSpatialFastDuration: return curves.expressive.spatial.fast.duration;
//       case CurvesKey.ExpressiveSpatialDefault: return curves.expressive.spatial.default;
//       case CurvesKey.ExpressiveSpatialDefaultEasing: return curves.expressive.spatial.default.easing;
//       case CurvesKey.ExpressiveSpatialDefaultDuration: return curves.expressive.spatial.default.duration;
//       case CurvesKey.ExpressiveSpatialSlow: return curves.expressive.spatial.slow;
//       case CurvesKey.ExpressiveSpatialSlowEasing: return curves.expressive.spatial.slow.easing;
//       case CurvesKey.ExpressiveSpatialSlowDuration: return curves.expressive.spatial.slow.duration;
//       case CurvesKey.ExpressiveEffects: return curves.expressive.effects;
//       case CurvesKey.ExpressiveEffectsFast: return curves.expressive.effects.fast;
//       case CurvesKey.ExpressiveEffectsFastEasing: return curves.expressive.effects.fast.easing;
//       case CurvesKey.ExpressiveEffectsFastDuration: return curves.expressive.effects.fast.duration;
//       case CurvesKey.ExpressiveEffectsDefault: return curves.expressive.effects.default;
//       case CurvesKey.ExpressiveEffectsDefaultEasing: return curves.expressive.effects.default.easing;
//       case CurvesKey.ExpressiveEffectsDefaultDuration: return curves.expressive.effects.default.duration;
//       case CurvesKey.ExpressiveEffectsSlow: return curves.expressive.effects.slow;
//       case CurvesKey.ExpressiveEffectsSlowEasing: return curves.expressive.effects.slow.easing;
//       case CurvesKey.ExpressiveEffectsSlowDuration: return curves.expressive.effects.slow.duration;
//       case CurvesKey.Standard: return curves.standard;
//       case CurvesKey.StandardSpatial: return curves.standard.spatial;
//       case CurvesKey.StandardSpatialFast: return curves.standard.spatial.fast;
//       case CurvesKey.StandardSpatialFastEasing: return curves.standard.spatial.fast.easing;
//       case CurvesKey.StandardSpatialFastDuration: return curves.standard.spatial.fast.duration;
//       case CurvesKey.StandardSpatialDefault: return curves.standard.spatial.default;
//       case CurvesKey.StandardSpatialDefaultEasing: return curves.standard.spatial.default.easing;
//       case CurvesKey.StandardSpatialDefaultDuration: return curves.standard.spatial.default.duration;
//       case CurvesKey.StandardSpatialSlow: return curves.standard.spatial.slow;
//       case CurvesKey.StandardSpatialSlowEasing: return curves.standard.spatial.slow.easing;
//       case CurvesKey.StandardSpatialSlowDuration: return curves.standard.spatial.slow.duration;
//       case CurvesKey.StandardEffects: return curves.standard.effects;
//       case CurvesKey.StandardEffectsFast: return curves.standard.effects.fast;
//       case CurvesKey.StandardEffectsFastEasing: return curves.standard.effects.fast.easing;
//       case CurvesKey.StandardEffectsFastDuration: return curves.standard.effects.fast.duration;
//       case CurvesKey.StandardEffectsDefault: return curves.standard.effects.default;
//       case CurvesKey.StandardEffectsDefaultEasing: return curves.standard.effects.default.easing;
//       case CurvesKey.StandardEffectsDefaultDuration: return curves.standard.effects.default.duration;
//       case CurvesKey.StandardEffectsSlow: return curves.standard.effects.slow;
//       case CurvesKey.StandardEffectsSlowEasing: return curves.standard.effects.slow.easing;
//       case CurvesKey.StandardEffectsSlowDuration: return curves.standard.effects.slow.duration;
//     }
//   }
// }
import * as Prelude from "@internal/prelude";

const enum SpringsKey {
  SpatialFast,
  SpatialFastDamping,
  SpatialFastStiffness,
  SpatialDefault,
  SpatialDefaultDamping,
  SpatialDefaultStiffness,
  SpatialSlow,
  SpatialSlowDamping,
  SpatialSlowStiffness,
  EffectsFast,
  EffectsFastDamping,
  EffectsFastStiffness,
  EffectsDefault,
  EffectsDefaultDamping,
  EffectsDefaultStiffness,
  EffectsSlow,
  EffectsSlowDamping,
  EffectsSlowStiffness,
}

const brand = Symbol();

type Ref<Key extends SpringsKey> = {
  readonly [brand]: Key,
};

const Ref = <Key extends SpringsKey>(key: Key): Ref<Key> => ({
  [brand]: key,
});

export type SpatialFast = Ref<SpringsKey.SpatialFast>;
export type SpatialFastDamping = Ref<SpringsKey.SpatialFastDamping>;
export type SpatialFastStiffness = Ref<SpringsKey.SpatialFastStiffness>;
export type SpatialDefault = Ref<SpringsKey.SpatialDefault>;
export type SpatialDefaultDamping = Ref<SpringsKey.SpatialDefaultDamping>;
export type SpatialDefaultStiffness = Ref<SpringsKey.SpatialDefaultStiffness>;
export type SpatialSlow = Ref<SpringsKey.SpatialSlow>;
export type SpatialSlowDamping = Ref<SpringsKey.SpatialSlowDamping>;
export type SpatialSlowStiffness = Ref<SpringsKey.SpatialSlowStiffness>;
export type EffectsFast = Ref<SpringsKey.EffectsFast>;
export type EffectsFastDamping = Ref<SpringsKey.EffectsFastDamping>;
export type EffectsFastStiffness = Ref<SpringsKey.EffectsFastStiffness>;
export type EffectsDefault = Ref<SpringsKey.EffectsDefault>;
export type EffectsDefaultDamping = Ref<SpringsKey.EffectsDefaultDamping>;
export type EffectsDefaultStiffness = Ref<SpringsKey.EffectsDefaultStiffness>;
export type EffectsSlow = Ref<SpringsKey.EffectsSlow>;
export type EffectsSlowDamping = Ref<SpringsKey.EffectsSlowDamping>;
export type EffectsSlowStiffness = Ref<SpringsKey.EffectsSlowStiffness>;

export type Any = (
  | SpatialFast
  | SpatialFastDamping
  | SpatialFastStiffness
  | SpatialDefault
  | SpatialDefaultDamping
  | SpatialDefaultStiffness
  | SpatialSlow
  | SpatialSlowDamping
  | SpatialSlowStiffness
  | EffectsFast
  | EffectsFastDamping
  | EffectsFastStiffness
  | EffectsDefault
  | EffectsDefaultDamping
  | EffectsDefaultStiffness
  | EffectsSlow
  | EffectsSlowDamping
  | EffectsSlowStiffness
);

export type Spring = (
  | SpatialFast
  | SpatialDefault
  | SpatialSlow
  | EffectsFast
  | EffectsDefault
  | EffectsSlow
);

export type Damping = (
  | SpatialFastDamping
  | SpatialDefaultDamping
  | SpatialSlowDamping
  | EffectsFastDamping
  | EffectsDefaultDamping
  | EffectsSlowDamping
);

export type Stiffness = (
  | SpatialFastStiffness
  | SpatialDefaultStiffness
  | SpatialSlowStiffness
  | EffectsFastStiffness
  | EffectsDefaultStiffness
  | EffectsSlowStiffness
);

export const SpatialFast = () => Ref(SpringsKey.SpatialFast);
export const SpatialFastDamping = () => Ref(SpringsKey.SpatialFastDamping);
export const SpatialFastStiffness = () => Ref(SpringsKey.SpatialFastStiffness);
export const SpatialDefault = () => Ref(SpringsKey.SpatialDefault);
export const SpatialDefaultDamping = () => Ref(SpringsKey.SpatialDefaultDamping);
export const SpatialDefaultStiffness = () => Ref(SpringsKey.SpatialDefaultStiffness);
export const SpatialSlow = () => Ref(SpringsKey.SpatialSlow);
export const SpatialSlowDamping = () => Ref(SpringsKey.SpatialSlowDamping);
export const SpatialSlowStiffness = () => Ref(SpringsKey.SpatialSlowStiffness);
export const EffectsFast = () => Ref(SpringsKey.EffectsFast);
export const EffectsFastDamping = () => Ref(SpringsKey.EffectsFastDamping);
export const EffectsFastStiffness = () => Ref(SpringsKey.EffectsFastStiffness);
export const EffectsDefault = () => Ref(SpringsKey.EffectsDefault);
export const EffectsDefaultDamping = () => Ref(SpringsKey.EffectsDefaultDamping);
export const EffectsDefaultStiffness = () => Ref(SpringsKey.EffectsDefaultStiffness);
export const EffectsSlow = () => Ref(SpringsKey.EffectsSlow);
export const EffectsSlowDamping = () => Ref(SpringsKey.EffectsSlowDamping);
export const EffectsSlowStiffness = () => Ref(SpringsKey.EffectsSlowStiffness);

export const isSpatialFast = (it: Any): it is SpatialFast => it[brand] === SpringsKey.SpatialFast;
export const isSpatialFastDamping = (it: Any): it is SpatialFastDamping => it[brand] === SpringsKey.SpatialFastDamping;
export const isSpatialFastStiffness = (it: Any): it is SpatialFastStiffness => it[brand] === SpringsKey.SpatialFastStiffness;
export const isSpatialDefault = (it: Any): it is SpatialDefault => it[brand] === SpringsKey.SpatialDefault;
export const isSpatialDefaultDamping = (it: Any): it is SpatialDefaultDamping => it[brand] === SpringsKey.SpatialDefaultDamping;
export const isSpatialDefaultStiffness = (it: Any): it is SpatialDefaultStiffness => it[brand] === SpringsKey.SpatialDefaultStiffness;
export const isSpatialSlow = (it: Any): it is SpatialSlow => it[brand] === SpringsKey.SpatialSlow;
export const isSpatialSlowDamping = (it: Any): it is SpatialSlowDamping => it[brand] === SpringsKey.SpatialSlowDamping;
export const isSpatialSlowStiffness = (it: Any): it is SpatialSlowStiffness => it[brand] === SpringsKey.SpatialSlowStiffness;
export const isEffectsFast = (it: Any): it is EffectsFast => it[brand] === SpringsKey.EffectsFast;
export const isEffectsFastDamping = (it: Any): it is EffectsFastDamping => it[brand] === SpringsKey.EffectsFastDamping;
export const isEffectsFastStiffness = (it: Any): it is EffectsFastStiffness => it[brand] === SpringsKey.EffectsFastStiffness;
export const isEffectsDefault = (it: Any): it is EffectsDefault => it[brand] === SpringsKey.EffectsDefault;
export const isEffectsDefaultDamping = (it: Any): it is EffectsDefaultDamping => it[brand] === SpringsKey.EffectsDefaultDamping;
export const isEffectsDefaultStiffness = (it: Any): it is EffectsDefaultStiffness => it[brand] === SpringsKey.EffectsDefaultStiffness;
export const isEffectsSlow = (it: Any): it is EffectsSlow => it[brand] === SpringsKey.EffectsSlow;
export const isEffectsSlowDamping = (it: Any): it is EffectsSlowDamping => it[brand] === SpringsKey.EffectsSlowDamping;
export const isEffectsSlowStiffness = (it: Any): it is EffectsSlowStiffness => it[brand] === SpringsKey.EffectsSlowStiffness;

export function get(it: Damping, springs: Prelude.Springs): Prelude.Float
export function get(it: Stiffness, springs: Prelude.Springs): Prelude.Float
export function get(it: Spring, springs: Prelude.Springs): Prelude.Spring
export function get(it: Any, springs: Prelude.Springs) {
  switch (it[brand]) {
    case SpringsKey.SpatialFast: return springs.spatialFast;
    case SpringsKey.SpatialFastDamping: return springs.spatialFast.damping;
    case SpringsKey.SpatialFastStiffness: return springs.spatialFast.stiffness;
    case SpringsKey.SpatialDefault: return springs.spatialDefault;
    case SpringsKey.SpatialDefaultDamping: return springs.spatialDefault.damping;
    case SpringsKey.SpatialDefaultStiffness: return springs.spatialDefault.stiffness;
    case SpringsKey.SpatialSlow: return springs.spatialSlow;
    case SpringsKey.SpatialSlowDamping: return springs.spatialSlow.damping;
    case SpringsKey.SpatialSlowStiffness: return springs.spatialSlow.stiffness;
    case SpringsKey.EffectsFast: return springs.effectsFast;
    case SpringsKey.EffectsFastDamping: return springs.effectsFast.damping;
    case SpringsKey.EffectsFastStiffness: return springs.effectsFast.stiffness;
    case SpringsKey.EffectsDefault: return springs.effectsDefault;
    case SpringsKey.EffectsDefaultDamping: return springs.effectsDefault.damping;
    case SpringsKey.EffectsDefaultStiffness: return springs.effectsDefault.stiffness;
    case SpringsKey.EffectsSlow: return springs.effectsSlow;
    case SpringsKey.EffectsSlowDamping: return springs.effectsSlow.damping;
    case SpringsKey.EffectsSlowStiffness: return springs.effectsSlow.stiffness;
  }
}

// export const enum SpringSchemeKey {
//   SpatialFast,
//   SpatialDefault,
//   SpatialSlow,
//   EffectsFast,
//   EffectsDefault,
//   EffectsSlow, 
// }

// export class SpringSchemeRef {
//   private constructor(readonly springSchemeKey: SpringSchemeKey) {}

//   static SpatialFast() {
//     return new SpringSchemeRef(SpringSchemeKey.SpatialFast);
//   }
//   static SpatialDefault() {
//     return new SpringSchemeRef(SpringSchemeKey.SpatialDefault);
//   }
//   static SpatialSlow() {
//     return new SpringSchemeRef(SpringSchemeKey.SpatialSlow);
//   }
//   static EffectsFast() {
//     return new SpringSchemeRef(SpringSchemeKey.EffectsFast);
//   }
//   static EffectsDefault() {
//     return new SpringSchemeRef(SpringSchemeKey.EffectsDefault);
//   }
//   static EffectsSlow() {
//     return new SpringSchemeRef(SpringSchemeKey.EffectsSlow);
//   }

//   damping() {
//     return SpringRef.Damping(this);
//   }

//   stiffness() {
//     return SpringRef.Stiffness(this);
//   }

//   get(springScheme: Springs) {
//     switch (this.springSchemeKey) {
//       case SpringSchemeKey.SpatialFast: return springScheme.spatialFast;
//       case SpringSchemeKey.SpatialDefault: return springScheme.spatialDefault;
//       case SpringSchemeKey.SpatialSlow: return springScheme.spatialSlow;
//       case SpringSchemeKey.EffectsFast: return springScheme.effectsFast;
//       case SpringSchemeKey.EffectsDefault: return springScheme.effectsDefault;
//       case SpringSchemeKey.EffectsSlow: return springScheme.effectsSlow;
//     }
//   }
// }

// export const enum SpringKey {
//   Damping,
//   Stiffness,
// }

// export class SpringRef {
//   private constructor(
//     readonly springKey: SpringKey,
//     readonly springSchemeRef: SpringSchemeRef,
//   ) {}

//   static Damping(springSchemeRef: SpringSchemeRef) {
//     return new SpringRef(SpringKey.Damping, springSchemeRef);
//   }

//   static Stiffness(springSchemeRef: SpringSchemeRef) {
//     return new SpringRef(SpringKey.Stiffness, springSchemeRef);
//   }

//   get(springScheme: Springs): Float {
//     const spring = this.springSchemeRef.get(springScheme);

//     switch (this.springKey) {
//       case SpringKey.Damping: return spring.damping;
//       case SpringKey.Stiffness: return spring.stiffness;
//     }
//   }
// }



// export const enum SpringsKey {
//   SpatialFast,
//   SpatialFastDamping,
//   SpatialFastStiffness,
//   SpatialDefault,
//   SpatialDefaultDamping,
//   SpatialDefaultStiffness,
//   SpatialSlow,
//   SpatialSlowDamping,
//   SpatialSlowStiffness,
//   EffectsFast,
//   EffectsFastDamping,
//   EffectsFastStiffness,
//   EffectsDefault,
//   EffectsDefaultDamping,
//   EffectsDefaultStiffness,
//   EffectsSlow,
//   EffectsSlowDamping,
//   EffectsSlowStiffness,
// }

// export type SpringsRefSpatialFast = SpringsRef<SpringsKey.SpatialFast>;
// export type SpringsRefSpatialFastDamping = SpringsRef<SpringsKey.SpatialFastDamping>;
// export type SpringsRefSpatialFastStiffness = SpringsRef<SpringsKey.SpatialFastStiffness>;
// export type SpringsRefSpatialDefault = SpringsRef<SpringsKey.SpatialDefault>;
// export type SpringsRefSpatialDefaultDamping = SpringsRef<SpringsKey.SpatialDefaultDamping>;
// export type SpringsRefSpatialDefaultStiffness = SpringsRef<SpringsKey.SpatialDefaultStiffness>;
// export type SpringsRefSpatialSlow = SpringsRef<SpringsKey.SpatialSlow>;
// export type SpringsRefSpatialSlowDamping = SpringsRef<SpringsKey.SpatialSlowDamping>;
// export type SpringsRefSpatialSlowStiffness = SpringsRef<SpringsKey.SpatialSlowStiffness>;
// export type SpringsRefEffectsFast = SpringsRef<SpringsKey.EffectsFast>;
// export type SpringsRefEffectsFastDamping = SpringsRef<SpringsKey.EffectsFastDamping>;
// export type SpringsRefEffectsFastStiffness = SpringsRef<SpringsKey.EffectsFastStiffness>;
// export type SpringsRefEffectsDefault = SpringsRef<SpringsKey.EffectsDefault>;
// export type SpringsRefEffectsDefaultDamping = SpringsRef<SpringsKey.EffectsDefaultDamping>;
// export type SpringsRefEffectsDefaultStiffness = SpringsRef<SpringsKey.EffectsDefaultStiffness>;
// export type SpringsRefEffectsSlow = SpringsRef<SpringsKey.EffectsSlow>;
// export type SpringsRefEffectsSlowDamping = SpringsRef<SpringsKey.EffectsSlowDamping>;
// export type SpringsRefEffectsSlowStiffness = SpringsRef<SpringsKey.EffectsSlowStiffness>;

// export type SpringsRefAny = (
//   | SpringsRefSpatialFast
//   | SpringsRefSpatialFastDamping
//   | SpringsRefSpatialFastStiffness
//   | SpringsRefSpatialDefault
//   | SpringsRefSpatialDefaultDamping
//   | SpringsRefSpatialDefaultStiffness
//   | SpringsRefSpatialSlow
//   | SpringsRefSpatialSlowDamping
//   | SpringsRefSpatialSlowStiffness
//   | SpringsRefEffectsFast
//   | SpringsRefEffectsFastDamping
//   | SpringsRefEffectsFastStiffness
//   | SpringsRefEffectsDefault
//   | SpringsRefEffectsDefaultDamping
//   | SpringsRefEffectsDefaultStiffness
//   | SpringsRefEffectsSlow
//   | SpringsRefEffectsSlowDamping
//   | SpringsRefEffectsSlowStiffness
// );

// export type SpringsRefSpring = (
//   | SpringsRefSpatialFast
//   | SpringsRefSpatialDefault
//   | SpringsRefSpatialSlow
//   | SpringsRefEffectsFast
//   | SpringsRefEffectsDefault
//   | SpringsRefEffectsSlow
// );

// export type SpringsRefDamping = (
//   | SpringsRefSpatialFastDamping
//   | SpringsRefSpatialDefaultDamping
//   | SpringsRefSpatialSlowDamping
//   | SpringsRefEffectsFastDamping
//   | SpringsRefEffectsDefaultDamping
//   | SpringsRefEffectsSlowDamping
// );

// export type SpringsRefStiffness = (
//   | SpringsRefSpatialFastStiffness
//   | SpringsRefSpatialDefaultStiffness
//   | SpringsRefSpatialSlowStiffness
//   | SpringsRefEffectsFastStiffness
//   | SpringsRefEffectsDefaultStiffness
//   | SpringsRefEffectsSlowStiffness
// );

// export class SpringsRef<Discriminant extends SpringsKey> {
//   private constructor(readonly discriminant: Discriminant) {}

//   private static readonly internalSpatialFast = new SpringsRef(SpringsKey.SpatialFast);
//   private static readonly internalSpatialFastDamping = new SpringsRef(SpringsKey.SpatialFastDamping);
//   private static readonly internalSpatialFastStiffness = new SpringsRef(SpringsKey.SpatialFastStiffness);
//   private static readonly internalSpatialDefault = new SpringsRef(SpringsKey.SpatialDefault);
//   private static readonly internalSpatialDefaultDamping = new SpringsRef(SpringsKey.SpatialDefaultDamping);
//   private static readonly internalSpatialDefaultStiffness = new SpringsRef(SpringsKey.SpatialDefaultStiffness);
//   private static readonly internalSpatialSlow = new SpringsRef(SpringsKey.SpatialSlow);
//   private static readonly internalSpatialSlowDamping = new SpringsRef(SpringsKey.SpatialSlowDamping);
//   private static readonly internalSpatialSlowStiffness = new SpringsRef(SpringsKey.SpatialSlowStiffness);
//   private static readonly internalEffectsFast = new SpringsRef(SpringsKey.EffectsFast);
//   private static readonly internalEffectsFastDamping = new SpringsRef(SpringsKey.EffectsFastDamping);
//   private static readonly internalEffectsFastStiffness = new SpringsRef(SpringsKey.EffectsFastStiffness);
//   private static readonly internalEffectsDefault = new SpringsRef(SpringsKey.EffectsDefault);
//   private static readonly internalEffectsDefaultDamping = new SpringsRef(SpringsKey.EffectsDefaultDamping);
//   private static readonly internalEffectsDefaultStiffness = new SpringsRef(SpringsKey.EffectsDefaultStiffness);
//   private static readonly internalEffectsSlow = new SpringsRef(SpringsKey.EffectsSlow);
//   private static readonly internalEffectsSlowDamping = new SpringsRef(SpringsKey.EffectsSlowDamping);
//   private static readonly internalEffectsSlowStiffness = new SpringsRef(SpringsKey.EffectsSlowStiffness);

//   static SpatialFast() {
//     return this.internalSpatialFast;
//   }
//   static SpatialFastDamping() {
//     return this.internalSpatialFastDamping;
//   }
//   static SpatialFastStiffness() {
//     return this.internalSpatialFastStiffness;
//   }
//   static SpatialDefault() {
//     return this.internalSpatialDefault;
//   }
//   static SpatialDefaultDamping() {
//     return this.internalSpatialDefaultDamping;
//   }
//   static SpatialDefaultStiffness() {
//     return this.internalSpatialDefaultStiffness;
//   }
//   static SpatialSlow() {
//     return this.internalSpatialSlow;
//   }
//   static SpatialSlowDamping() {
//     return this.internalSpatialSlowDamping;
//   }
//   static SpatialSlowStiffness() {
//     return this.internalSpatialSlowStiffness;
//   }
//   static EffectsFast() {
//     return this.internalEffectsFast;
//   }
//   static EffectsFastDamping() {
//     return this.internalEffectsFastDamping;
//   }
//   static EffectsFastStiffness() {
//     return this.internalEffectsFastStiffness;
//   }
//   static EffectsDefault() {
//     return this.internalEffectsDefault;
//   }
//   static EffectsDefaultDamping() {
//     return this.internalEffectsDefaultDamping;
//   }
//   static EffectsDefaultStiffness() {
//     return this.internalEffectsDefaultStiffness;
//   }
//   static EffectsSlow() {
//     return this.internalEffectsSlow;
//   }
//   static EffectsSlowDamping() {
//     return this.internalEffectsSlowDamping;
//   }
//   static EffectsSlowStiffness() {
//     return this.internalEffectsSlowStiffness;
//   }

//   deref(this: SpringsRefSpring, springs: Springs): Spring
//   deref(this: SpringsRefDamping, springs: Springs): Float
//   deref(this: SpringsRefStiffness, springs: Springs): Float
//   deref(springs: Springs): Spring | Float {
//     switch (this.discriminant) {
//       case SpringsKey.SpatialFast: return springs.spatialFast;
//       case SpringsKey.SpatialFastDamping: return springs.spatialFast.damping;
//       case SpringsKey.SpatialFastStiffness: return springs.spatialFast.stiffness;
//       case SpringsKey.SpatialDefault: return springs.spatialDefault;
//       case SpringsKey.SpatialDefaultDamping: return springs.spatialDefault.damping;
//       case SpringsKey.SpatialDefaultStiffness: return springs.spatialDefault.stiffness;
//       case SpringsKey.SpatialSlow: return springs.spatialSlow;
//       case SpringsKey.SpatialSlowDamping: return springs.spatialSlow.damping;
//       case SpringsKey.SpatialSlowStiffness: return springs.spatialSlow.stiffness;
//       case SpringsKey.EffectsFast: return springs.effectsFast;
//       case SpringsKey.EffectsFastDamping: return springs.effectsFast.damping;
//       case SpringsKey.EffectsFastStiffness: return springs.effectsFast.stiffness;
//       case SpringsKey.EffectsDefault: return springs.effectsDefault;
//       case SpringsKey.EffectsDefaultDamping: return springs.effectsDefault.damping;
//       case SpringsKey.EffectsDefaultStiffness: return springs.effectsDefault.stiffness;
//       case SpringsKey.EffectsSlow: return springs.effectsSlow;
//       case SpringsKey.EffectsSlowDamping: return springs.effectsSlow.damping;
//       case SpringsKey.EffectsSlowStiffness: return springs.effectsSlow.stiffness;
//     }
//   }
// }

// import { Unique } from "@internal/prelude";

// export const SpatialFastAsNumber = 0;
// export const SpatialFastDampingAsNumber = 1;
// export const SpatialFastStiffnessAsNumber = 2;
// export const SpatialDefaultAsNumber = 3;
// export const SpatialDefaultDampingAsNumber = 4;
// export const SpatialDefaultStiffnessAsNumber = 5;
// export const SpatialSlowAsNumber = 6;
// export const SpatialSlowDampingAsNumber = 7;
// export const SpatialSlowStiffnessAsNumber = 8;
// export const EffectsFastAsNumber = 9;
// export const EffectsFastDampingAsNumber = 10;
// export const EffectsFastStiffnessAsNumber = 11;
// export const EffectsDefaultAsNumber = 12;
// export const EffectsDefaultDampingAsNumber = 13;
// export const EffectsDefaultStiffnessAsNumber = 14;
// export const EffectsSlowAsNumber = 15;
// export const EffectsSlowDampingAsNumber = 16;
// export const EffectsSlowStiffnessAsNumber = 17;

// export const SpatialFastAsString = "SpatialFast";
// export const SpatialFastDampingAsString = "SpatialFastDamping";
// export const SpatialFastStiffnessAsString = "SpatialFastStiffness";
// export const SpatialDefaultAsString = "SpatialDefault";
// export const SpatialDefaultDampingAsString = "SpatialDefaultDamping";
// export const SpatialDefaultStiffnessAsString = "SpatialDefaultStiffness";
// export const SpatialSlowAsString = "SpatialSlow";
// export const SpatialSlowDampingAsString = "SpatialSlowDamping";
// export const SpatialSlowStiffnessAsString = "SpatialSlowStiffness";
// export const EffectsFastAsString = "EffectsFast";
// export const EffectsFastDampingAsString = "EffectsFastDamping";
// export const EffectsFastStiffnessAsString = "EffectsFastStiffness";
// export const EffectsDefaultAsString = "EffectsDefault";
// export const EffectsDefaultDampingAsString = "EffectsDefaultDamping";
// export const EffectsDefaultStiffnessAsString = "EffectsDefaultStiffness";
// export const EffectsSlowAsString = "EffectsSlow";
// export const EffectsSlowDampingAsString = "EffectsSlowDamping";
// export const EffectsSlowStiffnessAsString = "EffectsSlowStiffness";

// const brand = Symbol();

// export type SpatialFast = Unique<typeof brand, "SpringsKey.SpatialFast", typeof SpatialFastAsNumber>;
// export type SpatialFastDamping = Unique<typeof brand, "SpringsKey.SpatialFastDamping", typeof SpatialFastDampingAsNumber>;
// export type SpatialFastStiffness = Unique<typeof brand, "SpringsKey.SpatialFastStiffness", typeof SpatialFastStiffnessAsNumber>;
// export type SpatialDefault = Unique<typeof brand, "SpringsKey.SpatialDefault", typeof SpatialDefaultAsNumber>;
// export type SpatialDefaultDamping = Unique<typeof brand, "SpringsKey.SpatialDefaultDamping", typeof SpatialDefaultDampingAsNumber>;
// export type SpatialDefaultStiffness = Unique<typeof brand, "SpringsKey.SpatialDefaultStiffness", typeof SpatialDefaultStiffnessAsNumber>;
// export type SpatialSlow = Unique<typeof brand, "SpringsKey.SpatialSlow", typeof SpatialSlowAsNumber>;
// export type SpatialSlowDamping = Unique<typeof brand, "SpringsKey.SpatialSlowDamping", typeof SpatialSlowDampingAsNumber>;
// export type SpatialSlowStiffness = Unique<typeof brand, "SpringsKey.SpatialSlowStiffness", typeof SpatialSlowStiffnessAsNumber>;
// export type EffectsFast = Unique<typeof brand, "SpringsKey.EffectsFast", typeof EffectsFastAsNumber>;
// export type EffectsFastDamping = Unique<typeof brand, "SpringsKey.EffectsFastDamping", typeof EffectsFastDampingAsNumber>;
// export type EffectsFastStiffness = Unique<typeof brand, "SpringsKey.EffectsFastStiffness", typeof EffectsFastStiffnessAsNumber>;
// export type EffectsDefault = Unique<typeof brand, "SpringsKey.EffectsDefault", typeof EffectsDefaultAsNumber>;
// export type EffectsDefaultDamping = Unique<typeof brand, "SpringsKey.EffectsDefaultDamping", typeof EffectsDefaultDampingAsNumber>;
// export type EffectsDefaultStiffness = Unique<typeof brand, "SpringsKey.EffectsDefaultStiffness", typeof EffectsDefaultStiffnessAsNumber>;
// export type EffectsSlow = Unique<typeof brand, "SpringsKey.EffectsSlow", typeof EffectsSlowAsNumber>;
// export type EffectsSlowDamping = Unique<typeof brand, "SpringsKey.EffectsSlowDamping", typeof EffectsSlowDampingAsNumber>;
// export type EffectsSlowStiffness = Unique<typeof brand, "SpringsKey.EffectsSlowStiffness", typeof EffectsSlowStiffnessAsNumber>;

// export type Any = (
//   | SpatialFast
//   | SpatialFastDamping
//   | SpatialFastStiffness
//   | SpatialDefault
//   | SpatialDefaultDamping
//   | SpatialDefaultStiffness
//   | SpatialSlow
//   | SpatialSlowDamping
//   | SpatialSlowStiffness
//   | EffectsFast
//   | EffectsFastDamping
//   | EffectsFastStiffness
//   | EffectsDefault
//   | EffectsDefaultDamping
//   | EffectsDefaultStiffness
//   | EffectsSlow
//   | EffectsSlowDamping
//   | EffectsSlowStiffness
// );

// export type Spring = (
//   | SpatialFast
//   | SpatialDefault
//   | SpatialSlow
//   | EffectsFast
//   | EffectsDefault
//   | EffectsSlow
// );

// export type Damping = (
//   | SpatialFastDamping
//   | SpatialDefaultDamping
//   | SpatialSlowDamping
//   | EffectsFastDamping
//   | EffectsDefaultDamping
//   | EffectsSlowDamping
// );

// export type Stiffness = (
//   | SpatialFastStiffness
//   | SpatialDefaultStiffness
//   | SpatialSlowStiffness
//   | EffectsFastStiffness
//   | EffectsDefaultStiffness
//   | EffectsSlowStiffness
// );
// export const SpatialFast = (): SpatialFast => {
//   return SpatialFastAsNumber as SpatialFast;
// };
// export const SpatialFastDamping = (): SpatialFastDamping => {
//   return SpatialFastDampingAsNumber as SpatialFastDamping;
// };
// export const SpatialFastStiffness = (): SpatialFastStiffness => {
//   return SpatialFastStiffnessAsNumber as SpatialFastStiffness;
// };
// export const SpatialDefault = (): SpatialDefault => {
//   return SpatialDefaultAsNumber as SpatialDefault;
// };
// export const SpatialDefaultDamping = (): SpatialDefaultDamping => {
//   return SpatialDefaultDampingAsNumber as SpatialDefaultDamping;
// };
// export const SpatialDefaultStiffness = (): SpatialDefaultStiffness => {
//   return SpatialDefaultStiffnessAsNumber as SpatialDefaultStiffness;
// };
// export const SpatialSlow = (): SpatialSlow => {
//   return SpatialSlowAsNumber as SpatialSlow;
// };
// export const SpatialSlowDamping = (): SpatialSlowDamping => {
//   return SpatialSlowDampingAsNumber as SpatialSlowDamping;
// };
// export const SpatialSlowStiffness = (): SpatialSlowStiffness => {
//   return SpatialSlowStiffnessAsNumber as SpatialSlowStiffness;
// };
// export const EffectsFast = (): EffectsFast => {
//   return EffectsFastAsNumber as EffectsFast;
// };
// export const EffectsFastDamping = (): EffectsFastDamping => {
//   return EffectsFastDampingAsNumber as EffectsFastDamping;
// };
// export const EffectsFastStiffness = (): EffectsFastStiffness => {
//   return EffectsFastStiffnessAsNumber as EffectsFastStiffness;
// };
// export const EffectsDefault = (): EffectsDefault => {
//   return EffectsDefaultAsNumber as EffectsDefault;
// };
// export const EffectsDefaultDamping = (): EffectsDefaultDamping => {
//   return EffectsDefaultDampingAsNumber as EffectsDefaultDamping;
// };
// export const EffectsDefaultStiffness = (): EffectsDefaultStiffness => {
//   return EffectsDefaultStiffnessAsNumber as EffectsDefaultStiffness;
// };
// export const EffectsSlow = (): EffectsSlow => {
//   return EffectsSlowAsNumber as EffectsSlow;
// };
// export const EffectsSlowDamping = (): EffectsSlowDamping => {
//   return EffectsSlowDampingAsNumber as EffectsSlowDamping;
// };
// export const EffectsSlowStiffness = (): EffectsSlowStiffness => {
//   return EffectsSlowStiffnessAsNumber as EffectsSlowStiffness;
// };

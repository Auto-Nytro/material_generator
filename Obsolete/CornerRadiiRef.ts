import { CircleRadius, CornerRadii, Dp } from "@internal/prelude";

export const enum CornerRadiiKey {
  None,
  ExtraSmall,
  Small,
  Medium,
  Large,
  LargeIncreased,
  ExtraLarge,
  ExtraLargeIncreased,
  ExtraExtraLarge,
  Full,
}

const brand = Symbol();

type Ref<Key extends CornerRadiiKey = CornerRadiiKey> = {
  readonly [brand]: Key,
};

const Ref = <Key extends CornerRadiiKey = CornerRadiiKey>(key: Key): Ref<Key> => ({
  [brand]: key,
});

export type Any = Ref;
export type None = Ref<CornerRadiiKey.None>;
export type ExtraSmall = Ref<CornerRadiiKey.ExtraSmall>;
export type Small = Ref<CornerRadiiKey.Small>;
export type Medium = Ref<CornerRadiiKey.Medium>;
export type Large = Ref<CornerRadiiKey.Large>;
export type LargeIncreased = Ref<CornerRadiiKey.LargeIncreased>;
export type ExtraLarge = Ref<CornerRadiiKey.ExtraLarge>;
export type ExtraLargeIncreased = Ref<CornerRadiiKey.ExtraLargeIncreased>;
export type ExtraExtraLarge = Ref<CornerRadiiKey.ExtraExtraLarge>;
export type Full = Ref<CornerRadiiKey.Full>;

export const None = () => Ref(CornerRadiiKey.None);
export const ExtraSmall = () => Ref(CornerRadiiKey.ExtraSmall);
export const Small = () => Ref(CornerRadiiKey.Small);
export const Medium = () => Ref(CornerRadiiKey.Medium);
export const Large = () => Ref(CornerRadiiKey.Large);
export const LargeIncreased = () => Ref(CornerRadiiKey.LargeIncreased);
export const ExtraLarge = () => Ref(CornerRadiiKey.ExtraLarge);
export const ExtraLargeIncreased = () => Ref(CornerRadiiKey.ExtraLargeIncreased);
export const ExtraExtraLarge = () => Ref(CornerRadiiKey.ExtraExtraLarge);
export const Full = () => Ref(CornerRadiiKey.Full);

export const get = (it: Any, cornerRadii: CornerRadii): Dp | CircleRadius => {
  switch (it[brand]) {
    case CornerRadiiKey.None: return cornerRadii.none;
    case CornerRadiiKey.ExtraSmall: return cornerRadii.extraSmall;
    case CornerRadiiKey.Small: return cornerRadii.small;
    case CornerRadiiKey.Medium: return cornerRadii.medium;
    case CornerRadiiKey.Large: return cornerRadii.large;
    case CornerRadiiKey.LargeIncreased: return cornerRadii.largeIncreased;
    case CornerRadiiKey.ExtraLarge: return cornerRadii.extraLarge;
    case CornerRadiiKey.ExtraLargeIncreased: return cornerRadii.extraLargeIncreased;
    case CornerRadiiKey.ExtraExtraLarge: return cornerRadii.extraExtraLarge;
    case CornerRadiiKey.Full: return cornerRadii.full;
  }
};

// export class CornerRadiiRef {
//   private constructor(readonly discriminant: CornerRadiiKey) {}

//   private static readonly internalNone = new CornerRadiiRef(CornerRadiiKey.None);
//   private static readonly internalExtraSmall = new CornerRadiiRef(CornerRadiiKey.ExtraSmall);
//   private static readonly internalSmall = new CornerRadiiRef(CornerRadiiKey.Small);
//   private static readonly internalMedium = new CornerRadiiRef(CornerRadiiKey.Medium);
//   private static readonly internalLarge = new CornerRadiiRef(CornerRadiiKey.Large);
//   private static readonly internalLargeIncreased = new CornerRadiiRef(CornerRadiiKey.LargeIncreased);
//   private static readonly internalExtraLarge = new CornerRadiiRef(CornerRadiiKey.ExtraLarge);
//   private static readonly internalExtraLargeIncreased = new CornerRadiiRef(CornerRadiiKey.ExtraLargeIncreased);
//   private static readonly internalExtraExtraLarge = new CornerRadiiRef(CornerRadiiKey.ExtraExtraLarge);
//   private static readonly internalFull = new CornerRadiiRef(CornerRadiiKey.Full);

//   static None() {
//     return this.internalNone;
//   }
//   static ExtraSmall() {
//     return this.internalExtraSmall;
//   }
//   static Small() {
//     return this.internalSmall;
//   }
//   static Medium() {
//     return this.internalMedium;
//   }
//   static Large() {
//     return this.internalLarge;
//   }
//   static LargeIncreased() {
//     return this.internalLargeIncreased;
//   }
//   static ExtraLarge() {
//     return this.internalExtraLarge;
//   }
//   static ExtraLargeIncreased() {
//     return this.internalExtraLargeIncreased;
//   }
//   static ExtraExtraLarge() {
//     return this.internalExtraExtraLarge;
//   }
//   static Full() {
//     return this.internalFull;
//   }

//   deref(cornerRadii: CornerRadii): Dp | CircleRadius {
//     switch (this.discriminant) {
//       case CornerRadiiKey.None: return cornerRadii.none;
//       case CornerRadiiKey.ExtraSmall: return cornerRadii.extraSmall;
//       case CornerRadiiKey.Small: return cornerRadii.small;
//       case CornerRadiiKey.Medium: return cornerRadii.medium;
//       case CornerRadiiKey.Large: return cornerRadii.large;
//       case CornerRadiiKey.LargeIncreased: return cornerRadii.largeIncreased;
//       case CornerRadiiKey.ExtraLarge: return cornerRadii.extraLarge;
//       case CornerRadiiKey.ExtraLargeIncreased: return cornerRadii.extraLargeIncreased;
//       case CornerRadiiKey.ExtraExtraLarge: return cornerRadii.extraExtraLarge;
//       case CornerRadiiKey.Full: return cornerRadii.full;
//     }
//   }
// }

import { Dp, Elevation } from "@internal/prelude";

const enum ElevationKey {
  Level0,
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
}

const symbol = Symbol();

type Ref<Key extends ElevationKey> = {
  readonly [symbol]: Key,
};

const Ref = <Key extends ElevationKey>(key: Key): Ref<Key> => ({
  [symbol]: key,
});

export type Level0 = Ref<ElevationKey.Level0>;
export type Level1 = Ref<ElevationKey.Level1>;
export type Level2 = Ref<ElevationKey.Level2>;
export type Level3 = Ref<ElevationKey.Level3>;
export type Level4 = Ref<ElevationKey.Level4>;
export type Level5 = Ref<ElevationKey.Level5>;

export const Level0 = (): Level0 => Ref(ElevationKey.Level0);
export const Level1 = (): Level1 => Ref(ElevationKey.Level1);
export const Level2 = (): Level2 => Ref(ElevationKey.Level2);
export const Level3 = (): Level3 => Ref(ElevationKey.Level3);
export const Level4 = (): Level4 => Ref(ElevationKey.Level4);
export const Level5 = (): Level5 => Ref(ElevationKey.Level5);

export const get = (it: ElevationKey, elevation: Elevation): Dp => {
  switch (it) {
    case ElevationKey.Level0: return elevation.level0;
    case ElevationKey.Level1: return elevation.level1;
    case ElevationKey.Level2: return elevation.level2;
    case ElevationKey.Level3: return elevation.level3;
    case ElevationKey.Level4: return elevation.level4;
    case ElevationKey.Level5: return elevation.level5;
  }
}

// export class ElevationRef {
//   private constructor(readonly discriminant: ElevationKey) {}

//   private static readonly internalLevel0 = new ElevationRef(ElevationKey.Level0);
//   private static readonly internalLevel1 = new ElevationRef(ElevationKey.Level1);
//   private static readonly internalLevel2 = new ElevationRef(ElevationKey.Level2);
//   private static readonly internalLevel3 = new ElevationRef(ElevationKey.Level3);
//   private static readonly internalLevel4 = new ElevationRef(ElevationKey.Level4);
//   private static readonly internalLevel5 = new ElevationRef(ElevationKey.Level5);

//     static Level0() {
//     return this.internalLevel0;
//   }
//   static Level1() {
//     return this.internalLevel1;
//   }
//   static Level2() {
//     return this.internalLevel2;
//   }
//   static Level3() {
//     return this.internalLevel3;
//   }
//   static Level4() {
//     return this.internalLevel4;
//   }
//   static Level5() {
//     return this.internalLevel5;
//   }

//   deref(elevation: Elevation) {
//     switch (this.discriminant) {
//       case ElevationKey.Level0: return elevation.level0;
//       case ElevationKey.Level1: return elevation.level1;
//       case ElevationKey.Level2: return elevation.level2;
//       case ElevationKey.Level3: return elevation.level3;
//       case ElevationKey.Level4: return elevation.level4;
//       case ElevationKey.Level5: return elevation.level5;
//     }
//   }
// }
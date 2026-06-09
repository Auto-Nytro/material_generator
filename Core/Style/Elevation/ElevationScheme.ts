import { Dp } from "@internal/prelude";

export interface ElevationScheme {
  readonly level0: Dp,
  readonly level1: Dp,
  readonly level2: Dp,
  readonly level3: Dp,
  readonly level4: Dp,
  readonly level5: Dp,
}

export const baseline = (): ElevationScheme => {
  return {
    level0: Dp.create(0.0),
    level1: Dp.create(1.0),
    level2: Dp.create(3.0),
    level3: Dp.create(6.0),
    level4: Dp.create(8.0),
    level5: Dp.create(12.0),
  };
};
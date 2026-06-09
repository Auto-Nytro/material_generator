import { Dp } from "@internal/prelude";

export type Elevation = {
  readonly dp: Dp,
};

export const fromDp = (dp: Dp): Elevation => {
  return {
    dp,
  };
};

export const Elevation = {
  fromDp,
};
import { Color, Dp, MaybeVar } from "@internal/prelude";

export interface Outline {
  readonly thickness: MaybeVar<Dp>,
  readonly offset: MaybeVar<Dp>,
  readonly color: MaybeVar<Color>,
}

export const create = (initializer: Outline): Outline => {
  return initializer;
};

export const Outline = {
  create,
};
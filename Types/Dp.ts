import { Discriminant } from "@internal/prelude";

export interface Dp {
  readonly discriminant: Discriminant.Dp,
  readonly value: number,
}

export const create = (value: number): Dp => {
  return {
    discriminant: Discriminant.Dp(),
    value,
  };
};

export const value = (it: Dp): number => {
  return it.value;
};

export const Dp = {
  create,
  value,
};
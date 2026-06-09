import { Discriminant } from "@internal/prelude";

/**
 * Physical pixel unit
 */
export interface Px {
  readonly discriminant: Discriminant.Px,
  readonly value: number,
}

export const create = (value: number): Px => {
  return {
    discriminant: Discriminant.Px(),
    value,
  };
};

export const value = (it: Px): number => {
  return it.value;
};

export const Px = {
  create,
  value,
};
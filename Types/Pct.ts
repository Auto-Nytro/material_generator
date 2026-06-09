import { Discriminant } from "@internal/prelude";

/**
 * A percentage value
 */
export interface Pct {
  readonly discriminant: Discriminant.Pct,
  readonly value: number,
}

export const create = (value: number): Pct => {
  return {
    discriminant: Discriminant.Pct(),
    value,
  };
};

export const value = (it: Pct): number => {
  return it.value;
};

export const Pct = {
  create,
  value,
};
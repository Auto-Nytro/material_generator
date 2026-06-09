import { Discriminant } from "@internal/prelude";

export interface Float {
  readonly discriminant: Discriminant.Float,
  readonly value: number,
}

export const create = (value: number): Float => {
  return {
    discriminant: Discriminant.Float(),
    value,
  };
};

export const value = (it: Float): number => {
  return it.value;
};

export const Float = {
  create,
  value,
};
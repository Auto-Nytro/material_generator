import { Discriminant } from "@internal/prelude";

export interface Int {
  readonly discriminant: Discriminant.Int,
  readonly value: number,
}

export const create = (value: number): Int => {
  return {
    discriminant: Discriminant.Int(),
    value,
  };
};

export const value = (it: Int): number => {
  return it.value;
};

export const Int = {
  create,
  value,
};
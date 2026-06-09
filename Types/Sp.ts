import { Discriminant } from "@internal/prelude";

export interface Sp {
  readonly discriminant: Discriminant.Sp,
  readonly value: number,
}

export const create = (value: number): Sp => {
  return {
    discriminant: Discriminant.Sp(),
    value,
  };
};

export const value = (it: Sp): number => {
  return it.value;
};

export const Sp = {
  create,
  value,
};
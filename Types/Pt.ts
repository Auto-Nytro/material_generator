import { Discriminant } from "@internal/prelude";

export interface Pt {
  readonly discriminant: Discriminant.Pt,
  readonly value: number,
}

export const create = (value: number): Pt => {
  return {
    discriminant: Discriminant.Pt(),
    value,
  };
};

export const value = (it: Pt): number => {
  return it.value;
};

export const Pt = {
  create,
  value,
};
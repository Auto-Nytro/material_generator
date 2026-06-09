import { Discriminant } from "@internal/prelude";

export interface Rem {
  readonly discriminant: Discriminant.Rem;
  readonly value: number;
}

export const create = (value: number): Rem => {
  return {
    discriminant: Discriminant.Rem(),
    value,
  };
};

export const value = (it: Rem): number => {
  return it.value;
};

export const Rem = {
  create,
  value,
};
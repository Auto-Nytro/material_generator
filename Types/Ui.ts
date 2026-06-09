import { Discriminant } from "@internal/prelude";

export interface Ui {
  readonly discriminant: Discriminant.Ui,
  readonly value: number,
}

export const create = (value: number): Ui => {
  return {
    discriminant: Discriminant.Ui(),
    value,
  };
};

export const value = (it: Ui): number => {
  return it.value;
};

export const Ui = {
  create,
  value,
};
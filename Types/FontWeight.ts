import { Int, Discriminant } from "@internal/prelude";

export interface FontWeight {
  readonly discriminant: Discriminant.FontWeight,
  readonly value: Int,
}

export const create = (value: Int): FontWeight => {
  return {
    discriminant: Discriminant.FontWeight(),
    value,
  };
};

export const value = (it: FontWeight): Int => {
  return it.value;
};

export const FontWeight = {
  create,
  value,
};
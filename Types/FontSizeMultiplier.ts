import { Discriminant, Float } from "@internal/prelude";

export interface FontSizeMultiplier {
  readonly discriminant: Discriminant.FontSizeMultiplier,
  readonly value: Float,
}

export const create = (value: Float): FontSizeMultiplier => {
  return {
    discriminant: Discriminant.FontSizeMultiplier(),
    value,
  };
};

export const value = (it: FontSizeMultiplier): Float => {
  return it.value;
};

export const FontSizeMultiplier = {
  create,
  value,
};
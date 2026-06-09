import { Length, Pct, Discriminant } from "@internal/prelude";

export interface FontSize {
  readonly discriminant: Discriminant.FontSize,
  readonly value: Length | Pct,
}

export const create = (value: Length | Pct): FontSize => {
  return {
    discriminant: Discriminant.FontSize(),
    value,
  };
};

export const value = (it: FontSize): Length | Pct => {
  return it.value;
};

export const FontSize = {
  create,
  value,
};
import { Discriminant } from "@internal/prelude";

export interface FontFamily {
  readonly discriminant: Discriminant.FontFamily,
  readonly value: string,
}

export const create = (value: string): FontFamily => {
  return {
    discriminant: Discriminant.FontFamily(),
    value,
  };
};

export const value = (it: FontFamily): string => {
  return it.value;
};

export const FontFamily = {
  create,
  value,
};
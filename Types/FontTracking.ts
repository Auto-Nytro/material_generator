import { Length, Discriminant } from "@internal/prelude";

export interface FontTracking {
  readonly discriminant: Discriminant.FontTracking,
  readonly value: Length,
}

export const create = (value: Length): FontTracking => {
  return {
    discriminant: Discriminant.FontTracking(),
    value,
  };
};

export const value = (it: FontTracking): Length => {
  return it.value;
};

export const FontTracking = {
  create,
  value,
};
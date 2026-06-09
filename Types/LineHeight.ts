import { Length, Discriminant } from "@internal/prelude";

export interface LineHeight {
  readonly discriminant: Discriminant.LineHeight,
  readonly value: Length,
}

export const create = (value: Length): LineHeight => {
  return {
    discriminant: Discriminant.LineHeight(),
    value,
  };
};

export const value = (it: LineHeight): Length => {
  return it.value;
};

export const LineHeight = {
  create,
  value,
};
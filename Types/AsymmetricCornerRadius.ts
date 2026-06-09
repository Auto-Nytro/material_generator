import { Dp, Discriminant } from "@internal/prelude";

export interface AsymmetricCornerRadius {
  readonly discriminant: Discriminant.AsymmetricCornerRadius,
  readonly horizontal: Dp,
  readonly vertical: Dp,
}

export const create = ({
  horizontal,
  vertical,
}: {
  readonly horizontal: Dp,
  readonly vertical: Dp,
}): AsymmetricCornerRadius => {
  return {
    discriminant: Discriminant.AsymmetricCornerRadius(),
    horizontal,
    vertical,
  };
};

export const Uniform = (value: Dp): AsymmetricCornerRadius => {
  return {
    discriminant: Discriminant.AsymmetricCornerRadius(),
    horizontal: value,
    vertical: value,
  };
};

export const horizontal = (it: AsymmetricCornerRadius): Dp => {
  return it.horizontal;
};

export const vertical = (it: AsymmetricCornerRadius): Dp => {
  return it.vertical;
};

export const AsymmetricCornerRadius = {
  create,
  Uniform,
  horizontal,
  vertical,
};
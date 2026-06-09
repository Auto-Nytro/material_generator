import { Discriminant } from "@internal/prelude";

export interface CircleRadius {
  readonly discriminant: Discriminant.CircleRadius,
}

export const create = (): CircleRadius => {
  return {
    discriminant: Discriminant.CircleRadius(),
  };
};

export const CircleRadius = {
  create,
};
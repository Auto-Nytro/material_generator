import { Discriminant } from "@internal/prelude";

export interface Duration {
  readonly discriminant: Discriminant.Duration,
  readonly value: number,
}

export const ms = (value: number): Duration => {
  return {
    discriminant: Discriminant.Duration(),
    value,
  };
};

export const toMilliseconds = (it: Duration): number => {
  return it.value;
};

export const Duration = {
  ms,
  toMilliseconds,
};
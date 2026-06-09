import { Discriminant } from "@internal/prelude";

// TODO: Use an RGBA color instead and add methods for manupluation
export interface HexColor {
  readonly discriminant: Discriminant.HexColor,
  readonly value: `#${string}`,
}

export const fromString = (value: `#${string}`): HexColor => {
  return {
    discriminant: Discriminant.HexColor(),
    value,
  };
};

export const toString = (it: HexColor): `#${string}` => {
  return it.value;
};

export const withAlpha = (it: HexColor): HexColor => {

};

export const HexColor = {
  fromString,
  toString,
  withAlpha,
};
import { C, M } from "@internal/css";

export const toCss = (it: M.AsymmetricCornerRadius) => {
  return `${
    C.Value.toCss(M.AsymmetricCornerRadius.horizontal(it))
  } ${
    C.Value.toCss(M.AsymmetricCornerRadius.vertical(it))
  }`
};

export const AsymmetricCornerRadius = {
  toCss,
};
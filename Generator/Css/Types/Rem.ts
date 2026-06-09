import { M } from "@internal/css";

export const toCss = (it: M.Rem): string => {
  // TODO: Remove this type altogether since we aren't 
  // using it anywhere
  throw new Error("CSS's Rem values are not supported");
};

export const Rem = {
  toCss,
};
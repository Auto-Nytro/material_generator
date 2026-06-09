import { M } from "@internal/css";

export const baseFontSize = M.Dp.create(16);


/**
 * | Platform | Android | Web |
 * | :--- | :--- | :--- |
 * | Font size unit | sp | rem |
 * | Conversion ratio | 1.0 | 0.0625 |
 * 
 * Web browsers calculate the REM (the root em size) based on the root element size. The default for modern web browsers is 16px, so the conversion is SP_SIZE/16 = rem.
 */
export const toCss = (it: M.Sp): string => {
  // TODO: This assumes the default rem is always 16px.
  //       Implement this correctly.
  return `${M.Sp.value(it) / M.Dp.value(baseFontSize)}rem`;
};

export const Sp = {
  toCss,
};
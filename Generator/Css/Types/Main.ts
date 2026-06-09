export { Ui } from "./Ui.ts"
export { Sp } from "./Sp.ts"
export { Rem } from "./Rem.ts"
export { CircleRadius } from "./CircleRadius.ts"
export { Pt } from "./Pt.ts"
export { Pct } from "./Pct.ts"
export { LineHeight } from "./LineHeight.ts"
export { Int } from "./Int.ts"
export { FontWeight } from "./FontWeight.ts"
export { FontTracking } from "./FontTracking.ts"
export { FontSizeMultiplier } from "./FontSizeMultiplier.ts"
export { FontSize } from "./FontSize.ts"
export { FontFamily } from "./FontFamily.ts"
export { Float } from "./Float.ts"
export { Duration } from "./Duration.ts"
export { Dp } from "./Dp.ts"
export { CubicBezier } from "./CubicBezier.ts"
export { Color } from "./Color.ts"
export { AsymmetricCornerRadius } from "./AsymmetricCornerRadius.ts"
export { Value } from "./Any.ts"

// import { 
//   HexColor, CubicBezier, Dp, Duration, Float, 
//   FontFamily, FontSizeMultiplier, FontTracking, 
//   FontWeight, Int, LineHeight, Pt, Sp, Ui,
//   Px, Discriminant, Value,
//   DiscriminantE,
//   FontSize,
//   Pct,
//   CircleRadius,
//   Rem,
//   AsymmetricCornerRadius,
// } from "@internal/prelude";

// export const CssPct = {
//   toCss: (it: Pct): string => {
//     return `${Pct.value(it)}%`;
//   },
// };

// export const CssFontWeight = {
//   toCss(it: FontWeight) {
//     return CssValue.toCss(FontWeight.value(it));
//   }
// };

// export const CssFontFamily = {
//   toCss(it: FontFamily) {
//     return FontFamily.value(it);
//   }
// };

// export const CssFontTracking = {
//   toCss(it: FontTracking) {
//     return CssValue.toCss(FontTracking.value(it));
//   }
// };

// export const CssFontSizeMultiplier = {
//   toCss(it: FontSizeMultiplier) {
//     return CssFloat.toCss(FontSizeMultiplier.value(it));
//   }
// }

// export const CssCubicBezier = {
//   toCss(it: CubicBezier) {
//     return `cubic-bezier(${
//       CssValue.toCss(it.x1)
//     }, ${
//       CssValue.toCss(it.y1)
//     }, ${
//       CssValue.toCss(it.x2)
//     }, ${
//       CssValue.toCss(it.y2)
//     })`;
//   }
// }

// export const CssDuration = {
//   toCss(it: Duration) {
//     const milliseconds = Duration.toMilliseconds(it);
//     if (milliseconds === 0) {
//       return "0ms";
//     }
//     if (milliseconds % 1000 === 0) {
//       return `${milliseconds / 1000}s`;
//     }
//     return `${milliseconds}ms`;
//   }
// };

// export const CssRadiusCircle = {
//   toCss: (it: CircleRadius): string => {
//     // 9999px is a hack to make a corner circular.
//     return "9999px";
//   },
// };

// export const CssAsymmetricCornerRadius = {
//   toCss: (it: AsymmetricCornerRadius): string => {
//     return `${
//       CssValue.toCss(AsymmetricCornerRadius.horizontal(it))
//     } ${
//       CssValue.toCss(AsymmetricCornerRadius.vertical(it))
//     }`
//   },
// };

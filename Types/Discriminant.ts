export const enum DiscriminantE {
  HexColor,
  Dp,
  Duration,
  CubicBezier,
  Float,
  Int,
  FontFamily,
  FontWeight,
  FontTracking,
  FontSizeMultiplier,
  FontSize,
  LineHeight,
  Pct,
  Pt,
  Sp,
  Ui,
  CircleRadius,
  Rem,
  Px,
  AsymmetricCornerRadius,
}

export type Any = DiscriminantE;
export type HexColor = DiscriminantE.HexColor;
export type Dp = DiscriminantE.Dp;
export type Duration = DiscriminantE.Duration;
export type CubicBezier = DiscriminantE.CubicBezier;
export type Float = DiscriminantE.Float;
export type Int = DiscriminantE.Int;
export type FontFamily = DiscriminantE.FontFamily;
export type FontWeight = DiscriminantE.FontWeight;
export type FontTracking = DiscriminantE.FontTracking;
export type FontSizeMultiplier = DiscriminantE.FontSizeMultiplier;
export type FontSize = DiscriminantE.FontSize;
export type LineHeight = DiscriminantE.LineHeight;
export type Pct = DiscriminantE.Pct;
export type Pt = DiscriminantE.Pt;
export type Sp = DiscriminantE.Sp;
export type Ui = DiscriminantE.Ui;
export type CircleRadius = DiscriminantE.CircleRadius;
export type Rem = DiscriminantE.Rem;
export type Px = DiscriminantE.Px;
export type AsymmetricCornerRadius = DiscriminantE.AsymmetricCornerRadius;

export const HexColor = (): HexColor => DiscriminantE.HexColor;
export const Dp = (): Dp => DiscriminantE.Dp;
export const Duration = (): Duration => DiscriminantE.Duration;
export const CubicBezier = (): CubicBezier => DiscriminantE.CubicBezier;
export const Float = (): Float => DiscriminantE.Float;
export const Int = (): Int => DiscriminantE.Int;
export const FontFamily = (): FontFamily => DiscriminantE.FontFamily;
export const FontWeight = (): FontWeight => DiscriminantE.FontWeight;
export const FontTracking = (): FontTracking => DiscriminantE.FontTracking;
export const FontSizeMultiplier = (): FontSizeMultiplier => DiscriminantE.FontSizeMultiplier;
export const FontSize = (): FontSize => DiscriminantE.FontSize;
export const LineHeight = (): LineHeight => DiscriminantE.LineHeight;
export const Pct = (): Pct => DiscriminantE.Pct;
export const Pt = (): Pt => DiscriminantE.Pt;
export const Sp = (): Sp => DiscriminantE.Sp;
export const Ui = (): Ui => DiscriminantE.Ui;
export const CircleRadius = (): CircleRadius => DiscriminantE.CircleRadius;
export const Rem = (): Rem => DiscriminantE.Rem;
export const Px = (): Px => DiscriminantE.Px;
export const AsymmetricCornerRadius = (): AsymmetricCornerRadius => DiscriminantE.AsymmetricCornerRadius;

export const isHexColor = (it: DiscriminantE): it is DiscriminantE.HexColor => it === DiscriminantE.HexColor;
export const isDp = (it: DiscriminantE): it is DiscriminantE.Dp => it === DiscriminantE.Dp;
export const isDuration = (it: DiscriminantE): it is DiscriminantE.Duration => it === DiscriminantE.Duration;
export const isCubicBezier = (it: DiscriminantE): it is DiscriminantE.CubicBezier => it === DiscriminantE.CubicBezier;
export const isFloat = (it: DiscriminantE): it is DiscriminantE.Float => it === DiscriminantE.Float;
export const isInt = (it: DiscriminantE): it is DiscriminantE.Int => it === DiscriminantE.Int;
export const isFontFamily = (it: DiscriminantE): it is DiscriminantE.FontFamily => it === DiscriminantE.FontFamily;
export const isFontWeight = (it: DiscriminantE): it is DiscriminantE.FontWeight => it === DiscriminantE.FontWeight;
export const isFontTracking = (it: DiscriminantE): it is DiscriminantE.FontTracking => it === DiscriminantE.FontTracking;
export const isFontSizeMultiplier = (it: DiscriminantE): it is DiscriminantE.FontSizeMultiplier => it === DiscriminantE.FontSizeMultiplier;
export const isFontSize = (it: DiscriminantE): it is DiscriminantE.FontSize => it === DiscriminantE.FontSize;
export const isLineHeight = (it: DiscriminantE): it is DiscriminantE.LineHeight => it === DiscriminantE.LineHeight;
export const isPct = (it: DiscriminantE): it is DiscriminantE.Pct => it === DiscriminantE.Pct;
export const isPt = (it: DiscriminantE): it is DiscriminantE.Pt => it === DiscriminantE.Pt;
export const isSp = (it: DiscriminantE): it is DiscriminantE.Sp => it === DiscriminantE.Sp;
export const isUi = (it: DiscriminantE): it is DiscriminantE.Ui => it === DiscriminantE.Ui;
export const isRadiusCircle = (it: DiscriminantE): it is DiscriminantE.CircleRadius => it === DiscriminantE.CircleRadius;
export const isRem = (it: DiscriminantE): it is DiscriminantE.Rem => it === DiscriminantE.Rem;
export const isPx = (it: DiscriminantE): it is DiscriminantE.Px => it === DiscriminantE.Px;
export const isAsymmetricCornerRadius = (it: DiscriminantE): it is DiscriminantE.AsymmetricCornerRadius => it === DiscriminantE.AsymmetricCornerRadius;
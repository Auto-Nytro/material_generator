import { AsymmetricCornerRadius, Color, CornerRadius, CubicBezier, Dp, Duration, Easing, Float, FontFamily, FontSize, FontSizeMultiplier, FontTracking, FontWeight, HexColor, Int, Length, LineHeight, Opacity, Pct, Pt, Px, CircleRadius, Rem, Sp, Ui, DiscriminantE } from "@internal/prelude";

export type Value = (
  | Ui 
  | Sp 
  | Rem 
  | CircleRadius 
  | Px 
  | Pt 
  | Pct 
  | Opacity
  | LineHeight 
  | Length 
  | Int 
  | HexColor 
  | FontWeight 
  | FontTracking 
  | FontSizeMultiplier 
  | FontSize 
  | FontFamily 
  | Float 
  | Easing
  | Duration 
  | Dp 
  | CubicBezier 
  | CornerRadius 
  | Color 
  | AsymmetricCornerRadius 
);

export interface MatchCases<
  OnHexColorR = unknown,
  OnDpR = unknown,
  OnDurationR = unknown,
  OnCubicBezierR = unknown,
  OnFloatR = unknown,
  OnIntR = unknown,
  OnFontFamilyR = unknown,
  OnFontWeightR = unknown,
  OnFontTrackingR = unknown,
  OnFontSizeMultiplierR = unknown,
  OnFontSizeR = unknown,
  OnLineHeightR = unknown,
  OnPctR = unknown,
  OnPtR = unknown,
  OnSpR = unknown,
  OnUiR = unknown,
  OnCircleRadiusR = unknown,
  OnRemR = unknown,
  OnPxR = unknown,
  OnAsymmetricCornerRadiusR = unknown,
> {
  readonly onHexColor: (it: HexColor) => OnHexColorR,
  readonly onDp: (it: Dp) => OnDpR,
  readonly onDuration: (it: Duration) => OnDurationR,
  readonly onCubicBezier: (it: CubicBezier) => OnCubicBezierR,
  readonly onFloat: (it: Float) => OnFloatR,
  readonly onInt: (it: Int) => OnIntR,
  readonly onFontFamily: (it: FontFamily) => OnFontFamilyR,
  readonly onFontWeight: (it: FontWeight) => OnFontWeightR,
  readonly onFontTracking: (it: FontTracking) => OnFontTrackingR,
  readonly onFontSizeMultiplier: (it: FontSizeMultiplier) => OnFontSizeMultiplierR,
  readonly onFontSize: (it: FontSize) => OnFontSizeR,
  readonly onLineHeight: (it: LineHeight) => OnLineHeightR,
  readonly onPct: (it: Pct) => OnPctR,
  readonly onPt: (it: Pt) => OnPtR,
  readonly onSp: (it: Sp) => OnSpR,
  readonly onUi: (it: Ui) => OnUiR,
  readonly onCircleRadius: (it: CircleRadius) => OnCircleRadiusR,
  readonly onRem: (it: Rem) => OnRemR,
  readonly onPx: (it: Px) => OnPxR,
  readonly onAsymmetricCornerRadius: (it: AsymmetricCornerRadius) => OnAsymmetricCornerRadiusR,
}

export const match = <
  OnHexColorR,
  OnDpR,
  OnDurationR,
  OnCubicBezierR,
  OnFloatR,
  OnIntR,
  OnFontFamilyR,
  OnFontWeightR,
  OnFontTrackingR,
  OnFontSizeMultiplierR,
  OnFontSizeR,
  OnLineHeightR,
  OnPctR,
  OnPtR,
  OnSpR,
  OnUiR,
  OnCircleRadiusR,
  OnRemR,
  OnPxR,
  OnAsymmetricCornerRadiusR,
>(
  it: Value,
  cases: MatchCases<
    OnHexColorR,
    OnDpR,
    OnDurationR,
    OnCubicBezierR,
    OnFloatR,
    OnIntR,
    OnFontFamilyR,
    OnFontWeightR,
    OnFontTrackingR,
    OnFontSizeMultiplierR,
    OnFontSizeR,
    OnLineHeightR,
    OnPctR,
    OnPtR,
    OnSpR,
    OnUiR,
    OnCircleRadiusR,
    OnRemR,
    OnPxR,
    OnAsymmetricCornerRadiusR
  >,
): | OnHexColorR
  | OnDpR
  | OnDurationR
  | OnCubicBezierR
  | OnFloatR
  | OnIntR
  | OnFontFamilyR
  | OnFontWeightR
  | OnFontTrackingR
  | OnFontSizeMultiplierR
  | OnFontSizeR
  | OnLineHeightR
  | OnPctR
  | OnPtR
  | OnSpR
  | OnUiR
  | OnCircleRadiusR
  | OnRemR
  | OnPxR
  | OnAsymmetricCornerRadiusR => 
{
  switch (it.discriminant) {
    case DiscriminantE.HexColor: return cases.onHexColor(it);
    case DiscriminantE.Dp: return cases.onDp(it);
    case DiscriminantE.Duration: return cases.onDuration(it);
    case DiscriminantE.CubicBezier: return cases.onCubicBezier(it);
    case DiscriminantE.Float: return cases.onFloat(it);
    case DiscriminantE.Int: return cases.onInt(it);
    case DiscriminantE.FontFamily: return cases.onFontFamily(it);
    case DiscriminantE.FontWeight: return cases.onFontWeight(it);
    case DiscriminantE.FontTracking: return cases.onFontTracking(it);
    case DiscriminantE.FontSizeMultiplier: return cases.onFontSizeMultiplier(it);
    case DiscriminantE.FontSize: return cases.onFontSize(it);
    case DiscriminantE.LineHeight: return cases.onLineHeight(it);
    case DiscriminantE.Pct: return cases.onPct(it);
    case DiscriminantE.Pt: return cases.onPt(it);
    case DiscriminantE.Sp: return cases.onSp(it);
    case DiscriminantE.Ui: return cases.onUi(it);
    case DiscriminantE.CircleRadius: return cases.onCircleRadius(it);
    case DiscriminantE.Rem: return cases.onRem(it);
    case DiscriminantE.Px: return cases.onPx(it);
    case DiscriminantE.AsymmetricCornerRadius: return cases.onAsymmetricCornerRadius(it);
  }
};

export const Value = {
  match,
  // readonly isType: (it: unknown): it is Value => {
  //   return (
  //     it instanceof Ui ||
  //     it instanceof Sp ||
  //     it instanceof Rem ||
  //     it instanceof CircleRadius ||
  //     it instanceof Px ||
  //     it instanceof Pt ||
  //     it instanceof Pct ||
  //     it instanceof LineHeight ||
  //     it instanceof Int ||
  //     it instanceof HexColor ||
  //     it instanceof FontWeight ||
  //     it instanceof FontTracking ||
  //     it instanceof FontSizeMultiplier ||
  //     it instanceof FontSize ||
  //     it instanceof FontFamily ||
  //     it instanceof Float ||
  //     it instanceof Duration ||
  //     it instanceof Dp ||
  //     it instanceof CubicBezier ||
  //     it instanceof AsymmetricCornerRadius
  //   )
  // }
}
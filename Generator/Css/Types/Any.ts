import { 
  M, Color, Dp, Duration, CubicBezier, Float, 
  FontFamily, Int, FontWeight, FontTracking, 
  FontSizeMultiplier, FontSize, LineHeight,
  Pct, Pt, Sp, Ui,CircleRadius, AsymmetricCornerRadius,
  Rem,
} from "@internal/css";

export const toCss = (it: M.Value): string => {
  return M.Value.match(it, {
    onHexColor: it => Color.toCss(it),
    onDp: it => Dp.toCss(it),
    onDuration: it => Duration.toCss(it),
    onCubicBezier: it => CubicBezier.toCss(it),
    onFloat: it => Float.toCss(it),
    onInt: it => Int.toCss(it),
    onFontFamily: it => FontFamily.toCss(it),
    onFontWeight: it => FontWeight.toCss(it),
    onFontTracking: it => FontTracking.toCss(it),
    onFontSizeMultiplier: it => FontSizeMultiplier.toCss(it),
    onFontSize: it => FontSize.toCss(it),
    onLineHeight: it => LineHeight.toCss(it),
    onPct: it => Pct.toCss(it),
    onPt: it => Pt.toCss(it),
    onSp: it => Sp.toCss(it),
    onUi: it => Ui.toCss(it),
    onCircleRadius: it => CircleRadius.toCss(it),
    onRem: it => Rem.toCss(it),
    onPx: it => { throw new Error("Physical Pixel (Px) values are not supported in CSS") },
    onAsymmetricCornerRadius: it => AsymmetricCornerRadius.toCss(it),
  });
};

export const Value = {
  toCss,
};
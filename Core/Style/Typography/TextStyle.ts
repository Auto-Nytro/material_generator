import { 
  FontFamily, FontSize, FontTracking, 
  FontWeight, LineHeight, MaybeVar,
} from "@internal/prelude";

// TODO: Add an optional promninent weight property
export interface TextStyle {
  readonly family: MaybeVar<FontFamily>,
  readonly weight: MaybeVar<FontWeight>,
  readonly size: FontSize,
  readonly tracking: FontTracking,
  readonly lineHeight: LineHeight,
}
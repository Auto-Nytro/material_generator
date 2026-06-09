import { Vars, MaybeVar, Color, Dp, FocusIndicatorRef, ShapeRadii, ShapesRef } from "@internal/prelude";

export interface BottomSheet {
  readonly containerColor: MaybeVar<Color>,
  readonly modalContainerElevation: MaybeVar<Elevation>,
  readonly standardContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly minimizedContainerShape: MaybeVar<ShapeRadii>,
  readonly dragHandleColor: MaybeVar<Color>,
  readonly dragHandleWidth: Dp,
  readonly dragHandleHeight: Dp,
  readonly focusIndicatorColor: MaybeVar<Color>,
  readonly focusIndicatorThickness: MaybeVar<Dp>,
  readonly focusIndicatorOffset: MaybeVar<Dp>,
}

export const create = (): BottomSheet => {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainerLow(),
    modalContainerElevation: Vars.ElevationScheme.Level1(),
    standardContainerElevation: Vars.ElevationScheme.Level1(),
    containerShape: Vars.ShapeScheme.ExtraLargeTop(),
    minimizedContainerShape: Vars.ShapeScheme.None(),
    dragHandleColor: Vars.ColorScheme.OnSurfaceVariant(),
    dragHandleWidth: Dp.create(32),
    dragHandleHeight: Dp.create(4),
    focusIndicatorColor: Vars.ColorScheme.Secondary(),
    focusIndicatorThickness: Vars.FocusIndicator.Thickness(),
    focusIndicatorOffset: Vars.FocusIndicator.OuterOffset(),
  };
};
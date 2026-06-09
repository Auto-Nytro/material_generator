import { Vars, MaybeVar, Color, Dp, ShapeRadii, Elevation, Outline } from "@internal/prelude";

// Bottom sheets span the full window width up to 640dp. 
// When the window width exceeds 640dp, bottom sheets 
// adjust to have a top margin of 56dp and side margins
// of 56dp. 
//
// TODO: Add Drag handle alignment (horizontal)

export interface BottomSheet {
  readonly containerWidthMaximum: Dp,
  readonly containerMarginTop: Dp,
  readonly containerMarginTopAtMaximumWidth: Dp,
  readonly containerMarginHorizontalAtMaximumWidth: Dp,
  readonly containerShape: MaybeVar<ShapeRadii>,
  readonly containerShapeMinimized: MaybeVar<ShapeRadii>,
  readonly containerElevationModal: MaybeVar<Elevation>,
  readonly containerElevationStandard: MaybeVar<Elevation>,
  readonly containerColor: MaybeVar<Color>,
  readonly dragHandleColor: MaybeVar<Color>,
  readonly dragHandleWidth: Dp,
  readonly dragHandleHeight: Dp,
  readonly dragHandlePaddingVertical: Dp,
  readonly focusIndicator: MaybeVar<Outline>,
}

export const create = (): BottomSheet => ({
  containerMarginTop: Dp.create(72),
  containerMarginTopAtMaximumWidth: Dp.create(56),
  containerMarginHorizontalAtMaximumWidth: Dp.create(56),
  containerWidthMaximum: Dp.create(640),
  containerShape: Vars.ShapeScheme.ExtraLargeTop(),
  containerShapeMinimized: Vars.ShapeScheme.None(),
  containerElevationModal: Vars.ElevationScheme.Level1(),
  containerElevationStandard: Vars.ElevationScheme.Level1(),
  containerColor: Vars.ColorScheme.SurfaceContainerLow(),
  
  dragHandleColor: Vars.ColorScheme.OnSurfaceVariant(),
  dragHandleWidth: Dp.create(32),
  dragHandleHeight: Dp.create(4),
  dragHandlePaddingVertical: Dp.create(22),

  focusIndicator: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),
});

export const BottomSheet = {
  create,
};
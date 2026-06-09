import { Vars, MaybeVar, Color, Dp, Pct, ShapeRadii, TextStyle, Ui, Elevation, Opacity, Outline } from "@internal/prelude";

export interface SideSheet {
  readonly containerWidthDocked: Dp,
  readonly containerHeightDocked: Pct,

  readonly containerShapeDocked: MaybeVar<ShapeRadii>,
  readonly containerShapeDockedModal: MaybeVar<ShapeRadii>,
  readonly containerShapeDetached: MaybeVar<ShapeRadii>,

  readonly containerColorDockedModal: MaybeVar<Color>,
  readonly containerColorDockedStandard: MaybeVar<Color>,

  readonly containerElevationDockedModal: MaybeVar<Elevation>,
  readonly containerElevationDockedStandard: MaybeVar<Elevation>,
  
  readonly headlineStyleDocked: MaybeVar<TextStyle>,
  readonly headlineColorDocked: MaybeVar<Color>,

  readonly dividerColorDocked: MaybeVar<Color>,

  readonly focusIndicatorDocked: MaybeVar<Outline>,

  readonly actionLabelColorDockedHover: MaybeVar<Color>,
  readonly actionLabelColorDockedFocused: MaybeVar<Color>,
  readonly actionLabelColorDockedPressed: MaybeVar<Color>,

  readonly actionStateLayerColorDockedHover: MaybeVar<Color>,
  readonly actionStateLayerColorDockedFocused: MaybeVar<Color>,
  readonly actionStateLayerColorDockedPressed: MaybeVar<Color>,

  readonly actionStateLayerOpacityDockedHover: MaybeVar<Opacity>,
  readonly actionStateLayerOpacityDockedFocused: MaybeVar<Opacity>,
  readonly actionStateLayerOpacityDockedPressed: MaybeVar<Opacity>,
}

export const create = (): SideSheet => ({
  containerWidthDocked: Dp.create(256),
  containerHeightDocked: Pct.create(100),

  containerShapeDocked: Vars.ShapeScheme.None(),
  containerShapeDockedModal: Vars.ShapeScheme.LargeStart(),
  containerShapeDetached: Vars.ShapeScheme.Large(),

  containerColorDockedModal: Vars.ColorScheme.SurfaceContainerLow(),
  containerColorDockedStandard: Vars.ColorScheme.Surface(),

  containerElevationDockedModal: Vars.ElevationScheme.Level1(),
  containerElevationDockedStandard: Vars.ElevationScheme.Level0(),

  headlineStyleDocked: Vars.Typescale.TitleLarge(),
  headlineColorDocked: Vars.ColorScheme.OnSurfaceVariant(),

  dividerColorDocked: Vars.ColorScheme.Outline(),

  focusIndicatorDocked: Outline.create({
    color: Vars.ColorScheme.Secondary(),
    offset: Vars.FocusIndicator.OuterOffset(),
    thickness: Vars.FocusIndicator.Thickness(),
  }),

  actionLabelColorDockedHover: Vars.ColorScheme.Primary(),
  actionLabelColorDockedFocused: Vars.ColorScheme.Primary(),
  actionLabelColorDockedPressed: Vars.ColorScheme.Primary(),

  actionStateLayerColorDockedHover: Vars.ColorScheme.Primary(),
  actionStateLayerColorDockedFocused: Vars.ColorScheme.Primary(),
  actionStateLayerColorDockedPressed: Vars.ColorScheme.Primary(),

  actionStateLayerOpacityDockedHover: Vars.Opacities.Hovered(),
  actionStateLayerOpacityDockedFocused: Vars.Opacities.Focused(),
  actionStateLayerOpacityDockedPressed: Vars.Opacities.Pressed(),
});

export const SideSheet = {
  create,
};
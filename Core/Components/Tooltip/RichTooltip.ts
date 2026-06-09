import { Vars, MaybeVar, Color, ShapeRadii, TextStyle, Elevation, Opacity } from "@internal/prelude";

export interface RichTooltip {
  readonly containerColor: MaybeVar<Color>,
  readonly containerElevation: MaybeVar<Elevation>,
  readonly containerShadowColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly subheadStyle: MaybeVar<TextStyle>,
  readonly subheadColor: MaybeVar<Color>,

  readonly supportingTextStyle: MaybeVar<TextStyle>,
  readonly supportingTextColor: MaybeVar<Color>,

  readonly actionLabelStyle: MaybeVar<TextStyle>,
  readonly actionLabelColor: MaybeVar<Color>,
  readonly actionLabelColorHovered: MaybeVar<Color>,
  readonly actionLabelColorFocused: MaybeVar<Color>,
  readonly actionLabelColorPressed: MaybeVar<Color>,

  readonly actionStateLayerColorHovered: MaybeVar<Color>,
  readonly actionStateLayerColorFocused: MaybeVar<Color>,
  readonly actionStateLayerColorPressed: MaybeVar<Color>,

  readonly actionStateLayerOpacityHovered: MaybeVar<Opacity>,
  readonly actionStateLayerOpacityFocused: MaybeVar<Opacity>,
  readonly actionStateLayerOpacityPressed: MaybeVar<Opacity>,
}

export const create = (): RichTooltip => ({
  containerColor: Vars.ColorScheme.SurfaceContainer(),
  containerElevation: Vars.ElevationScheme.Level2(),
  containerShadowColor: Vars.ColorScheme.Shadow(),
  containerShape: Vars.ShapeScheme.Medium(),

  subheadStyle: Vars.Typescale.TitleSmall(),
  subheadColor: Vars.ColorScheme.OnSurfaceVariant(),

  supportingTextStyle: Vars.Typescale.BodyMedium(),
  supportingTextColor: Vars.ColorScheme.OnSurfaceVariant(),

  actionLabelStyle: Vars.Typescale.LabelLarge(),
  actionLabelColor: Vars.ColorScheme.Primary(),
  actionLabelColorHovered: Vars.ColorScheme.Primary(),
  actionLabelColorFocused: Vars.ColorScheme.Primary(),
  actionLabelColorPressed: Vars.ColorScheme.Primary(),

  actionStateLayerColorHovered: Vars.ColorScheme.Primary(),
  actionStateLayerColorFocused: Vars.ColorScheme.Primary(),
  actionStateLayerColorPressed: Vars.ColorScheme.Primary(),

  actionStateLayerOpacityHovered: Vars.Opacities.Hovered(),
  actionStateLayerOpacityFocused: Vars.Opacities.Focused(),
  actionStateLayerOpacityPressed: Vars.Opacities.Pressed(),
});

export const RichTooltip = {
  create,
};
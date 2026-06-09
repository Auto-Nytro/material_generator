import { Vars, MaybeVar, Color, Dp, ShapeRadii, ShapesRef, TextStyle, TypescaleRef, Ui } from "@internal/prelude";


export interface FullScreenDialog {
  readonly onScrollContainerColor: MaybeVar<Color>,
  readonly containerColor: MaybeVar<Color>,
  readonly ContainerElevation: MaybeVar<Elevation>,
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly headerContainerHeight: Dp,
  readonly headerContainerColor: MaybeVar<Color>,
  readonly headerContainerElevation: MaybeVar<Elevation>,
  readonly headerOnScrollContainerElevation: MaybeVar<Elevation>,

  readonly headerActionLabelStyle: MaybeVar<TextStyle>,
  readonly headerActionLabelColor: MaybeVar<Color>,

  readonly headerIconSize: Dp,
  readonly headerIconColor: MaybeVar<Color>,

  readonly headerHeadlineStyle: MaybeVar<TextStyle>,
  readonly headerHeadlineColor: MaybeVar<Color>,

  readonly headerActionHoverLabelColor: MaybeVar<Color>,
  readonly headerActionHoverStateLayerColor: MaybeVar<Color>,
  readonly headerActionHoverStateLayerOpacity: MaybeVar<Opacity>,

  readonly headerActionFocusedLabelColor: MaybeVar<Color>,
  readonly headerActionFocusedStateLayerColor: MaybeVar<Color>,
  readonly headerActionFocusedStateLayerOpacity: MaybeVar<Opacity>,

  readonly headerActionPressedLabelColor: MaybeVar<Color>,
  readonly headerActionPressedStateLayerColor: MaybeVar<Color>,
  readonly headerActionPressedStateLayerOpacity: MaybeVar<Opacity>,
}

export const create = (): FullScreenDialog => {
  return {
    onScrollContainerColor: Vars.ColorScheme.SurfaceContainer(),
    containerColor: Vars.ColorScheme.Surface(),
    ContainerElevation: Vars.ElevationScheme.Level0(),
    containerShape: Vars.ShapeScheme.None(),
    
    headerContainerHeight: Dp.create(56),
    headerContainerColor: Vars.ColorScheme.Surface(),
    headerContainerElevation: Vars.ElevationScheme.Level0(),
    headerOnScrollContainerElevation: Vars.ElevationScheme.Level2(),

    headerActionLabelStyle: Vars.Typescale.LabelLarge(),
    headerActionLabelColor: Vars.ColorScheme.Primary(),

    headerIconSize: Dp.create(24),
    headerIconColor: Vars.ColorScheme.OnSurface(),

    headerHeadlineStyle: Vars.Typescale.TitleLarge(),
    headerHeadlineColor: Vars.ColorScheme.OnSurface(),

    headerActionHoverLabelColor: Vars.ColorScheme.Primary(),
    headerActionHoverStateLayerColor: Vars.ColorScheme.Primary(),
    headerActionHoverStateLayerOpacity: Vars.Opacities.Hovered(),

    headerActionFocusedLabelColor: Vars.ColorScheme.Primary(),
    headerActionFocusedStateLayerColor: Vars.ColorScheme.Primary(),
    headerActionFocusedStateLayerOpacity: Vars.Opacities.Focused(),

    headerActionPressedLabelColor: Vars.ColorScheme.Primary(),
    headerActionPressedStateLayerColor: Vars.ColorScheme.Primary(),
    headerActionPressedStateLayerOpacity: Vars.Opacities.Pressed(),
  }
};
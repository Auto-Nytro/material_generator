import { Vars, MaybeVar, Color, ShapeRadii, ShapesRef, Ui } from "@internal/prelude";

export interface VibrantToolbar {
  readonly containerColor: MaybeVar<Color>,
  readonly buttonContainerColor: MaybeVar<Color>,
  readonly selectedButtonContainerColor: MaybeVar<Color>,
  readonly iconColor: MaybeVar<Color>,
  readonly selectedIconColor: MaybeVar<Color>,
  readonly labelColor: MaybeVar<Color>,
  readonly selectedLabelColor: MaybeVar<Color>,
  readonly containerShape: MaybeVar<ShapeRadii>,

  readonly disabledIconColor: MaybeVar<Color>,
  readonly disabledIconOpacity: MaybeVar<Opacity>,
  readonly disabledLabelColor: MaybeVar<Color>,
  readonly disabledLabelOpacity: MaybeVar<Opacity>,

  readonly hoveredStateLayerColor: MaybeVar<Color>,
  readonly selectedHoveredStateLayerColor: MaybeVar<Color>,
  readonly hoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly hoveredIconColor: MaybeVar<Color>,
  readonly selectedHoveredIconColor: MaybeVar<Color>,
  readonly hoveredLabelColor: MaybeVar<Color>,
  readonly selectedHoveredLabelColor: MaybeVar<Color>,

  readonly focusedStateLayerColor: MaybeVar<Color>,
  readonly selectedFocusedStateLayerColor: MaybeVar<Color>,
  readonly focusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly focusedIconColor: MaybeVar<Color>,
  readonly selectedFocusedIconColor: MaybeVar<Color>,
  readonly focusedLabelColor: MaybeVar<Color>,
  readonly selectedFocusedLabelColor: MaybeVar<Color>,

  readonly pressedStateLayerColor: MaybeVar<Color>,
  readonly selectedPressedStateLayerColor: MaybeVar<Color>,
  readonly pressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly pressedIconColor: MaybeVar<Color>,
  readonly selectedPressedIconColor: MaybeVar<Color>,
  readonly pressedLabelColor: MaybeVar<Color>,
  readonly selectedPressedLabelColor: MaybeVar<Color>,
}

export const create = (): VibrantToolbar => {
  return {
    containerColor: Vars.ColorScheme.PrimaryContainer(),
    buttonContainerColor: Vars.ColorScheme.PrimaryContainer(),
    selectedButtonContainerColor: Vars.ColorScheme.SurfaceContainer(),
    iconColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedIconColor: Vars.ColorScheme.OnSurface(),
    labelColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedLabelColor: Vars.ColorScheme.OnSurface(),
    containerShape: Vars.ShapeScheme.Full(),

    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),
    disabledLabelColor: Vars.ColorScheme.OnSurface(),
    disabledLabelOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedHoveredStateLayerColor: Vars.ColorScheme.OnSurface(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedHoveredIconColor: Vars.ColorScheme.OnSurface(),
    hoveredLabelColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedHoveredLabelColor: Vars.ColorScheme.OnSurface(),

    focusedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.OnSurface(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedFocusedIconColor: Vars.ColorScheme.OnSurface(),
    focusedLabelColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedFocusedLabelColor: Vars.ColorScheme.OnSurface(),

    pressedStateLayerColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedPressedStateLayerColor: Vars.ColorScheme.OnSurface(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedPressedIconColor: Vars.ColorScheme.OnSurface(),
    pressedLabelColor: Vars.ColorScheme.OnPrimaryContainer(),
    selectedPressedLabelColor: Vars.ColorScheme.OnSurface(),
  };
};
import { Vars, MaybeVar, Color, ShapeRadii, ShapesRef, Ui } from "@internal/prelude";

export interface StandardToolbar {
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

export const create = (): StandardToolbar => {
  return {
    containerColor: Vars.ColorScheme.SurfaceContainer(),
    buttonContainerColor: Vars.ColorScheme.SurfaceContainer(),
    selectedButtonContainerColor: Vars.ColorScheme.SecondaryContainer(),
    iconColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    labelColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedLabelColor: Vars.ColorScheme.OnSecondaryContainer(),
    containerShape: Vars.ShapeScheme.Full(),

    disabledIconColor: Vars.ColorScheme.OnSurface(),
    disabledIconOpacity: Ui.create(0.38),
    disabledLabelColor: Vars.ColorScheme.OnSurface(),
    disabledLabelOpacity: Ui.create(0.38),

    hoveredStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    hoveredIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedHoveredIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    hoveredLabelColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedHoveredLabelColor: Vars.ColorScheme.OnSecondaryContainer(),

    focusedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedFocusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedStateLayerOpacity: Vars.Opacities.Focused(),
    focusedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedFocusedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    focusedLabelColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedFocusedLabelColor: Vars.ColorScheme.OnSecondaryContainer(),

    pressedStateLayerColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedPressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedStateLayerOpacity: Vars.Opacities.Pressed(),
    pressedIconColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedPressedIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    pressedLabelColor: Vars.ColorScheme.OnSurfaceVariant(),
    selectedPressedLabelColor: Vars.ColorScheme.OnSecondaryContainer(),
  };
};
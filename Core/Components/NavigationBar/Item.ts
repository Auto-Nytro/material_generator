import { Vars, MaybeVar, Dp, Color, Ui, ShapesRef, ShapeRadii } from "@internal/prelude";

export interface NavigationBarItem {
  readonly indicatorColor: MaybeVar<Color>,
  readonly activeLabelColor: MaybeVar<Color>,
  readonly inactiveLabelColor: MaybeVar<Color>,
  readonly activeIconColor: MaybeVar<Color>,
  readonly inactiveIconColor: MaybeVar<Color>,

  readonly activeHoveredStateLayerColor: MaybeVar<Color>,
  readonly activeHoveredStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactiveHoveredStateLayerColor: MaybeVar<Color>,

  readonly activeFocusedStateLayerColor: MaybeVar<Color>,
  readonly activeFocusedStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactiveFocusedStateLayerColor: MaybeVar<Color>,

  readonly activePressedStateLayerColor: MaybeVar<Color>,
  readonly activePressedStateLayerOpacity: MaybeVar<Opacity>,
  readonly inactivePressedStateLayerColor: MaybeVar<Color>,

  readonly shape: MaybeVar<ShapeRadii>,
  readonly spaceBetweenIconLabel: Dp,

  readonly iconSize: Dp,
}

export const create = (): NavigationBarItem => {
  return {
    indicatorColor: Vars.ColorScheme.SecondaryContainer(),
    activeLabelColor: Vars.ColorScheme.Secondary(),
    inactiveLabelColor: Vars.ColorScheme.OnSurfaceVariant(),
    activeIconColor: Vars.ColorScheme.OnSecondaryContainer(),
    inactiveIconColor: Vars.ColorScheme.OnSurfaceVariant(),
  
    activeHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    activeHoveredStateLayerOpacity: Vars.Opacities.Hovered(),
    inactiveHoveredStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
  
    activeFocusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    activeFocusedStateLayerOpacity: Vars.Opacities.Hovered(),
    inactiveFocusedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
  
    activePressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),
    activePressedStateLayerOpacity: Vars.Opacities.Pressed(),
    inactivePressedStateLayerColor: Vars.ColorScheme.OnSecondaryContainer(),

    shape: Vars.ShapeScheme.Full(),
    spaceBetweenIconLabel: Dp.create(4),
    iconSize: Dp.create(24),
  };
};
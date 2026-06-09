import { Vars, MaybeVar, Color, Dp, ShapeRadii, TextStyle, Ui, AsymmetricCornerRadius, Opacity } from "@internal/prelude";

// TODO: Split individual component styles

export interface SliderStyle {
  readonly stopIndicatorSize: Dp,
  readonly stopIndicatorShape: MaybeVar<ShapeRadii>,
  readonly stopIndicatorTrailingSpace: Dp,
  readonly stopIndicatorColor: MaybeVar<Color>,
  readonly stopIndicatorColorSelected: MaybeVar<Color>,
  readonly activeStopIndicatorContainerColor: MaybeVar<Color>,
  readonly activeStopIndicatorContainerOpacity: MaybeVar<Opacity>
  readonly inactiveStopIndicatorContainerColor: MaybeVar<Color>,
  readonly inactiveStopIndicatorContainerOpacity: MaybeVar<Opacity>
  readonly activeTrackHeight: Dp,
  readonly inactiveTrackHeight: Dp,
  readonly activeTrackShape: MaybeVar<ShapeRadii>,
  readonly activeTrackOuterCornerSize: MaybeVar<ShapeRadii>,
  readonly activeTrackInnerCornerSize: AsymmetricCornerRadius,
  readonly inactiveTrackShape: MaybeVar<ShapeRadii>,
  readonly activeTrackColor: MaybeVar<Color>,
  readonly inactiveTrackColor: MaybeVar<Color>,
  readonly handleHeight: Dp,
  readonly handleWidth: Dp,
  readonly handleShape: MaybeVar<ShapeRadii>,
  readonly handleColor: MaybeVar<Color>,
  readonly activeHandleColor: MaybeVar<Color>,
  readonly activeHandleHeight: Dp,
  readonly activeHandleWidth: Dp,
  readonly activeHandleShape: MaybeVar<ShapeRadii>,
  readonly activeHandleLeadingSpace: Dp,
  readonly activeHandleTrailingSpace: Dp,
  readonly activeHandlePadding: Dp,
  readonly disabledActiveStopIndicatorContainerColor: MaybeVar<Color>,
  readonly disabledInactiveStopIndicatorContainerColor: MaybeVar<Color>,
  readonly disabledActiveTrackColor: MaybeVar<Color>,
  readonly disabledActiveTrackOpacity: MaybeVar<Opacity>
  readonly disabledInactiveTrackColor: MaybeVar<Color>,
  readonly disabledInactiveTrackOpacity: MaybeVar<Opacity>
  readonly disabledHandleColor: MaybeVar<Color>,
  readonly disabledHandleOpacity: MaybeVar<Opacity>
  readonly disabledHandleWidth: Dp,
  readonly hoverHandleWidth: Dp,
  readonly focusActiveTrackColor: MaybeVar<Color>,
  readonly focusInactiveTrackColor: MaybeVar<Color>,
  readonly focusHandleWidth: Dp,
  readonly pressedHandleColor: MaybeVar<Color>,
  readonly pressedHandleWidth: Dp,
  readonly pressedActiveTrackColor: MaybeVar<Color>,
  readonly pressedInactiveTrackColor: MaybeVar<Color>,
  readonly valueIndicatorContainerColor: MaybeVar<Color>,
  readonly valueIndicatorLabelStyle: MaybeVar<TextStyle>,
  readonly valueIndicatorActiveBottomSpace: Dp,
}

export const createM = (): SliderStyle => {
  return {
    stopIndicatorSize: Dp.create(4),
    stopIndicatorShape: Vars.ShapeScheme.Full(),
    stopIndicatorTrailingSpace: Dp.create(4),
    stopIndicatorColor: Vars.ColorScheme.OnSecondaryContainer(),
    stopIndicatorColorSelected: Vars.ColorScheme.OnPrimary(),
    activeStopIndicatorContainerColor: Vars.ColorScheme.OnPrimary(),
    activeStopIndicatorContainerOpacity: Ui.create(1),
    inactiveStopIndicatorContainerColor: Vars.ColorScheme.OnSecondaryContainer(),
    inactiveStopIndicatorContainerOpacity: Ui.create(1),
    activeTrackHeight: Dp.create(16),
    inactiveTrackHeight: Dp.create(16),
    activeTrackShape: Vars.ShapeScheme.Full(),
    activeTrackOuterCornerSize: Vars.ShapeScheme.Full(),
    activeTrackInnerCornerSize: AsymmetricCornerRadius.create({
      vertical: Dp.create(2), 
      horizontal: Dp.create(2) 
    }),
    inactiveTrackShape: Vars.ShapeScheme.Full(),
    activeTrackColor: Vars.ColorScheme.Primary(),
    inactiveTrackColor: Vars.ColorScheme.SecondaryContainer(),
    handleHeight: Dp.create(44),
    handleWidth: Dp.create(4),
    handleShape: Vars.ShapeScheme.Full(),
    handleColor: Vars.ColorScheme.Primary(),
    activeHandleColor: Vars.ColorScheme.Primary(),
    activeHandleHeight: Dp.create(44),
    activeHandleWidth: Dp.create(4),
    activeHandleShape: Vars.ShapeScheme.Full(),
    activeHandleLeadingSpace: Dp.create(6),
    activeHandleTrailingSpace: Dp.create(6),
    activeHandlePadding: Dp.create(6),
    disabledActiveStopIndicatorContainerColor: Vars.ColorScheme.InverseOnSurface(),
    disabledInactiveStopIndicatorContainerColor: Vars.ColorScheme.OnSurface(),
    disabledActiveTrackColor: Vars.ColorScheme.OnSurface(),
    disabledActiveTrackOpacity: Ui.create(0.38),
    disabledInactiveTrackColor: Vars.ColorScheme.OnSurface(),
    disabledInactiveTrackOpacity: Ui.create(0.12),
    disabledHandleColor: Vars.ColorScheme.OnSurface(),
    disabledHandleOpacity: Ui.create(0.38),
    disabledHandleWidth: Dp.create(4),
    hoverHandleWidth: Dp.create(4),
    focusActiveTrackColor: Vars.ColorScheme.Primary(),
    focusInactiveTrackColor: Vars.ColorScheme.SecondaryContainer(),
    focusHandleWidth: Dp.create(2),
    pressedHandleColor: Vars.ColorScheme.Primary(),
    pressedHandleWidth: Dp.create(2),
    pressedActiveTrackColor: Vars.ColorScheme.Primary(),
    pressedInactiveTrackColor: Vars.ColorScheme.SecondaryContainer(),
    valueIndicatorContainerColor: Vars.ColorScheme.InverseSurface(),
    valueIndicatorLabelStyle: Vars.Typescale.LabelLarge(),
    valueIndicatorActiveBottomSpace: Dp.create(12),
  };
};

export interface Slider {
  /** -------------------
   *  Handle
   *  ------------------- */
  readonly handleWidth: MaybeVar<Dp>,
  readonly handleWidthActive: MaybeVar<Dp>,
  readonly handleWidthDisabled: MaybeVar<Dp>,
  readonly handleWidthHovered: MaybeVar<Dp>,
  readonly handleWidthFocused: MaybeVar<Dp>,
  readonly handleWidthPressed: MaybeVar<Dp>,

  readonly handleHeight: MaybeVar<Dp>,
  readonly handleHeightActive: MaybeVar<Dp>,

  readonly handleShape: MaybeVar<ShapeRadii>,
  readonly handleShapeActive: MaybeVar<ShapeRadii>,

  readonly handleSpaceLeadingActive: MaybeVar<Dp>,
  readonly handleSpaceTrailingActive: MaybeVar<Dp>,
  
  readonly handlePaddingActive: MaybeVar<Dp>,

  readonly handleColor: MaybeVar<Color>,
  readonly handleColorActive: MaybeVar<Color>,
  readonly handleColorDisabled: MaybeVar<Color>,
  readonly handleColorPressed: MaybeVar<Color>,

  readonly handleOpacityDisabled: MaybeVar<Opacity>,

  /** -------------------
   *  Value Indicator
   *  ------------------- */
  readonly valueIndicatorContainerColor: MaybeVar<Color>,
  readonly valueIndicatorLabelStyle: MaybeVar<TextStyle>,
  readonly valueIndicatorSpaceBottomActive: MaybeVar<Dp>,

  /** -------------------
   *  Stop Indicator
   *  ------------------- */
  readonly stopIndicatorSize: MaybeVar<Dp>,
  readonly stopIndicatorShape: MaybeVar<ShapeRadii>,
  readonly stopIndicatorSpaceTrailing: MaybeVar<Dp>,

  // TODO: Verify if these tokens are 
  readonly stopIndicatorColor: MaybeVar<Color>,
  readonly stopIndicatorColorSelected: MaybeVar<Color>,

  readonly stopIndicatorContainerColorActive: MaybeVar<Color>,
  readonly stopIndicatorContainerColorInactive: MaybeVar<Color>,
  readonly stopIndicatorContainerColorDisabledActive: MaybeVar<Color>,
  readonly stopIndicatorContainerColorDisabledInactive: MaybeVar<Color>,

  readonly stopIndicatorContainerOpacityActive: MaybeVar<Opacity>,
  readonly stopIndicatorContainerOpacityInactive: MaybeVar<Opacity>,

  /** -------------------
   *  Active Track
   *  ------------------- */
  readonly activeTrackHeight: MaybeVar<Dp>,
  
  readonly activeTrackShape: MaybeVar<ShapeRadii>,
  
  readonly activeTrackOuterCornerSize: MaybeVar<ShapeRadii>,
  readonly activeTrackInnerCornerSize: MaybeVar<AsymmetricCornerRadius>,
  
  readonly activeTrackColor: MaybeVar<Color>,
  readonly activeTrackColorDisabled: MaybeVar<Color>,
  readonly activeTrackColorFocused: MaybeVar<Color>,
  readonly activeTrackColorPressed: MaybeVar<Color>,

  readonly activeTrackOpacityDisabled: MaybeVar<Opacity>,

  /** -------------------
   *  Inactive Track
   *  ------------------- */
  readonly inactiveTrackHeight: MaybeVar<Dp>,

  readonly inactiveTrackShape: MaybeVar<ShapeRadii>,

  readonly inactiveTrackColor: MaybeVar<Color>,
  readonly inactiveTrackColorDisabled: MaybeVar<Color>,
  readonly inactiveTrackColorFocused: MaybeVar<Color>,
  readonly inactiveTrackColorPressed: MaybeVar<Color>,

  readonly inactiveTrackOpacityDisabled: MaybeVar<Opacity>,
}

export const create = () => ({
  handleWidth: Dp.create(4),
  handleWidthActive: Dp.create(4),
  handleWidthDisabled: Dp.create(4),
  handleWidthHovered: Dp.create(4),
  handleWidthFocused: Dp.create(2),
  handleWidthPressed: Dp.create(2),

  handleHeight: Dp.create(44),
  handleHeightActive: Dp.create(44),

  handleShape: Vars.ShapeScheme.Full(),
  handleShapeActive: Vars.ShapeScheme.Full(),

  handleSpaceLeadingActive: Dp.create(6),
  handleSpaceTrailingActive: Dp.create(6),
  
  handlePaddingActive: Dp.create(6),

  handleColor: Vars.ColorScheme.Primary(),
  handleColorActive: Vars.ColorScheme.Primary(),
  handleColorDisabled: Vars.ColorScheme.OnSurface(),
  handleColorPressed: Vars.ColorScheme.Primary(),

  handleOpacityDisabled: Ui.create(0.38),

  valueIndicatorContainerColor: Vars.ColorScheme.InverseSurface(),
  valueIndicatorLabelStyle: Vars.Typescale.LabelLarge(),
  valueIndicatorSpaceBottomActive: Dp.create(12),

  stopIndicatorSize: Dp.create(4),
  stopIndicatorShape: Vars.ShapeScheme.Full(),
  stopIndicatorSpaceTrailing: Dp.create(4),
  stopIndicatorColor: Vars.ColorScheme.OnSecondaryContainer(),
  stopIndicatorColorSelected: Vars.ColorScheme.OnPrimary(),
  stopIndicatorContainerColorActive: Vars.ColorScheme.OnPrimary(),
  stopIndicatorContainerColorInactive: Vars.ColorScheme.OnSecondaryContainer(),
  stopIndicatorContainerColorDisabledActive: Vars.ColorScheme.InverseOnSurface(),
  stopIndicatorContainerColorDisabledInactive: Vars.ColorScheme.OnSurface(),
  stopIndicatorContainerOpacityActive: Ui.create(1),
  stopIndicatorContainerOpacityInactive: Ui.create(1),

  activeTrackHeight: Dp.create(16),
  activeTrackShape: Vars.ShapeScheme.Full(),
  activeTrackOuterCornerSize: Vars.ShapeScheme.Full(),
  activeTrackInnerCornerSize: AsymmetricCornerRadius.Uniform(Dp.create(2)),
  activeTrackColor: Vars.ColorScheme.Primary(),
  activeTrackColorDisabled: Vars.ColorScheme.OnSurface(),
  activeTrackColorFocused: Vars.ColorScheme.Primary(),
  activeTrackColorPressed: Vars.ColorScheme.Primary(),
  activeTrackOpacityDisabled: Ui.create(0.38),

  inactiveTrackHeight: Dp.create(16),
  inactiveTrackShape: Vars.ShapeScheme.Full(),
  inactiveTrackColor: Vars.ColorScheme.SecondaryContainer(),
  inactiveTrackColorDisabled: Vars.ColorScheme.OnSurface(),
  inactiveTrackColorFocused: Vars.ColorScheme.SecondaryContainer(),
  inactiveTrackColorPressed: Vars.ColorScheme.SecondaryContainer(),
  inactiveTrackOpacityDisabled: Ui.create(0.12),
});

export const Slider = {
  create,
};
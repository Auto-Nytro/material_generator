import { M } from "@internal/css";

const ColorWithOpacity = null as any;
const withAlpha = (it: any, other: any): any => {};

export class Stylesheet {
  forClass(cssClass: string): Style { return new Style(); }
  forSelector(selector: string): Style { return new Style(); }
}

export class Style {
  backgroundColor(color: M.MaybeVar<M.Color>): Style { return this; }
  backgroundColorTranslucent(color: M.MaybeVar<M.Color>, alpha: any): Style { return this; }
  color(color: M.MaybeVar<M.Color>): Style { return this; }
  shadowColor(value: any): Style { return this; }
  shadowElevation(shadowColor: any, elevationLevel: any): Style { return this; }
  elevationLevel(elevationLevel: any): Style { return this; }
  
  stateLayer(color: any, opacity: any): Style { return this; }
  stateLayerColor(color: any): Style { return this; }
  stateLayerOpacity(color: any): Style { return this; }
  var(name: string, value: any): Style { return this; }

  forVariant(cssClass: string): Style { return new Style(); }
  forHovered(): Style { return new Style(); }
  forFocused(): Style { return new Style() }
  forPressed(): Style { return new Style(); }
  forDisabled(): Style { return new Style(); }

  onVariant(x: string, styler: (style: Style) => void): Style { return this; }
  onHovered(styler: (style: Style) => void): Style { return this; }
  onFocused(styler: (style: Style) => void): Style { return this; }
  onPressed(styler: (style: Style) => void): Style { return this; }
  onDisabled(styler: (style: Style) => void): Style { return this; }
  on({}: {
    normal?: (style: Style) => void,
    hovered?: (style: Style) => void,
    pressed?: (style: Style) => void,
    focused?: (style: Style) => void,
    disabled?: (style: Style) => void,
  }): Style { return this; }
}

export interface Context {
  readonly style: {
    filledButton: M.FilledButton,
    elevation: M.ElevationScheme,
  }
  readonly vars: {
    readonly colorPalette: Record<string, { name: string, value: string }>,
    readonly colorScheme: Record<string, { name: string, value: string }>,
    readonly opacities: Record<string, { name: string, value: string }>,
    readonly shadowElevation: Record<string, { name: string, value: string }>,
    readonly focusIndicator: Record<string, { name: string, value: string }>,
    readonly shapes: Record<string, { name: string, value: string }>,
    readonly springs: Record<string, { name: string, value: string }>,
    readonly elevation0: string,
    readonly elevation1: string,
    readonly elevation2: string,
    readonly elevation3: string,
    readonly elevation4: string,
    readonly elevation5: string,
  }
  readonly classes: {
    readonly buttonFilled: string,
    readonly buttonFilledLabel: string,
    readonly buttonFilledElevation: string,
    readonly buttonFilledUnselected: string,
    readonly buttonFilledUnselectedLabel: string,
    readonly buttonFilledSelectedLabel: string,
    readonly buttonFilledSelected: string,
  },
}

const writeElevationFor = (
  context: Context,
  stylesheet: Stylesheet,
  selector: string,
) => {};

const writeElevation = (
  context: Context,
  stylesheet: Stylesheet,
) => {
  stylesheet
    .forSelector(":host")
    .var(context.vars.elevation0, "")
    .var(context.vars.elevation1, "")
    .var(context.vars.elevation2, "")
    .var(context.vars.elevation3, "")
    .var(context.vars.elevation4, "")
    .var(context.vars.elevation5, "")
};

const writeTonalButton = (
  context: Context,
  stylesheet: Stylesheet,
) => {
  const style = context.style.filledButton;

  stylesheet.forClass("btn-tonal")
    .onDisabled(s => s.backgroundColorTranslucent(
      style.containerColorDisabled, 
      style.containerOpacityDisabled,
    ))
    .shadowColor(style.containerShadowColor)
    .on({
      normal: s => s.elevationLevel(style.containerElevation),
      pressed: s => s.elevationLevel(style.containerElevationPressed),
      focused: s => s.elevationLevel(style.containerElevationFocused),
      disabled: s => s.elevationLevel(style.containerElevationDisabled),
    })
    .on({
      pressed: s => s.stateLayerOpacity(style.stateLayerOpacityPressed),
      hovered: s => s.stateLayerOpacity(style.stateLayerOpacityHovered),
      focused: s => s.stateLayerOpacity(style.stateLayerOpacityFocused),
    })
    .onVariant("regular", s => s 
      .backgroundColor(style.containerColor)
      .on({
        pressed: s => s.stateLayerColor(style.stateLayerColorPressed),
        hovered: s => s.stateLayerColor(style.stateLayerColorHovered),
        focused: s => s.stateLayerColor(style.stateLayerColorFocused),
      })
    )
    .onVariant("toggle", s => s
      .onVariant("unselected", s => s 
        .backgroundColor(style.containerColorUnselected)
        .on({
          pressed: s => s.stateLayerColor(style.stateLayerColorUnselectedPressed),
          hovered: s => s.stateLayerColor(style.stateLayerColorUnselectedHovered),
          focused: s => s.stateLayerColor(style.stateLayerColorUnselectedFocused),
        })
      )
      .onVariant("selected", s => s
        .backgroundColor(style.containerColorSelected)
        .on({
          pressed: s => s.stateLayerColor(style.stateLayerColorSelectedPressed),
          hovered: s => s.stateLayerColor(style.stateLayerColorSelectedHovered),
          focused: s => s.stateLayerColor(style.stateLayerColorSelectedFocused),
        })
      )
    )
};

const writeTonalButtonLabel = (
  context: Context,
  stylesheet: Stylesheet,
) => {
  const m = context.style.filledButton;
  const n = stylesheet.forClass(context.classes.buttonFilledLabel);
  const d = n.forDisabled();
  const p = n.forPressed();
  const h = n.forHovered();
  const f = n.forFocused();
};
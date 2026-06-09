import { Color, FontFamily, FontSize, FontTracking, FontWeight, ShapeRadii, TextStyle, Ui } from "@internal/prelude";

export interface StyleBlock {

}

const create = (selector: string): StyleBlock => {};

const createVar = (
  it: StyleBlock,
  name: string, 
  value: string,
) => {};

export const StyleBlock = {
  var: createVar,
  create,
};

export class Stylesheet {
  forClass(cssClass: string) {
    return new Style();
  }
  forSelector(cssClass: string) {
    return new Style();
  }
}

export class Style {
  hovered() {
    return new Style();
  }
  pressed() {
    return new Style();
  }
  focused() {
    return new Style();
  }
  disabled() {
    return new Style();
  }
  extend(cssClass: string) {}

  backgroundColor(value: Color) {}
  color(value: Color) {}
  opacity(value: Ui) {}
  fontSize(value: FontSize) {}
  fontFamily(value: FontFamily) {}
  fontWeight(value: FontWeight) {}
  letterSpacing(value: FontTracking) {}
  borderRadius(value: ShapeRadii) {}

  var(name: string, value: string): Style {}
}
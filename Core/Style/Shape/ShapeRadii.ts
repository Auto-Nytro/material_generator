import { CornerRadius, MaybeVar, Vars } from "@internal/prelude";

export interface ShapeRadii {
  readonly tl: MaybeVar<CornerRadius>,
  readonly tr: MaybeVar<CornerRadius>,
  readonly bl: MaybeVar<CornerRadius>,
  readonly br: MaybeVar<CornerRadius>,
}

export const All = (value: MaybeVar<CornerRadius>): ShapeRadii => {
  return {
    bl: value,
    br: value,
    tl: value,
    tr: value,
  };
};


export const Top = ({ 
  left, 
  right,
}: {
  left: MaybeVar<CornerRadius>, 
  right: MaybeVar<CornerRadius>
}): ShapeRadii => {
  return {
    tl: left,
    tr: right,
    bl: Vars.CornerRadii.None(),
    br: Vars.CornerRadii.None(),
  };
};

export const TopUniform = (cornerRadius: MaybeVar<CornerRadius>): ShapeRadii => {
  return {
    tl: cornerRadius,
    tr: cornerRadius,
    bl: Vars.CornerRadii.None(),
    br: Vars.CornerRadii.None(),
  };
};

export const ShapeRadii = {
  All,
  Top,
  TopUniform,
};
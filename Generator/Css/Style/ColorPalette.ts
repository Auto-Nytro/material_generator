import { M, ColorPaletteOptions, Value, Writer, ColorPaletteVars } from "@internal/css";
import { Color, Material, MaybeVar } from "@internal/prelude";
import { Stylesheet } from "../Css/StyleBlock";

export class ColorPalette {
  private constructor(
    readonly palette: M.ColorPalette,
    readonly vars: ColorPaletteVars,
  ) {}

  write(stylesheet: Stylesheet) {
    const { vars, palette } = this;

    stylesheet
      .forSelector(":host")
      .var(vars.black, Value.toCss(palette.black))
      .var(vars.error0, Value.toCss(palette.error0))
      .var(vars.error10, Value.toCss(palette.error10))
      .var(vars.error100, Value.toCss(palette.error100))
      .var(vars.error20, Value.toCss(palette.error20))
      .var(vars.error30, Value.toCss(palette.error30))
      .var(vars.error40, Value.toCss(palette.error40))
      .var(vars.error50, Value.toCss(palette.error50))
      .var(vars.error60, Value.toCss(palette.error60))
      .var(vars.error70, Value.toCss(palette.error70))
      .var(vars.error80, Value.toCss(palette.error80))
      .var(vars.error90, Value.toCss(palette.error90))
      .var(vars.error95, Value.toCss(palette.error95))
      .var(vars.error99, Value.toCss(palette.error99))
      .var(vars.neutralVariant0, Value.toCss(palette.neutralVariant0))
      .var(vars.neutralVariant10, Value.toCss(palette.neutralVariant10))
      .var(vars.neutralVariant100, Value.toCss(palette.neutralVariant100))
      .var(vars.neutralVariant20, Value.toCss(palette.neutralVariant20))
      .var(vars.neutralVariant30, Value.toCss(palette.neutralVariant30))
      .var(vars.neutralVariant40, Value.toCss(palette.neutralVariant40))
      .var(vars.neutralVariant50, Value.toCss(palette.neutralVariant50))
      .var(vars.neutralVariant60, Value.toCss(palette.neutralVariant60))
      .var(vars.neutralVariant70, Value.toCss(palette.neutralVariant70))
      .var(vars.neutralVariant80, Value.toCss(palette.neutralVariant80))
      .var(vars.neutralVariant90, Value.toCss(palette.neutralVariant90))
      .var(vars.neutralVariant95, Value.toCss(palette.neutralVariant95))
      .var(vars.neutralVariant99, Value.toCss(palette.neutralVariant99))
      .var(vars.neutral0, Value.toCss(palette.neutral0))
      .var(vars.neutral10, Value.toCss(palette.neutral10))
      .var(vars.neutral100, Value.toCss(palette.neutral100))
      .var(vars.neutral12, Value.toCss(palette.neutral12))
      .var(vars.neutral17, Value.toCss(palette.neutral17))
      .var(vars.neutral20, Value.toCss(palette.neutral20))
      .var(vars.neutral22, Value.toCss(palette.neutral22))
      .var(vars.neutral24, Value.toCss(palette.neutral24))
      .var(vars.neutral30, Value.toCss(palette.neutral30))
      .var(vars.neutral4, Value.toCss(palette.neutral4))
      .var(vars.neutral40, Value.toCss(palette.neutral40))
      .var(vars.neutral50, Value.toCss(palette.neutral50))
      .var(vars.neutral6, Value.toCss(palette.neutral6))
      .var(vars.neutral60, Value.toCss(palette.neutral60))
      .var(vars.neutral70, Value.toCss(palette.neutral70))
      .var(vars.neutral80, Value.toCss(palette.neutral80))
      .var(vars.neutral87, Value.toCss(palette.neutral87))
      .var(vars.neutral90, Value.toCss(palette.neutral90))
      .var(vars.neutral92, Value.toCss(palette.neutral92))
      .var(vars.neutral94, Value.toCss(palette.neutral94))
      .var(vars.neutral95, Value.toCss(palette.neutral95))
      .var(vars.neutral96, Value.toCss(palette.neutral96))
      .var(vars.neutral98, Value.toCss(palette.neutral98))
      .var(vars.neutral99, Value.toCss(palette.neutral99))
      .var(vars.primary0, Value.toCss(palette.primary0))
      .var(vars.primary10, Value.toCss(palette.primary10))
      .var(vars.primary100, Value.toCss(palette.primary100))
      .var(vars.primary20, Value.toCss(palette.primary20))
      .var(vars.primary30, Value.toCss(palette.primary30))
      .var(vars.primary40, Value.toCss(palette.primary40))
      .var(vars.primary50, Value.toCss(palette.primary50))
      .var(vars.primary60, Value.toCss(palette.primary60))
      .var(vars.primary70, Value.toCss(palette.primary70))
      .var(vars.primary80, Value.toCss(palette.primary80))
      .var(vars.primary90, Value.toCss(palette.primary90))
      .var(vars.primary95, Value.toCss(palette.primary95))
      .var(vars.primary99, Value.toCss(palette.primary99))
      .var(vars.secondary0, Value.toCss(palette.secondary0))
      .var(vars.secondary10, Value.toCss(palette.secondary10))
      .var(vars.secondary100, Value.toCss(palette.secondary100))
      .var(vars.secondary20, Value.toCss(palette.secondary20))
      .var(vars.secondary30, Value.toCss(palette.secondary30))
      .var(vars.secondary40, Value.toCss(palette.secondary40))
      .var(vars.secondary50, Value.toCss(palette.secondary50))
      .var(vars.secondary60, Value.toCss(palette.secondary60))
      .var(vars.secondary70, Value.toCss(palette.secondary70))
      .var(vars.secondary80, Value.toCss(palette.secondary80))
      .var(vars.secondary90, Value.toCss(palette.secondary90))
      .var(vars.secondary95, Value.toCss(palette.secondary95))
      .var(vars.secondary99, Value.toCss(palette.secondary99))
      .var(vars.tertiary0, Value.toCss(palette.tertiary0))
      .var(vars.tertiary10, Value.toCss(palette.tertiary10))
      .var(vars.tertiary100, Value.toCss(palette.tertiary100))
      .var(vars.tertiary20, Value.toCss(palette.tertiary20))
      .var(vars.tertiary30, Value.toCss(palette.tertiary30))
      .var(vars.tertiary40, Value.toCss(palette.tertiary40))
      .var(vars.tertiary50, Value.toCss(palette.tertiary50))
      .var(vars.tertiary60, Value.toCss(palette.tertiary60))
      .var(vars.tertiary70, Value.toCss(palette.tertiary70))
      .var(vars.tertiary80, Value.toCss(palette.tertiary80))
      .var(vars.tertiary90, Value.toCss(palette.tertiary90))
      .var(vars.tertiary95, Value.toCss(palette.tertiary95))
      .var(vars.tertiary99, Value.toCss(palette.tertiary99))
      .var(vars.white, Value.toCss(palette.white))

  }
}

export const write = (
  palette: M.ColorPalette,
  { vars }: ColorPaletteOptions,
  writer: Writer,
) => {
  Writer.var(writer, vars.black, Value.toCss(palette.black));
  Writer.var(writer, vars.error0, Value.toCss(palette.error0));
  Writer.var(writer, vars.error10, Value.toCss(palette.error10));
  Writer.var(writer, vars.error100, Value.toCss(palette.error100));
  Writer.var(writer, vars.error20, Value.toCss(palette.error20));
  Writer.var(writer, vars.error30, Value.toCss(palette.error30));
  Writer.var(writer, vars.error40, Value.toCss(palette.error40));
  Writer.var(writer, vars.error50, Value.toCss(palette.error50));
  Writer.var(writer, vars.error60, Value.toCss(palette.error60));
  Writer.var(writer, vars.error70, Value.toCss(palette.error70));
  Writer.var(writer, vars.error80, Value.toCss(palette.error80));
  Writer.var(writer, vars.error90, Value.toCss(palette.error90));
  Writer.var(writer, vars.error95, Value.toCss(palette.error95));
  Writer.var(writer, vars.error99, Value.toCss(palette.error99));
  Writer.var(writer, vars.neutralVariant0, Value.toCss(palette.neutralVariant0));
  Writer.var(writer, vars.neutralVariant10, Value.toCss(palette.neutralVariant10));
  Writer.var(writer, vars.neutralVariant100, Value.toCss(palette.neutralVariant100));
  Writer.var(writer, vars.neutralVariant20, Value.toCss(palette.neutralVariant20));
  Writer.var(writer, vars.neutralVariant30, Value.toCss(palette.neutralVariant30));
  Writer.var(writer, vars.neutralVariant40, Value.toCss(palette.neutralVariant40));
  Writer.var(writer, vars.neutralVariant50, Value.toCss(palette.neutralVariant50));
  Writer.var(writer, vars.neutralVariant60, Value.toCss(palette.neutralVariant60));
  Writer.var(writer, vars.neutralVariant70, Value.toCss(palette.neutralVariant70));
  Writer.var(writer, vars.neutralVariant80, Value.toCss(palette.neutralVariant80));
  Writer.var(writer, vars.neutralVariant90, Value.toCss(palette.neutralVariant90));
  Writer.var(writer, vars.neutralVariant95, Value.toCss(palette.neutralVariant95));
  Writer.var(writer, vars.neutralVariant99, Value.toCss(palette.neutralVariant99));
  Writer.var(writer, vars.neutral0, Value.toCss(palette.neutral0));
  Writer.var(writer, vars.neutral10, Value.toCss(palette.neutral10));
  Writer.var(writer, vars.neutral100, Value.toCss(palette.neutral100));
  Writer.var(writer, vars.neutral12, Value.toCss(palette.neutral12));
  Writer.var(writer, vars.neutral17, Value.toCss(palette.neutral17));
  Writer.var(writer, vars.neutral20, Value.toCss(palette.neutral20));
  Writer.var(writer, vars.neutral22, Value.toCss(palette.neutral22));
  Writer.var(writer, vars.neutral24, Value.toCss(palette.neutral24));
  Writer.var(writer, vars.neutral30, Value.toCss(palette.neutral30));
  Writer.var(writer, vars.neutral4, Value.toCss(palette.neutral4));
  Writer.var(writer, vars.neutral40, Value.toCss(palette.neutral40));
  Writer.var(writer, vars.neutral50, Value.toCss(palette.neutral50));
  Writer.var(writer, vars.neutral6, Value.toCss(palette.neutral6));
  Writer.var(writer, vars.neutral60, Value.toCss(palette.neutral60));
  Writer.var(writer, vars.neutral70, Value.toCss(palette.neutral70));
  Writer.var(writer, vars.neutral80, Value.toCss(palette.neutral80));
  Writer.var(writer, vars.neutral87, Value.toCss(palette.neutral87));
  Writer.var(writer, vars.neutral90, Value.toCss(palette.neutral90));
  Writer.var(writer, vars.neutral92, Value.toCss(palette.neutral92));
  Writer.var(writer, vars.neutral94, Value.toCss(palette.neutral94));
  Writer.var(writer, vars.neutral95, Value.toCss(palette.neutral95));
  Writer.var(writer, vars.neutral96, Value.toCss(palette.neutral96));
  Writer.var(writer, vars.neutral98, Value.toCss(palette.neutral98));
  Writer.var(writer, vars.neutral99, Value.toCss(palette.neutral99));
  Writer.var(writer, vars.primary0, Value.toCss(palette.primary0));
  Writer.var(writer, vars.primary10, Value.toCss(palette.primary10));
  Writer.var(writer, vars.primary100, Value.toCss(palette.primary100));
  Writer.var(writer, vars.primary20, Value.toCss(palette.primary20));
  Writer.var(writer, vars.primary30, Value.toCss(palette.primary30));
  Writer.var(writer, vars.primary40, Value.toCss(palette.primary40));
  Writer.var(writer, vars.primary50, Value.toCss(palette.primary50));
  Writer.var(writer, vars.primary60, Value.toCss(palette.primary60));
  Writer.var(writer, vars.primary70, Value.toCss(palette.primary70));
  Writer.var(writer, vars.primary80, Value.toCss(palette.primary80));
  Writer.var(writer, vars.primary90, Value.toCss(palette.primary90));
  Writer.var(writer, vars.primary95, Value.toCss(palette.primary95));
  Writer.var(writer, vars.primary99, Value.toCss(palette.primary99));
  Writer.var(writer, vars.secondary0, Value.toCss(palette.secondary0));
  Writer.var(writer, vars.secondary10, Value.toCss(palette.secondary10));
  Writer.var(writer, vars.secondary100, Value.toCss(palette.secondary100));
  Writer.var(writer, vars.secondary20, Value.toCss(palette.secondary20));
  Writer.var(writer, vars.secondary30, Value.toCss(palette.secondary30));
  Writer.var(writer, vars.secondary40, Value.toCss(palette.secondary40));
  Writer.var(writer, vars.secondary50, Value.toCss(palette.secondary50));
  Writer.var(writer, vars.secondary60, Value.toCss(palette.secondary60));
  Writer.var(writer, vars.secondary70, Value.toCss(palette.secondary70));
  Writer.var(writer, vars.secondary80, Value.toCss(palette.secondary80));
  Writer.var(writer, vars.secondary90, Value.toCss(palette.secondary90));
  Writer.var(writer, vars.secondary95, Value.toCss(palette.secondary95));
  Writer.var(writer, vars.secondary99, Value.toCss(palette.secondary99));
  Writer.var(writer, vars.tertiary0, Value.toCss(palette.tertiary0));
  Writer.var(writer, vars.tertiary10, Value.toCss(palette.tertiary10));
  Writer.var(writer, vars.tertiary100, Value.toCss(palette.tertiary100));
  Writer.var(writer, vars.tertiary20, Value.toCss(palette.tertiary20));
  Writer.var(writer, vars.tertiary30, Value.toCss(palette.tertiary30));
  Writer.var(writer, vars.tertiary40, Value.toCss(palette.tertiary40));
  Writer.var(writer, vars.tertiary50, Value.toCss(palette.tertiary50));
  Writer.var(writer, vars.tertiary60, Value.toCss(palette.tertiary60));
  Writer.var(writer, vars.tertiary70, Value.toCss(palette.tertiary70));
  Writer.var(writer, vars.tertiary80, Value.toCss(palette.tertiary80));
  Writer.var(writer, vars.tertiary90, Value.toCss(palette.tertiary90));
  Writer.var(writer, vars.tertiary95, Value.toCss(palette.tertiary95));
  Writer.var(writer, vars.tertiary99, Value.toCss(palette.tertiary99));
  Writer.var(writer, vars.white, Value.toCss(palette.white));
};

export const conditionalWrite = (
  palette: M.ColorPalette,
  options: ColorPaletteOptions,
  writer: Writer,
) => {
  if (options.willChange) {
    write(palette, options, writer);
  }
};

const get = (
  material: M.ColorPalette,
  options: ColorPaletteOptions,
  colorVar: MaybeVar<Color>,
): string => {
  // if will change, return var(--), else, return value.
  // rer.get(material);
  return "";
};

export const ColorPalette = {
  write,
  conditionalWrite,
  get,
};
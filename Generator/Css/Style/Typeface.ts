import { Writer, Value, M } from "@internal/css";

export interface TypefaceVars {
  readonly brand: string,
  readonly plain: string,
  readonly weightBold: string,
  readonly weightMedium: string,
  readonly weightRegular: string,
}

export interface TypefaceConfig {
  readonly vars: TypefaceVars,
  readonly willChange: boolean,
}

export const write = (
  it: M.Typeface, 
  options: TypefaceConfig,
  writer: Writer,
) => {
  if (options.willChange) {
    Writer.var(writer, options.vars.brand, Value.toCss(it.brand));
    Writer.var(writer, options.vars.plain, Value.toCss(it.brand));
    Writer.var(writer, options.vars.weightBold, Value.toCss(it.weightBold));
    Writer.var(writer, options.vars.weightMedium, Value.toCss(it.weightMedium));
    Writer.var(writer, options.vars.weightRegular, Value.toCss(it.weightRegular));
  }
};

export const Typeface = {
  write,
};
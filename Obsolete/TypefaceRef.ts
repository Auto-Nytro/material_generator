import { FontFamily, FontWeight, Typeface } from "@internal/prelude";

const enum TypefaceKey {
  Brand,
  Plain,
  Bold,
  Medium,
  Regular,
}

export type Any = TypefaceKey;

export type Brand = TypefaceKey.Brand;
export type Plain = TypefaceKey.Plain;
export type Bold = TypefaceKey.Bold;
export type Medium = TypefaceKey.Medium;
export type Regular = TypefaceKey.Regular;

export type Font = Plain | Brand;
export type Weight = Regular | Medium | Bold;

export const Brand = (): Brand => TypefaceKey.Brand;
export const Plain = (): Plain => TypefaceKey.Plain;
export const Bold = (): Bold => TypefaceKey.Bold;
export const Medium = (): Medium => TypefaceKey.Medium;
export const Regular = (): Regular => TypefaceKey.Regular;

export function get(it: Font, typeface: Typeface): FontFamily
export function get(it: Weight, typeface: Typeface): FontWeight
export function get(it: Any, typeface: Typeface) {
  switch (it) {
    case TypefaceKey.Brand: return typeface.brand;
    case TypefaceKey.Plain: return typeface.plain;
    case TypefaceKey.Bold: return typeface.weightBold;
    case TypefaceKey.Medium: return typeface.weightMedium;
    case TypefaceKey.Regular: return typeface.weightRegular;
  }
}
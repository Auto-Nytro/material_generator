import { Color, ColorPalette } from "@internal/prelude";

const enum ColorPaletteKey {
  Black = 0,
  Error0,
  Error10,
  Error100,
  Error20,
  Error30,
  Error40,
  Error50,
  Error60,
  Error70,
  Error80,
  Error90,
  Error95,
  Error99,
  NeutralVariant0,
  NeutralVariant10,
  NeutralVariant100,
  NeutralVariant20,
  NeutralVariant30,
  NeutralVariant40,
  NeutralVariant50,
  NeutralVariant60,
  NeutralVariant70,
  NeutralVariant80,
  NeutralVariant90,
  NeutralVariant95,
  NeutralVariant99,
  Neutral0,
  Neutral10,
  Neutral100,
  Neutral12,
  Neutral17,
  Neutral20,
  Neutral22,
  Neutral24,
  Neutral30,
  Neutral4,
  Neutral40,
  Neutral50,
  Neutral6,
  Neutral60,
  Neutral70,
  Neutral80,
  Neutral87,
  Neutral90,
  Neutral92,
  Neutral94,
  Neutral95,
  Neutral96,
  Neutral98,
  Neutral99,
  Primary0,
  Primary10,
  Primary100,
  Primary20,
  Primary30,
  Primary40,
  Primary50,
  Primary60,
  Primary70,
  Primary80,
  Primary90,
  Primary95,
  Primary99,
  Secondary0,
  Secondary10,
  Secondary100,
  Secondary20,
  Secondary30,
  Secondary40,
  Secondary50,
  Secondary60,
  Secondary70,
  Secondary80,
  Secondary90,
  Secondary95,
  Secondary99,
  Tertiary0,
  Tertiary10,
  Tertiary100,
  Tertiary20,
  Tertiary30,
  Tertiary40,
  Tertiary50,
  Tertiary60,
  Tertiary70,
  Tertiary80,
  Tertiary90,
  Tertiary95,
  Tertiary99,
  White,
}

export type Any = ColorPaletteKey;
export type Black = ColorPaletteKey.Black;
export type Error0 = ColorPaletteKey.Error0;
export type Error10 = ColorPaletteKey.Error10;
export type Error100 = ColorPaletteKey.Error100;
export type Error20 = ColorPaletteKey.Error20;
export type Error30 = ColorPaletteKey.Error30;
export type Error40 = ColorPaletteKey.Error40;
export type Error50 = ColorPaletteKey.Error50;
export type Error60 = ColorPaletteKey.Error60;
export type Error70 = ColorPaletteKey.Error70;
export type Error80 = ColorPaletteKey.Error80;
export type Error90 = ColorPaletteKey.Error90;
export type Error95 = ColorPaletteKey.Error95;
export type Error99 = ColorPaletteKey.Error99;
export type NeutralVariant0 = ColorPaletteKey.NeutralVariant0;
export type NeutralVariant10 = ColorPaletteKey.NeutralVariant10;
export type NeutralVariant100 = ColorPaletteKey.NeutralVariant100;
export type NeutralVariant20 = ColorPaletteKey.NeutralVariant20;
export type NeutralVariant30 = ColorPaletteKey.NeutralVariant30;
export type NeutralVariant40 = ColorPaletteKey.NeutralVariant40;
export type NeutralVariant50 = ColorPaletteKey.NeutralVariant50;
export type NeutralVariant60 = ColorPaletteKey.NeutralVariant60;
export type NeutralVariant70 = ColorPaletteKey.NeutralVariant70;
export type NeutralVariant80 = ColorPaletteKey.NeutralVariant80;
export type NeutralVariant90 = ColorPaletteKey.NeutralVariant90;
export type NeutralVariant95 = ColorPaletteKey.NeutralVariant95;
export type NeutralVariant99 = ColorPaletteKey.NeutralVariant99;
export type Neutral0 = ColorPaletteKey.Neutral0;
export type Neutral10 = ColorPaletteKey.Neutral10;
export type Neutral100 = ColorPaletteKey.Neutral100;
export type Neutral12 = ColorPaletteKey.Neutral12;
export type Neutral17 = ColorPaletteKey.Neutral17;
export type Neutral20 = ColorPaletteKey.Neutral20;
export type Neutral22 = ColorPaletteKey.Neutral22;
export type Neutral24 = ColorPaletteKey.Neutral24;
export type Neutral30 = ColorPaletteKey.Neutral30;
export type Neutral4 = ColorPaletteKey.Neutral4;
export type Neutral40 = ColorPaletteKey.Neutral40;
export type Neutral50 = ColorPaletteKey.Neutral50;
export type Neutral6 = ColorPaletteKey.Neutral6;
export type Neutral60 = ColorPaletteKey.Neutral60;
export type Neutral70 = ColorPaletteKey.Neutral70;
export type Neutral80 = ColorPaletteKey.Neutral80;
export type Neutral87 = ColorPaletteKey.Neutral87;
export type Neutral90 = ColorPaletteKey.Neutral90;
export type Neutral92 = ColorPaletteKey.Neutral92;
export type Neutral94 = ColorPaletteKey.Neutral94;
export type Neutral95 = ColorPaletteKey.Neutral95;
export type Neutral96 = ColorPaletteKey.Neutral96;
export type Neutral98 = ColorPaletteKey.Neutral98;
export type Neutral99 = ColorPaletteKey.Neutral99;
export type Primary0 = ColorPaletteKey.Primary0;
export type Primary10 = ColorPaletteKey.Primary10;
export type Primary100 = ColorPaletteKey.Primary100;
export type Primary20 = ColorPaletteKey.Primary20;
export type Primary30 = ColorPaletteKey.Primary30;
export type Primary40 = ColorPaletteKey.Primary40;
export type Primary50 = ColorPaletteKey.Primary50;
export type Primary60 = ColorPaletteKey.Primary60;
export type Primary70 = ColorPaletteKey.Primary70;
export type Primary80 = ColorPaletteKey.Primary80;
export type Primary90 = ColorPaletteKey.Primary90;
export type Primary95 = ColorPaletteKey.Primary95;
export type Primary99 = ColorPaletteKey.Primary99;
export type Secondary0 = ColorPaletteKey.Secondary0;
export type Secondary10 = ColorPaletteKey.Secondary10;
export type Secondary100 = ColorPaletteKey.Secondary100;
export type Secondary20 = ColorPaletteKey.Secondary20;
export type Secondary30 = ColorPaletteKey.Secondary30;
export type Secondary40 = ColorPaletteKey.Secondary40;
export type Secondary50 = ColorPaletteKey.Secondary50;
export type Secondary60 = ColorPaletteKey.Secondary60;
export type Secondary70 = ColorPaletteKey.Secondary70;
export type Secondary80 = ColorPaletteKey.Secondary80;
export type Secondary90 = ColorPaletteKey.Secondary90;
export type Secondary95 = ColorPaletteKey.Secondary95;
export type Secondary99 = ColorPaletteKey.Secondary99;
export type Tertiary0 = ColorPaletteKey.Tertiary0;
export type Tertiary10 = ColorPaletteKey.Tertiary10;
export type Tertiary100 = ColorPaletteKey.Tertiary100;
export type Tertiary20 = ColorPaletteKey.Tertiary20;
export type Tertiary30 = ColorPaletteKey.Tertiary30;
export type Tertiary40 = ColorPaletteKey.Tertiary40;
export type Tertiary50 = ColorPaletteKey.Tertiary50;
export type Tertiary60 = ColorPaletteKey.Tertiary60;
export type Tertiary70 = ColorPaletteKey.Tertiary70;
export type Tertiary80 = ColorPaletteKey.Tertiary80;
export type Tertiary90 = ColorPaletteKey.Tertiary90;
export type Tertiary95 = ColorPaletteKey.Tertiary95;
export type Tertiary99 = ColorPaletteKey.Tertiary99;
export type White = ColorPaletteKey.White;

export const Black = (): Black => ColorPaletteKey.Black;
export const Error0 = (): Error0 => ColorPaletteKey.Error0;
export const Error10 = (): Error10 => ColorPaletteKey.Error10;
export const Error100 = (): Error100 => ColorPaletteKey.Error100;
export const Error20 = (): Error20 => ColorPaletteKey.Error20;
export const Error30 = (): Error30 => ColorPaletteKey.Error30;
export const Error40 = (): Error40 => ColorPaletteKey.Error40;
export const Error50 = (): Error50 => ColorPaletteKey.Error50;
export const Error60 = (): Error60 => ColorPaletteKey.Error60;
export const Error70 = (): Error70 => ColorPaletteKey.Error70;
export const Error80 = (): Error80 => ColorPaletteKey.Error80;
export const Error90 = (): Error90 => ColorPaletteKey.Error90;
export const Error95 = (): Error95 => ColorPaletteKey.Error95;
export const Error99 = (): Error99 => ColorPaletteKey.Error99;
export const NeutralVariant0 = (): NeutralVariant0 => ColorPaletteKey.NeutralVariant0;
export const NeutralVariant10 = (): NeutralVariant10 => ColorPaletteKey.NeutralVariant10;
export const NeutralVariant100 = (): NeutralVariant100 => ColorPaletteKey.NeutralVariant100;
export const NeutralVariant20 = (): NeutralVariant20 => ColorPaletteKey.NeutralVariant20;
export const NeutralVariant30 = (): NeutralVariant30 => ColorPaletteKey.NeutralVariant30;
export const NeutralVariant40 = (): NeutralVariant40 => ColorPaletteKey.NeutralVariant40;
export const NeutralVariant50 = (): NeutralVariant50 => ColorPaletteKey.NeutralVariant50;
export const NeutralVariant60 = (): NeutralVariant60 => ColorPaletteKey.NeutralVariant60;
export const NeutralVariant70 = (): NeutralVariant70 => ColorPaletteKey.NeutralVariant70;
export const NeutralVariant80 = (): NeutralVariant80 => ColorPaletteKey.NeutralVariant80;
export const NeutralVariant90 = (): NeutralVariant90 => ColorPaletteKey.NeutralVariant90;
export const NeutralVariant95 = (): NeutralVariant95 => ColorPaletteKey.NeutralVariant95;
export const NeutralVariant99 = (): NeutralVariant99 => ColorPaletteKey.NeutralVariant99;
export const Neutral0 = (): Neutral0 => ColorPaletteKey.Neutral0;
export const Neutral10 = (): Neutral10 => ColorPaletteKey.Neutral10;
export const Neutral100 = (): Neutral100 => ColorPaletteKey.Neutral100;
export const Neutral12 = (): Neutral12 => ColorPaletteKey.Neutral12;
export const Neutral17 = (): Neutral17 => ColorPaletteKey.Neutral17;
export const Neutral20 = (): Neutral20 => ColorPaletteKey.Neutral20;
export const Neutral22 = (): Neutral22 => ColorPaletteKey.Neutral22;
export const Neutral24 = (): Neutral24 => ColorPaletteKey.Neutral24;
export const Neutral30 = (): Neutral30 => ColorPaletteKey.Neutral30;
export const Neutral4 = (): Neutral4 => ColorPaletteKey.Neutral4;
export const Neutral40 = (): Neutral40 => ColorPaletteKey.Neutral40;
export const Neutral50 = (): Neutral50 => ColorPaletteKey.Neutral50;
export const Neutral6 = (): Neutral6 => ColorPaletteKey.Neutral6;
export const Neutral60 = (): Neutral60 => ColorPaletteKey.Neutral60;
export const Neutral70 = (): Neutral70 => ColorPaletteKey.Neutral70;
export const Neutral80 = (): Neutral80 => ColorPaletteKey.Neutral80;
export const Neutral87 = (): Neutral87 => ColorPaletteKey.Neutral87;
export const Neutral90 = (): Neutral90 => ColorPaletteKey.Neutral90;
export const Neutral92 = (): Neutral92 => ColorPaletteKey.Neutral92;
export const Neutral94 = (): Neutral94 => ColorPaletteKey.Neutral94;
export const Neutral95 = (): Neutral95 => ColorPaletteKey.Neutral95;
export const Neutral96 = (): Neutral96 => ColorPaletteKey.Neutral96;
export const Neutral98 = (): Neutral98 => ColorPaletteKey.Neutral98;
export const Neutral99 = (): Neutral99 => ColorPaletteKey.Neutral99;
export const Primary0 = (): Primary0 => ColorPaletteKey.Primary0;
export const Primary10 = (): Primary10 => ColorPaletteKey.Primary10;
export const Primary100 = (): Primary100 => ColorPaletteKey.Primary100;
export const Primary20 = (): Primary20 => ColorPaletteKey.Primary20;
export const Primary30 = (): Primary30 => ColorPaletteKey.Primary30;
export const Primary40 = (): Primary40 => ColorPaletteKey.Primary40;
export const Primary50 = (): Primary50 => ColorPaletteKey.Primary50;
export const Primary60 = (): Primary60 => ColorPaletteKey.Primary60;
export const Primary70 = (): Primary70 => ColorPaletteKey.Primary70;
export const Primary80 = (): Primary80 => ColorPaletteKey.Primary80;
export const Primary90 = (): Primary90 => ColorPaletteKey.Primary90;
export const Primary95 = (): Primary95 => ColorPaletteKey.Primary95;
export const Primary99 = (): Primary99 => ColorPaletteKey.Primary99;
export const Secondary0 = (): Secondary0 => ColorPaletteKey.Secondary0;
export const Secondary10 = (): Secondary10 => ColorPaletteKey.Secondary10;
export const Secondary100 = (): Secondary100 => ColorPaletteKey.Secondary100;
export const Secondary20 = (): Secondary20 => ColorPaletteKey.Secondary20;
export const Secondary30 = (): Secondary30 => ColorPaletteKey.Secondary30;
export const Secondary40 = (): Secondary40 => ColorPaletteKey.Secondary40;
export const Secondary50 = (): Secondary50 => ColorPaletteKey.Secondary50;
export const Secondary60 = (): Secondary60 => ColorPaletteKey.Secondary60;
export const Secondary70 = (): Secondary70 => ColorPaletteKey.Secondary70;
export const Secondary80 = (): Secondary80 => ColorPaletteKey.Secondary80;
export const Secondary90 = (): Secondary90 => ColorPaletteKey.Secondary90;
export const Secondary95 = (): Secondary95 => ColorPaletteKey.Secondary95;
export const Secondary99 = (): Secondary99 => ColorPaletteKey.Secondary99;
export const Tertiary0 = (): Tertiary0 => ColorPaletteKey.Tertiary0;
export const Tertiary10 = (): Tertiary10 => ColorPaletteKey.Tertiary10;
export const Tertiary100 = (): Tertiary100 => ColorPaletteKey.Tertiary100;
export const Tertiary20 = (): Tertiary20 => ColorPaletteKey.Tertiary20;
export const Tertiary30 = (): Tertiary30 => ColorPaletteKey.Tertiary30;
export const Tertiary40 = (): Tertiary40 => ColorPaletteKey.Tertiary40;
export const Tertiary50 = (): Tertiary50 => ColorPaletteKey.Tertiary50;
export const Tertiary60 = (): Tertiary60 => ColorPaletteKey.Tertiary60;
export const Tertiary70 = (): Tertiary70 => ColorPaletteKey.Tertiary70;
export const Tertiary80 = (): Tertiary80 => ColorPaletteKey.Tertiary80;
export const Tertiary90 = (): Tertiary90 => ColorPaletteKey.Tertiary90;
export const Tertiary95 = (): Tertiary95 => ColorPaletteKey.Tertiary95;
export const Tertiary99 = (): Tertiary99 => ColorPaletteKey.Tertiary99;
export const White = (): White => ColorPaletteKey.White;

export const get = (it: ColorPaletteKey, colorPalette: ColorPalette): Color => {
  switch (it) {
    case ColorPaletteKey.Black: return colorPalette.black;
    case ColorPaletteKey.Error0: return colorPalette.error0;
    case ColorPaletteKey.Error10: return colorPalette.error10;
    case ColorPaletteKey.Error100: return colorPalette.error100;
    case ColorPaletteKey.Error20: return colorPalette.error20;
    case ColorPaletteKey.Error30: return colorPalette.error30;
    case ColorPaletteKey.Error40: return colorPalette.error40;
    case ColorPaletteKey.Error50: return colorPalette.error50;
    case ColorPaletteKey.Error60: return colorPalette.error60;
    case ColorPaletteKey.Error70: return colorPalette.error70;
    case ColorPaletteKey.Error80: return colorPalette.error80;
    case ColorPaletteKey.Error90: return colorPalette.error90;
    case ColorPaletteKey.Error95: return colorPalette.error95;
    case ColorPaletteKey.Error99: return colorPalette.error99;
    case ColorPaletteKey.NeutralVariant0: return colorPalette.neutralVariant0;
    case ColorPaletteKey.NeutralVariant10: return colorPalette.neutralVariant10;
    case ColorPaletteKey.NeutralVariant100: return colorPalette.neutralVariant100;
    case ColorPaletteKey.NeutralVariant20: return colorPalette.neutralVariant20;
    case ColorPaletteKey.NeutralVariant30: return colorPalette.neutralVariant30;
    case ColorPaletteKey.NeutralVariant40: return colorPalette.neutralVariant40;
    case ColorPaletteKey.NeutralVariant50: return colorPalette.neutralVariant50;
    case ColorPaletteKey.NeutralVariant60: return colorPalette.neutralVariant60;
    case ColorPaletteKey.NeutralVariant70: return colorPalette.neutralVariant70;
    case ColorPaletteKey.NeutralVariant80: return colorPalette.neutralVariant80;
    case ColorPaletteKey.NeutralVariant90: return colorPalette.neutralVariant90;
    case ColorPaletteKey.NeutralVariant95: return colorPalette.neutralVariant95;
    case ColorPaletteKey.NeutralVariant99: return colorPalette.neutralVariant99;
    case ColorPaletteKey.Neutral0: return colorPalette.neutral0;
    case ColorPaletteKey.Neutral10: return colorPalette.neutral10;
    case ColorPaletteKey.Neutral100: return colorPalette.neutral100;
    case ColorPaletteKey.Neutral12: return colorPalette.neutral12;
    case ColorPaletteKey.Neutral17: return colorPalette.neutral17;
    case ColorPaletteKey.Neutral20: return colorPalette.neutral20;
    case ColorPaletteKey.Neutral22: return colorPalette.neutral22;
    case ColorPaletteKey.Neutral24: return colorPalette.neutral24;
    case ColorPaletteKey.Neutral30: return colorPalette.neutral30;
    case ColorPaletteKey.Neutral4: return colorPalette.neutral4;
    case ColorPaletteKey.Neutral40: return colorPalette.neutral40;
    case ColorPaletteKey.Neutral50: return colorPalette.neutral50;
    case ColorPaletteKey.Neutral6: return colorPalette.neutral6;
    case ColorPaletteKey.Neutral60: return colorPalette.neutral60;
    case ColorPaletteKey.Neutral70: return colorPalette.neutral70;
    case ColorPaletteKey.Neutral80: return colorPalette.neutral80;
    case ColorPaletteKey.Neutral87: return colorPalette.neutral87;
    case ColorPaletteKey.Neutral90: return colorPalette.neutral90;
    case ColorPaletteKey.Neutral92: return colorPalette.neutral92;
    case ColorPaletteKey.Neutral94: return colorPalette.neutral94;
    case ColorPaletteKey.Neutral95: return colorPalette.neutral95;
    case ColorPaletteKey.Neutral96: return colorPalette.neutral96;
    case ColorPaletteKey.Neutral98: return colorPalette.neutral98;
    case ColorPaletteKey.Neutral99: return colorPalette.neutral99;
    case ColorPaletteKey.Primary0: return colorPalette.primary0;
    case ColorPaletteKey.Primary10: return colorPalette.primary10;
    case ColorPaletteKey.Primary100: return colorPalette.primary100;
    case ColorPaletteKey.Primary20: return colorPalette.primary20;
    case ColorPaletteKey.Primary30: return colorPalette.primary30;
    case ColorPaletteKey.Primary40: return colorPalette.primary40;
    case ColorPaletteKey.Primary50: return colorPalette.primary50;
    case ColorPaletteKey.Primary60: return colorPalette.primary60;
    case ColorPaletteKey.Primary70: return colorPalette.primary70;
    case ColorPaletteKey.Primary80: return colorPalette.primary80;
    case ColorPaletteKey.Primary90: return colorPalette.primary90;
    case ColorPaletteKey.Primary95: return colorPalette.primary95;
    case ColorPaletteKey.Primary99: return colorPalette.primary99;
    case ColorPaletteKey.Secondary0: return colorPalette.secondary0;
    case ColorPaletteKey.Secondary10: return colorPalette.secondary10;
    case ColorPaletteKey.Secondary100: return colorPalette.secondary100;
    case ColorPaletteKey.Secondary20: return colorPalette.secondary20;
    case ColorPaletteKey.Secondary30: return colorPalette.secondary30;
    case ColorPaletteKey.Secondary40: return colorPalette.secondary40;
    case ColorPaletteKey.Secondary50: return colorPalette.secondary50;
    case ColorPaletteKey.Secondary60: return colorPalette.secondary60;
    case ColorPaletteKey.Secondary70: return colorPalette.secondary70;
    case ColorPaletteKey.Secondary80: return colorPalette.secondary80;
    case ColorPaletteKey.Secondary90: return colorPalette.secondary90;
    case ColorPaletteKey.Secondary95: return colorPalette.secondary95;
    case ColorPaletteKey.Secondary99: return colorPalette.secondary99;
    case ColorPaletteKey.Tertiary0: return colorPalette.tertiary0;
    case ColorPaletteKey.Tertiary10: return colorPalette.tertiary10;
    case ColorPaletteKey.Tertiary100: return colorPalette.tertiary100;
    case ColorPaletteKey.Tertiary20: return colorPalette.tertiary20;
    case ColorPaletteKey.Tertiary30: return colorPalette.tertiary30;
    case ColorPaletteKey.Tertiary40: return colorPalette.tertiary40;
    case ColorPaletteKey.Tertiary50: return colorPalette.tertiary50;
    case ColorPaletteKey.Tertiary60: return colorPalette.tertiary60;
    case ColorPaletteKey.Tertiary70: return colorPalette.tertiary70;
    case ColorPaletteKey.Tertiary80: return colorPalette.tertiary80;
    case ColorPaletteKey.Tertiary90: return colorPalette.tertiary90;
    case ColorPaletteKey.Tertiary95: return colorPalette.tertiary95;
    case ColorPaletteKey.Tertiary99: return colorPalette.tertiary99;
    case ColorPaletteKey.White: return colorPalette.white;
  }
};

// export class ColorPaletteRef.Any {
//   private constructor(readonly discriminant: ColorPaletteKey) {}

//   private static readonly internalBlack = new ColorPaletteRef.Any(ColorPaletteKey.Black);
//   private static readonly internalError0 = new ColorPaletteRef.Any(ColorPaletteKey.Error0);
//   private static readonly internalError10 = new ColorPaletteRef.Any(ColorPaletteKey.Error10);
//   private static readonly internalError100 = new ColorPaletteRef.Any(ColorPaletteKey.Error100);
//   private static readonly internalError20 = new ColorPaletteRef.Any(ColorPaletteKey.Error20);
//   private static readonly internalError30 = new ColorPaletteRef.Any(ColorPaletteKey.Error30);
//   private static readonly internalError40 = new ColorPaletteRef.Any(ColorPaletteKey.Error40);
//   private static readonly internalError50 = new ColorPaletteRef.Any(ColorPaletteKey.Error50);
//   private static readonly internalError60 = new ColorPaletteRef.Any(ColorPaletteKey.Error60);
//   private static readonly internalError70 = new ColorPaletteRef.Any(ColorPaletteKey.Error70);
//   private static readonly internalError80 = new ColorPaletteRef.Any(ColorPaletteKey.Error80);
//   private static readonly internalError90 = new ColorPaletteRef.Any(ColorPaletteKey.Error90);
//   private static readonly internalError95 = new ColorPaletteRef.Any(ColorPaletteKey.Error95);
//   private static readonly internalError99 = new ColorPaletteRef.Any(ColorPaletteKey.Error99);
//   private static readonly internalNeutralVariant0 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant0);
//   private static readonly internalNeutralVariant10 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant10);
//   private static readonly internalNeutralVariant100 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant100);
//   private static readonly internalNeutralVariant20 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant20);
//   private static readonly internalNeutralVariant30 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant30);
//   private static readonly internalNeutralVariant40 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant40);
//   private static readonly internalNeutralVariant50 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant50);
//   private static readonly internalNeutralVariant60 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant60);
//   private static readonly internalNeutralVariant70 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant70);
//   private static readonly internalNeutralVariant80 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant80);
//   private static readonly internalNeutralVariant90 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant90);
//   private static readonly internalNeutralVariant95 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant95);
//   private static readonly internalNeutralVariant99 = new ColorPaletteRef.Any(ColorPaletteKey.NeutralVariant99);
//   private static readonly internalNeutral0 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral0);
//   private static readonly internalNeutral10 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral10);
//   private static readonly internalNeutral100 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral100);
//   private static readonly internalNeutral12 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral12);
//   private static readonly internalNeutral17 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral17);
//   private static readonly internalNeutral20 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral20);
//   private static readonly internalNeutral22 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral22);
//   private static readonly internalNeutral24 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral24);
//   private static readonly internalNeutral30 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral30);
//   private static readonly internalNeutral4 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral4);
//   private static readonly internalNeutral40 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral40);
//   private static readonly internalNeutral50 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral50);
//   private static readonly internalNeutral6 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral6);
//   private static readonly internalNeutral60 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral60);
//   private static readonly internalNeutral70 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral70);
//   private static readonly internalNeutral80 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral80);
//   private static readonly internalNeutral87 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral87);
//   private static readonly internalNeutral90 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral90);
//   private static readonly internalNeutral92 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral92);
//   private static readonly internalNeutral94 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral94);
//   private static readonly internalNeutral95 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral95);
//   private static readonly internalNeutral96 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral96);
//   private static readonly internalNeutral98 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral98);
//   private static readonly internalNeutral99 = new ColorPaletteRef.Any(ColorPaletteKey.Neutral99);
//   private static readonly internalPrimary0 = new ColorPaletteRef.Any(ColorPaletteKey.Primary0);
//   private static readonly internalPrimary10 = new ColorPaletteRef.Any(ColorPaletteKey.Primary10);
//   private static readonly internalPrimary100 = new ColorPaletteRef.Any(ColorPaletteKey.Primary100);
//   private static readonly internalPrimary20 = new ColorPaletteRef.Any(ColorPaletteKey.Primary20);
//   private static readonly internalPrimary30 = new ColorPaletteRef.Any(ColorPaletteKey.Primary30);
//   private static readonly internalPrimary40 = new ColorPaletteRef.Any(ColorPaletteKey.Primary40);
//   private static readonly internalPrimary50 = new ColorPaletteRef.Any(ColorPaletteKey.Primary50);
//   private static readonly internalPrimary60 = new ColorPaletteRef.Any(ColorPaletteKey.Primary60);
//   private static readonly internalPrimary70 = new ColorPaletteRef.Any(ColorPaletteKey.Primary70);
//   private static readonly internalPrimary80 = new ColorPaletteRef.Any(ColorPaletteKey.Primary80);
//   private static readonly internalPrimary90 = new ColorPaletteRef.Any(ColorPaletteKey.Primary90);
//   private static readonly internalPrimary95 = new ColorPaletteRef.Any(ColorPaletteKey.Primary95);
//   private static readonly internalPrimary99 = new ColorPaletteRef.Any(ColorPaletteKey.Primary99);
//   private static readonly internalSecondary0 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary0);
//   private static readonly internalSecondary10 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary10);
//   private static readonly internalSecondary100 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary100);
//   private static readonly internalSecondary20 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary20);
//   private static readonly internalSecondary30 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary30);
//   private static readonly internalSecondary40 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary40);
//   private static readonly internalSecondary50 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary50);
//   private static readonly internalSecondary60 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary60);
//   private static readonly internalSecondary70 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary70);
//   private static readonly internalSecondary80 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary80);
//   private static readonly internalSecondary90 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary90);
//   private static readonly internalSecondary95 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary95);
//   private static readonly internalSecondary99 = new ColorPaletteRef.Any(ColorPaletteKey.Secondary99);
//   private static readonly internalTertiary0 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary0);
//   private static readonly internalTertiary10 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary10);
//   private static readonly internalTertiary100 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary100);
//   private static readonly internalTertiary20 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary20);
//   private static readonly internalTertiary30 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary30);
//   private static readonly internalTertiary40 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary40);
//   private static readonly internalTertiary50 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary50);
//   private static readonly internalTertiary60 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary60);
//   private static readonly internalTertiary70 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary70);
//   private static readonly internalTertiary80 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary80);
//   private static readonly internalTertiary90 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary90);
//   private static readonly internalTertiary95 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary95);
//   private static readonly internalTertiary99 = new ColorPaletteRef.Any(ColorPaletteKey.Tertiary99);
//   private static readonly internalWhite = new ColorPaletteRef.Any(ColorPaletteKey.White);


//   static Black() {
//     return this.internalBlack;
//   }
//   static Error0() {
//     return this.internalError0;
//   }
//   static Error10() {
//     return this.internalError10;
//   }
//   static Error100() {
//     return this.internalError100;
//   }
//   static Error20() {
//     return this.internalError20;
//   }
//   static Error30() {
//     return this.internalError30;
//   }
//   static Error40() {
//     return this.internalError40;
//   }
//   static Error50() {
//     return this.internalError50;
//   }
//   static Error60() {
//     return this.internalError60;
//   }
//   static Error70() {
//     return this.internalError70;
//   }
//   static Error80() {
//     return this.internalError80;
//   }
//   static Error90() {
//     return this.internalError90;
//   }
//   static Error95() {
//     return this.internalError95;
//   }
//   static Error99() {
//     return this.internalError99;
//   }
//   static NeutralVariant0() {
//     return this.internalNeutralVariant0;
//   }
//   static NeutralVariant10() {
//     return this.internalNeutralVariant10;
//   }
//   static NeutralVariant100() {
//     return this.internalNeutralVariant100;
//   }
//   static NeutralVariant20() {
//     return this.internalNeutralVariant20;
//   }
//   static NeutralVariant30() {
//     return this.internalNeutralVariant30;
//   }
//   static NeutralVariant40() {
//     return this.internalNeutralVariant40;
//   }
//   static NeutralVariant50() {
//     return this.internalNeutralVariant50;
//   }
//   static NeutralVariant60() {
//     return this.internalNeutralVariant60;
//   }
//   static NeutralVariant70() {
//     return this.internalNeutralVariant70;
//   }
//   static NeutralVariant80() {
//     return this.internalNeutralVariant80;
//   }
//   static NeutralVariant90() {
//     return this.internalNeutralVariant90;
//   }
//   static NeutralVariant95() {
//     return this.internalNeutralVariant95;
//   }
//   static NeutralVariant99() {
//     return this.internalNeutralVariant99;
//   }
//   static Neutral0() {
//     return this.internalNeutral0;
//   }
//   static Neutral10() {
//     return this.internalNeutral10;
//   }
//   static Neutral100() {
//     return this.internalNeutral100;
//   }
//   static Neutral12() {
//     return this.internalNeutral12;
//   }
//   static Neutral17() {
//     return this.internalNeutral17;
//   }
//   static Neutral20() {
//     return this.internalNeutral20;
//   }
//   static Neutral22() {
//     return this.internalNeutral22;
//   }
//   static Neutral24() {
//     return this.internalNeutral24;
//   }
//   static Neutral30() {
//     return this.internalNeutral30;
//   }
//   static Neutral4() {
//     return this.internalNeutral4;
//   }
//   static Neutral40() {
//     return this.internalNeutral40;
//   }
//   static Neutral50() {
//     return this.internalNeutral50;
//   }
//   static Neutral6() {
//     return this.internalNeutral6;
//   }
//   static Neutral60() {
//     return this.internalNeutral60;
//   }
//   static Neutral70() {
//     return this.internalNeutral70;
//   }
//   static Neutral80() {
//     return this.internalNeutral80;
//   }
//   static Neutral87() {
//     return this.internalNeutral87;
//   }
//   static Neutral90() {
//     return this.internalNeutral90;
//   }
//   static Neutral92() {
//     return this.internalNeutral92;
//   }
//   static Neutral94() {
//     return this.internalNeutral94;
//   }
//   static Neutral95() {
//     return this.internalNeutral95;
//   }
//   static Neutral96() {
//     return this.internalNeutral96;
//   }
//   static Neutral98() {
//     return this.internalNeutral98;
//   }
//   static Neutral99() {
//     return this.internalNeutral99;
//   }
//   static Primary0() {
//     return this.internalPrimary0;
//   }
//   static Primary10() {
//     return this.internalPrimary10;
//   }
//   static Primary100() {
//     return this.internalPrimary100;
//   }
//   static Primary20() {
//     return this.internalPrimary20;
//   }
//   static Primary30() {
//     return this.internalPrimary30;
//   }
//   static Primary40() {
//     return this.internalPrimary40;
//   }
//   static Primary50() {
//     return this.internalPrimary50;
//   }
//   static Primary60() {
//     return this.internalPrimary60;
//   }
//   static Primary70() {
//     return this.internalPrimary70;
//   }
//   static Primary80() {
//     return this.internalPrimary80;
//   }
//   static Primary90() {
//     return this.internalPrimary90;
//   }
//   static Primary95() {
//     return this.internalPrimary95;
//   }
//   static Primary99() {
//     return this.internalPrimary99;
//   }
//   static Secondary0() {
//     return this.internalSecondary0;
//   }
//   static Secondary10() {
//     return this.internalSecondary10;
//   }
//   static Secondary100() {
//     return this.internalSecondary100;
//   }
//   static Secondary20() {
//     return this.internalSecondary20;
//   }
//   static Secondary30() {
//     return this.internalSecondary30;
//   }
//   static Secondary40() {
//     return this.internalSecondary40;
//   }
//   static Secondary50() {
//     return this.internalSecondary50;
//   }
//   static Secondary60() {
//     return this.internalSecondary60;
//   }
//   static Secondary70() {
//     return this.internalSecondary70;
//   }
//   static Secondary80() {
//     return this.internalSecondary80;
//   }
//   static Secondary90() {
//     return this.internalSecondary90;
//   }
//   static Secondary95() {
//     return this.internalSecondary95;
//   }
//   static Secondary99() {
//     return this.internalSecondary99;
//   }
//   static Tertiary0() {
//     return this.internalTertiary0;
//   }
//   static Tertiary10() {
//     return this.internalTertiary10;
//   }
//   static Tertiary100() {
//     return this.internalTertiary100;
//   }
//   static Tertiary20() {
//     return this.internalTertiary20;
//   }
//   static Tertiary30() {
//     return this.internalTertiary30;
//   }
//   static Tertiary40() {
//     return this.internalTertiary40;
//   }
//   static Tertiary50() {
//     return this.internalTertiary50;
//   }
//   static Tertiary60() {
//     return this.internalTertiary60;
//   }
//   static Tertiary70() {
//     return this.internalTertiary70;
//   }
//   static Tertiary80() {
//     return this.internalTertiary80;
//   }
//   static Tertiary90() {
//     return this.internalTertiary90;
//   }
//   static Tertiary95() {
//     return this.internalTertiary95;
//   }
//   static Tertiary99() {
//     return this.internalTertiary99;
//   }
//   static White() {
//     return this.internalWhite;
//   }

//   deref(it: ColorPalette): Color {
//     switch (this.discriminant) {
//       case ColorPaletteKey.Black: {
//         return it.black;
//       }
//       case ColorPaletteKey.Error0: {
//         return it.error0;
//       }
//       case ColorPaletteKey.Error10: {
//         return it.error10;
//       }
//       case ColorPaletteKey.Error100: {
//         return it.error100;
//       }
//       case ColorPaletteKey.Error20: {
//         return it.error20;
//       }
//       case ColorPaletteKey.Error30: {
//         return it.error30;
//       }
//       case ColorPaletteKey.Error40: {
//         return it.error40;
//       }
//       case ColorPaletteKey.Error50: {
//         return it.error50;
//       }
//       case ColorPaletteKey.Error60: {
//         return it.error60;
//       }
//       case ColorPaletteKey.Error70: {
//         return it.error70;
//       }
//       case ColorPaletteKey.Error80: {
//         return it.error80;
//       }
//       case ColorPaletteKey.Error90: {
//         return it.error90;
//       }
//       case ColorPaletteKey.Error95: {
//         return it.error95;
//       }
//       case ColorPaletteKey.Error99: {
//         return it.error99;
//       }
//       case ColorPaletteKey.NeutralVariant0: {
//         return it.neutralVariant0;
//       }
//       case ColorPaletteKey.NeutralVariant10: {
//         return it.neutralVariant10;
//       }
//       case ColorPaletteKey.NeutralVariant100: {
//         return it.neutralVariant100;
//       }
//       case ColorPaletteKey.NeutralVariant20: {
//         return it.neutralVariant20;
//       }
//       case ColorPaletteKey.NeutralVariant30: {
//         return it.neutralVariant30;
//       }
//       case ColorPaletteKey.NeutralVariant40: {
//         return it.neutralVariant40;
//       }
//       case ColorPaletteKey.NeutralVariant50: {
//         return it.neutralVariant50;
//       }
//       case ColorPaletteKey.NeutralVariant60: {
//         return it.neutralVariant60;
//       }
//       case ColorPaletteKey.NeutralVariant70: {
//         return it.neutralVariant70;
//       }
//       case ColorPaletteKey.NeutralVariant80: {
//         return it.neutralVariant80;
//       }
//       case ColorPaletteKey.NeutralVariant90: {
//         return it.neutralVariant90;
//       }
//       case ColorPaletteKey.NeutralVariant95: {
//         return it.neutralVariant95;
//       }
//       case ColorPaletteKey.NeutralVariant99: {
//         return it.neutralVariant99;
//       }
//       case ColorPaletteKey.Neutral0: {
//         return it.neutral0;
//       }
//       case ColorPaletteKey.Neutral10: {
//         return it.neutral10;
//       }
//       case ColorPaletteKey.Neutral100: {
//         return it.neutral100;
//       }
//       case ColorPaletteKey.Neutral12: {
//         return it.neutral12;
//       }
//       case ColorPaletteKey.Neutral17: {
//         return it.neutral17;
//       }
//       case ColorPaletteKey.Neutral20: {
//         return it.neutral20;
//       }
//       case ColorPaletteKey.Neutral22: {
//         return it.neutral22;
//       }
//       case ColorPaletteKey.Neutral24: {
//         return it.neutral24;
//       }
//       case ColorPaletteKey.Neutral30: {
//         return it.neutral30;
//       }
//       case ColorPaletteKey.Neutral4: {
//         return it.neutral4;
//       }
//       case ColorPaletteKey.Neutral40: {
//         return it.neutral40;
//       }
//       case ColorPaletteKey.Neutral50: {
//         return it.neutral50;
//       }
//       case ColorPaletteKey.Neutral6: {
//         return it.neutral6;
//       }
//       case ColorPaletteKey.Neutral60: {
//         return it.neutral60;
//       }
//       case ColorPaletteKey.Neutral70: {
//         return it.neutral70;
//       }
//       case ColorPaletteKey.Neutral80: {
//         return it.neutral80;
//       }
//       case ColorPaletteKey.Neutral87: {
//         return it.neutral87;
//       }
//       case ColorPaletteKey.Neutral90: {
//         return it.neutral90;
//       }
//       case ColorPaletteKey.Neutral92: {
//         return it.neutral92;
//       }
//       case ColorPaletteKey.Neutral94: {
//         return it.neutral94;
//       }
//       case ColorPaletteKey.Neutral95: {
//         return it.neutral95;
//       }
//       case ColorPaletteKey.Neutral96: {
//         return it.neutral96;
//       }
//       case ColorPaletteKey.Neutral98: {
//         return it.neutral98;
//       }
//       case ColorPaletteKey.Neutral99: {
//         return it.neutral99;
//       }
//       case ColorPaletteKey.Primary0: {
//         return it.primary0;
//       }
//       case ColorPaletteKey.Primary10: {
//         return it.primary10;
//       }
//       case ColorPaletteKey.Primary100: {
//         return it.primary100;
//       }
//       case ColorPaletteKey.Primary20: {
//         return it.primary20;
//       }
//       case ColorPaletteKey.Primary30: {
//         return it.primary30;
//       }
//       case ColorPaletteKey.Primary40: {
//         return it.primary40;
//       }
//       case ColorPaletteKey.Primary50: {
//         return it.primary50;
//       }
//       case ColorPaletteKey.Primary60: {
//         return it.primary60;
//       }
//       case ColorPaletteKey.Primary70: {
//         return it.primary70;
//       }
//       case ColorPaletteKey.Primary80: {
//         return it.primary80;
//       }
//       case ColorPaletteKey.Primary90: {
//         return it.primary90;
//       }
//       case ColorPaletteKey.Primary95: {
//         return it.primary95;
//       }
//       case ColorPaletteKey.Primary99: {
//         return it.primary99;
//       }
//       case ColorPaletteKey.Secondary0: {
//         return it.secondary0;
//       }
//       case ColorPaletteKey.Secondary10: {
//         return it.secondary10;
//       }
//       case ColorPaletteKey.Secondary100: {
//         return it.secondary100;
//       }
//       case ColorPaletteKey.Secondary20: {
//         return it.secondary20;
//       }
//       case ColorPaletteKey.Secondary30: {
//         return it.secondary30;
//       }
//       case ColorPaletteKey.Secondary40: {
//         return it.secondary40;
//       }
//       case ColorPaletteKey.Secondary50: {
//         return it.secondary50;
//       }
//       case ColorPaletteKey.Secondary60: {
//         return it.secondary60;
//       }
//       case ColorPaletteKey.Secondary70: {
//         return it.secondary70;
//       }
//       case ColorPaletteKey.Secondary80: {
//         return it.secondary80;
//       }
//       case ColorPaletteKey.Secondary90: {
//         return it.secondary90;
//       }
//       case ColorPaletteKey.Secondary95: {
//         return it.secondary95;
//       }
//       case ColorPaletteKey.Secondary99: {
//         return it.secondary99;
//       }
//       case ColorPaletteKey.Tertiary0: {
//         return it.tertiary0;
//       }
//       case ColorPaletteKey.Tertiary10: {
//         return it.tertiary10;
//       }
//       case ColorPaletteKey.Tertiary100: {
//         return it.tertiary100;
//       }
//       case ColorPaletteKey.Tertiary20: {
//         return it.tertiary20;
//       }
//       case ColorPaletteKey.Tertiary30: {
//         return it.tertiary30;
//       }
//       case ColorPaletteKey.Tertiary40: {
//         return it.tertiary40;
//       }
//       case ColorPaletteKey.Tertiary50: {
//         return it.tertiary50;
//       }
//       case ColorPaletteKey.Tertiary60: {
//         return it.tertiary60;
//       }
//       case ColorPaletteKey.Tertiary70: {
//         return it.tertiary70;
//       }
//       case ColorPaletteKey.Tertiary80: {
//         return it.tertiary80;
//       }
//       case ColorPaletteKey.Tertiary90: {
//         return it.tertiary90;
//       }
//       case ColorPaletteKey.Tertiary95: {
//         return it.tertiary95;
//       }
//       case ColorPaletteKey.Tertiary99: {
//         return it.tertiary99;
//       }
//       case ColorPaletteKey.White: {
//         return it.white;
//       }

//     }
//   }
// }

// // const BlackAsNumber = 0;
// // const Error0AsNumber = 0;
// // const Error10AsNumber = 0;
// // const Error100AsNumber = 0;
// // const Error20AsNumber = 0;
// // const Error30AsNumber = 0;
// // const Error40AsNumber = 0;
// // const Error50AsNumber = 0;
// // const Error60AsNumber = 0;
// // const Error70AsNumber = 0;
// // const Error80AsNumber = 0;
// // const Error90AsNumber = 0;
// // const Error95AsNumber = 0;
// // const Error99AsNumber = 0;
// // const NeutralVariant0AsNumber = 0;
// // const NeutralVariant10AsNumber = 0;
// // const NeutralVariant100AsNumber = 0;
// // const NeutralVariant20AsNumber = 0;
// // const NeutralVariant30AsNumber = 0;
// // const NeutralVariant40AsNumber = 0;
// // const NeutralVariant50AsNumber = 0;
// // const NeutralVariant60AsNumber = 0;
// // const NeutralVariant70AsNumber = 0;
// // const NeutralVariant80AsNumber = 0;
// // const NeutralVariant90AsNumber = 0;
// // const NeutralVariant95AsNumber = 0;
// // const NeutralVariant99AsNumber = 0;
// // const Neutral0AsNumber = 0;
// // const Neutral10AsNumber = 0;
// // const Neutral100AsNumber = 0;
// // const Neutral12AsNumber = 0;
// // const Neutral17AsNumber = 0;
// // const Neutral20AsNumber = 0;
// // const Neutral22AsNumber = 0;
// // const Neutral24AsNumber = 0;
// // const Neutral30AsNumber = 0;
// // const Neutral4AsNumber = 0;
// // const Neutral40AsNumber = 0;
// // const Neutral50AsNumber = 0;
// // const Neutral6AsNumber = 0;
// // const Neutral60AsNumber = 0;
// // const Neutral70AsNumber = 0;
// // const Neutral80AsNumber = 0;
// // const Neutral87AsNumber = 0;
// // const Neutral90AsNumber = 0;
// // const Neutral92AsNumber = 0;
// // const Neutral94AsNumber = 0;
// // const Neutral95AsNumber = 0;
// // const Neutral96AsNumber = 0;
// // const Neutral98AsNumber = 0;
// // const Neutral99AsNumber = 0;
// // const Primary0AsNumber = 0;
// // const Primary10AsNumber = 0;
// // const Primary100AsNumber = 0;
// // const Primary20AsNumber = 0;
// // const Primary30AsNumber = 0;
// // const Primary40AsNumber = 0;
// // const Primary50AsNumber = 0;
// // const Primary60AsNumber = 0;
// // const Primary70AsNumber = 0;
// // const Primary80AsNumber = 0;
// // const Primary90AsNumber = 0;
// // const Primary95AsNumber = 0;
// // const Primary99AsNumber = 0;
// // const Secondary0AsNumber = 0;
// // const Secondary10AsNumber = 0;
// // const Secondary100AsNumber = 0;
// // const Secondary20AsNumber = 0;
// // const Secondary30AsNumber = 0;
// // const Secondary40AsNumber = 0;
// // const Secondary50AsNumber = 0;
// // const Secondary60AsNumber = 0;
// // const Secondary70AsNumber = 0;
// // const Secondary80AsNumber = 0;
// // const Secondary90AsNumber = 0;
// // const Secondary95AsNumber = 0;
// // const Secondary99AsNumber = 0;
// // const Tertiary0AsNumber = 0;
// // const Tertiary10AsNumber = 0;
// // const Tertiary100AsNumber = 0;
// // const Tertiary20AsNumber = 0;
// // const Tertiary30AsNumber = 0;
// // const Tertiary40AsNumber = 0;
// // const Tertiary50AsNumber = 0;
// // const Tertiary60AsNumber = 0;
// // const Tertiary70AsNumber = 0;
// // const Tertiary80AsNumber = 0;
// // const Tertiary90AsNumber = 0;
// // const Tertiary95AsNumber = 0;
// // const Tertiary99AsNumber = 0;
// // const WhiteAsNumber = 0;

// // const BlackAsString = "Black";
// // const Error0AsString = "Error0";
// // const Error10AsString = "Error10";
// // const Error100AsString = "Error100";
// // const Error20AsString = "Error20";
// // const Error30AsString = "Error30";
// // const Error40AsString = "Error40";
// // const Error50AsString = "Error50";
// // const Error60AsString = "Error60";
// // const Error70AsString = "Error70";
// // const Error80AsString = "Error80";
// // const Error90AsString = "Error90";
// // const Error95AsString = "Error95";
// // const Error99AsString = "Error99";
// // const NeutralVariant0AsString = "NeutralVariant0";
// // const NeutralVariant10AsString = "NeutralVariant10";
// // const NeutralVariant100AsString = "NeutralVariant100";
// // const NeutralVariant20AsString = "NeutralVariant20";
// // const NeutralVariant30AsString = "NeutralVariant30";
// // const NeutralVariant40AsString = "NeutralVariant40";
// // const NeutralVariant50AsString = "NeutralVariant50";
// // const NeutralVariant60AsString = "NeutralVariant60";
// // const NeutralVariant70AsString = "NeutralVariant70";
// // const NeutralVariant80AsString = "NeutralVariant80";
// // const NeutralVariant90AsString = "NeutralVariant90";
// // const NeutralVariant95AsString = "NeutralVariant95";
// // const NeutralVariant99AsString = "NeutralVariant99";
// // const Neutral0AsString = "Neutral0";
// // const Neutral10AsString = "Neutral10";
// // const Neutral100AsString = "Neutral100";
// // const Neutral12AsString = "Neutral12";
// // const Neutral17AsString = "Neutral17";
// // const Neutral20AsString = "Neutral20";
// // const Neutral22AsString = "Neutral22";
// // const Neutral24AsString = "Neutral24";
// // const Neutral30AsString = "Neutral30";
// // const Neutral4AsString = "Neutral4";
// // const Neutral40AsString = "Neutral40";
// // const Neutral50AsString = "Neutral50";
// // const Neutral6AsString = "Neutral6";
// // const Neutral60AsString = "Neutral60";
// // const Neutral70AsString = "Neutral70";
// // const Neutral80AsString = "Neutral80";
// // const Neutral87AsString = "Neutral87";
// // const Neutral90AsString = "Neutral90";
// // const Neutral92AsString = "Neutral92";
// // const Neutral94AsString = "Neutral94";
// // const Neutral95AsString = "Neutral95";
// // const Neutral96AsString = "Neutral96";
// // const Neutral98AsString = "Neutral98";
// // const Neutral99AsString = "Neutral99";
// // const Primary0AsString = "Primary0";
// // const Primary10AsString = "Primary10";
// // const Primary100AsString = "Primary100";
// // const Primary20AsString = "Primary20";
// // const Primary30AsString = "Primary30";
// // const Primary40AsString = "Primary40";
// // const Primary50AsString = "Primary50";
// // const Primary60AsString = "Primary60";
// // const Primary70AsString = "Primary70";
// // const Primary80AsString = "Primary80";
// // const Primary90AsString = "Primary90";
// // const Primary95AsString = "Primary95";
// // const Primary99AsString = "Primary99";
// // const Secondary0AsString = "Secondary0";
// // const Secondary10AsString = "Secondary10";
// // const Secondary100AsString = "Secondary100";
// // const Secondary20AsString = "Secondary20";
// // const Secondary30AsString = "Secondary30";
// // const Secondary40AsString = "Secondary40";
// // const Secondary50AsString = "Secondary50";
// // const Secondary60AsString = "Secondary60";
// // const Secondary70AsString = "Secondary70";
// // const Secondary80AsString = "Secondary80";
// // const Secondary90AsString = "Secondary90";
// // const Secondary95AsString = "Secondary95";
// // const Secondary99AsString = "Secondary99";
// // const Tertiary0AsString = "Tertiary0";
// // const Tertiary10AsString = "Tertiary10";
// // const Tertiary100AsString = "Tertiary100";
// // const Tertiary20AsString = "Tertiary20";
// // const Tertiary30AsString = "Tertiary30";
// // const Tertiary40AsString = "Tertiary40";
// // const Tertiary50AsString = "Tertiary50";
// // const Tertiary60AsString = "Tertiary60";
// // const Tertiary70AsString = "Tertiary70";
// // const Tertiary80AsString = "Tertiary80";
// // const Tertiary90AsString = "Tertiary90";
// // const Tertiary95AsString = "Tertiary95";
// // const Tertiary99AsString = "Tertiary99";
// // const WhiteAsString = "White";

// // export const Black = (): ColorPaletteKey => {
// //   return BlackAsNumber as ColorPaletteKey;
// // };
// // export const Error0 = (): ColorPaletteKey => {
// //   return Error0AsNumber as ColorPaletteKey;
// // };
// // export const Error10 = (): ColorPaletteKey => {
// //   return Error10AsNumber as ColorPaletteKey;
// // };
// // export const Error100 = (): ColorPaletteKey => {
// //   return Error100AsNumber as ColorPaletteKey;
// // };
// // export const Error20 = (): ColorPaletteKey => {
// //   return Error20AsNumber as ColorPaletteKey;
// // };
// // export const Error30 = (): ColorPaletteKey => {
// //   return Error30AsNumber as ColorPaletteKey;
// // };
// // export const Error40 = (): ColorPaletteKey => {
// //   return Error40AsNumber as ColorPaletteKey;
// // };
// // export const Error50 = (): ColorPaletteKey => {
// //   return Error50AsNumber as ColorPaletteKey;
// // };
// // export const Error60 = (): ColorPaletteKey => {
// //   return Error60AsNumber as ColorPaletteKey;
// // };
// // export const Error70 = (): ColorPaletteKey => {
// //   return Error70AsNumber as ColorPaletteKey;
// // };
// // export const Error80 = (): ColorPaletteKey => {
// //   return Error80AsNumber as ColorPaletteKey;
// // };
// // export const Error90 = (): ColorPaletteKey => {
// //   return Error90AsNumber as ColorPaletteKey;
// // };
// // export const Error95 = (): ColorPaletteKey => {
// //   return Error95AsNumber as ColorPaletteKey;
// // };
// // export const Error99 = (): ColorPaletteKey => {
// //   return Error99AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant0 = (): ColorPaletteKey => {
// //   return NeutralVariant0AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant10 = (): ColorPaletteKey => {
// //   return NeutralVariant10AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant100 = (): ColorPaletteKey => {
// //   return NeutralVariant100AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant20 = (): ColorPaletteKey => {
// //   return NeutralVariant20AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant30 = (): ColorPaletteKey => {
// //   return NeutralVariant30AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant40 = (): ColorPaletteKey => {
// //   return NeutralVariant40AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant50 = (): ColorPaletteKey => {
// //   return NeutralVariant50AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant60 = (): ColorPaletteKey => {
// //   return NeutralVariant60AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant70 = (): ColorPaletteKey => {
// //   return NeutralVariant70AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant80 = (): ColorPaletteKey => {
// //   return NeutralVariant80AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant90 = (): ColorPaletteKey => {
// //   return NeutralVariant90AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant95 = (): ColorPaletteKey => {
// //   return NeutralVariant95AsNumber as ColorPaletteKey;
// // };
// // export const NeutralVariant99 = (): ColorPaletteKey => {
// //   return NeutralVariant99AsNumber as ColorPaletteKey;
// // };
// // export const Neutral0 = (): ColorPaletteKey => {
// //   return Neutral0AsNumber as ColorPaletteKey;
// // };
// // export const Neutral10 = (): ColorPaletteKey => {
// //   return Neutral10AsNumber as ColorPaletteKey;
// // };
// // export const Neutral100 = (): ColorPaletteKey => {
// //   return Neutral100AsNumber as ColorPaletteKey;
// // };
// // export const Neutral12 = (): ColorPaletteKey => {
// //   return Neutral12AsNumber as ColorPaletteKey;
// // };
// // export const Neutral17 = (): ColorPaletteKey => {
// //   return Neutral17AsNumber as ColorPaletteKey;
// // };
// // export const Neutral20 = (): ColorPaletteKey => {
// //   return Neutral20AsNumber as ColorPaletteKey;
// // };
// // export const Neutral22 = (): ColorPaletteKey => {
// //   return Neutral22AsNumber as ColorPaletteKey;
// // };
// // export const Neutral24 = (): ColorPaletteKey => {
// //   return Neutral24AsNumber as ColorPaletteKey;
// // };
// // export const Neutral30 = (): ColorPaletteKey => {
// //   return Neutral30AsNumber as ColorPaletteKey;
// // };
// // export const Neutral4 = (): ColorPaletteKey => {
// //   return Neutral4AsNumber as ColorPaletteKey;
// // };
// // export const Neutral40 = (): ColorPaletteKey => {
// //   return Neutral40AsNumber as ColorPaletteKey;
// // };
// // export const Neutral50 = (): ColorPaletteKey => {
// //   return Neutral50AsNumber as ColorPaletteKey;
// // };
// // export const Neutral6 = (): ColorPaletteKey => {
// //   return Neutral6AsNumber as ColorPaletteKey;
// // };
// // export const Neutral60 = (): ColorPaletteKey => {
// //   return Neutral60AsNumber as ColorPaletteKey;
// // };
// // export const Neutral70 = (): ColorPaletteKey => {
// //   return Neutral70AsNumber as ColorPaletteKey;
// // };
// // export const Neutral80 = (): ColorPaletteKey => {
// //   return Neutral80AsNumber as ColorPaletteKey;
// // };
// // export const Neutral87 = (): ColorPaletteKey => {
// //   return Neutral87AsNumber as ColorPaletteKey;
// // };
// // export const Neutral90 = (): ColorPaletteKey => {
// //   return Neutral90AsNumber as ColorPaletteKey;
// // };
// // export const Neutral92 = (): ColorPaletteKey => {
// //   return Neutral92AsNumber as ColorPaletteKey;
// // };
// // export const Neutral94 = (): ColorPaletteKey => {
// //   return Neutral94AsNumber as ColorPaletteKey;
// // };
// // export const Neutral95 = (): ColorPaletteKey => {
// //   return Neutral95AsNumber as ColorPaletteKey;
// // };
// // export const Neutral96 = (): ColorPaletteKey => {
// //   return Neutral96AsNumber as ColorPaletteKey;
// // };
// // export const Neutral98 = (): ColorPaletteKey => {
// //   return Neutral98AsNumber as ColorPaletteKey;
// // };
// // export const Neutral99 = (): ColorPaletteKey => {
// //   return Neutral99AsNumber as ColorPaletteKey;
// // };
// // export const Primary0 = (): ColorPaletteKey => {
// //   return Primary0AsNumber as ColorPaletteKey;
// // };
// // export const Primary10 = (): ColorPaletteKey => {
// //   return Primary10AsNumber as ColorPaletteKey;
// // };
// // export const Primary100 = (): ColorPaletteKey => {
// //   return Primary100AsNumber as ColorPaletteKey;
// // };
// // export const Primary20 = (): ColorPaletteKey => {
// //   return Primary20AsNumber as ColorPaletteKey;
// // };
// // export const Primary30 = (): ColorPaletteKey => {
// //   return Primary30AsNumber as ColorPaletteKey;
// // };
// // export const Primary40 = (): ColorPaletteKey => {
// //   return Primary40AsNumber as ColorPaletteKey;
// // };
// // export const Primary50 = (): ColorPaletteKey => {
// //   return Primary50AsNumber as ColorPaletteKey;
// // };
// // export const Primary60 = (): ColorPaletteKey => {
// //   return Primary60AsNumber as ColorPaletteKey;
// // };
// // export const Primary70 = (): ColorPaletteKey => {
// //   return Primary70AsNumber as ColorPaletteKey;
// // };
// // export const Primary80 = (): ColorPaletteKey => {
// //   return Primary80AsNumber as ColorPaletteKey;
// // };
// // export const Primary90 = (): ColorPaletteKey => {
// //   return Primary90AsNumber as ColorPaletteKey;
// // };
// // export const Primary95 = (): ColorPaletteKey => {
// //   return Primary95AsNumber as ColorPaletteKey;
// // };
// // export const Primary99 = (): ColorPaletteKey => {
// //   return Primary99AsNumber as ColorPaletteKey;
// // };
// // export const Secondary0 = (): ColorPaletteKey => {
// //   return Secondary0AsNumber as ColorPaletteKey;
// // };
// // export const Secondary10 = (): ColorPaletteKey => {
// //   return Secondary10AsNumber as ColorPaletteKey;
// // };
// // export const Secondary100 = (): ColorPaletteKey => {
// //   return Secondary100AsNumber as ColorPaletteKey;
// // };
// // export const Secondary20 = (): ColorPaletteKey => {
// //   return Secondary20AsNumber as ColorPaletteKey;
// // };
// // export const Secondary30 = (): ColorPaletteKey => {
// //   return Secondary30AsNumber as ColorPaletteKey;
// // };
// // export const Secondary40 = (): ColorPaletteKey => {
// //   return Secondary40AsNumber as ColorPaletteKey;
// // };
// // export const Secondary50 = (): ColorPaletteKey => {
// //   return Secondary50AsNumber as ColorPaletteKey;
// // };
// // export const Secondary60 = (): ColorPaletteKey => {
// //   return Secondary60AsNumber as ColorPaletteKey;
// // };
// // export const Secondary70 = (): ColorPaletteKey => {
// //   return Secondary70AsNumber as ColorPaletteKey;
// // };
// // export const Secondary80 = (): ColorPaletteKey => {
// //   return Secondary80AsNumber as ColorPaletteKey;
// // };
// // export const Secondary90 = (): ColorPaletteKey => {
// //   return Secondary90AsNumber as ColorPaletteKey;
// // };
// // export const Secondary95 = (): ColorPaletteKey => {
// //   return Secondary95AsNumber as ColorPaletteKey;
// // };
// // export const Secondary99 = (): ColorPaletteKey => {
// //   return Secondary99AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary0 = (): ColorPaletteKey => {
// //   return Tertiary0AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary10 = (): ColorPaletteKey => {
// //   return Tertiary10AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary100 = (): ColorPaletteKey => {
// //   return Tertiary100AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary20 = (): ColorPaletteKey => {
// //   return Tertiary20AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary30 = (): ColorPaletteKey => {
// //   return Tertiary30AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary40 = (): ColorPaletteKey => {
// //   return Tertiary40AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary50 = (): ColorPaletteKey => {
// //   return Tertiary50AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary60 = (): ColorPaletteKey => {
// //   return Tertiary60AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary70 = (): ColorPaletteKey => {
// //   return Tertiary70AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary80 = (): ColorPaletteKey => {
// //   return Tertiary80AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary90 = (): ColorPaletteKey => {
// //   return Tertiary90AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary95 = (): ColorPaletteKey => {
// //   return Tertiary95AsNumber as ColorPaletteKey;
// // };
// // export const Tertiary99 = (): ColorPaletteKey => {
// //   return Tertiary99AsNumber as ColorPaletteKey;
// // };
// // export const White = (): ColorPaletteKey => {
// //   return WhiteAsNumber as ColorPaletteKey;
// // };

// // export const toString = (it: ColorPaletteKey) => {
// //   switch (it) {
// //     case BlackAsNumber: return BlackAsString;
// //     case Error0AsNumber: return Error0AsString;
// //     case Error10AsNumber: return Error10AsString;
// //     case Error100AsNumber: return Error100AsString;
// //     case Error20AsNumber: return Error20AsString;
// //     case Error30AsNumber: return Error30AsString;
// //     case Error40AsNumber: return Error40AsString;
// //     case Error50AsNumber: return Error50AsString;
// //     case Error60AsNumber: return Error60AsString;
// //     case Error70AsNumber: return Error70AsString;
// //     case Error80AsNumber: return Error80AsString;
// //     case Error90AsNumber: return Error90AsString;
// //     case Error95AsNumber: return Error95AsString;
// //     case Error99AsNumber: return Error99AsString;
// //     case NeutralVariant0AsNumber: return NeutralVariant0AsString;
// //     case NeutralVariant10AsNumber: return NeutralVariant10AsString;
// //     case NeutralVariant100AsNumber: return NeutralVariant100AsString;
// //     case NeutralVariant20AsNumber: return NeutralVariant20AsString;
// //     case NeutralVariant30AsNumber: return NeutralVariant30AsString;
// //     case NeutralVariant40AsNumber: return NeutralVariant40AsString;
// //     case NeutralVariant50AsNumber: return NeutralVariant50AsString;
// //     case NeutralVariant60AsNumber: return NeutralVariant60AsString;
// //     case NeutralVariant70AsNumber: return NeutralVariant70AsString;
// //     case NeutralVariant80AsNumber: return NeutralVariant80AsString;
// //     case NeutralVariant90AsNumber: return NeutralVariant90AsString;
// //     case NeutralVariant95AsNumber: return NeutralVariant95AsString;
// //     case NeutralVariant99AsNumber: return NeutralVariant99AsString;
// //     case Neutral0AsNumber: return Neutral0AsString;
// //     case Neutral10AsNumber: return Neutral10AsString;
// //     case Neutral100AsNumber: return Neutral100AsString;
// //     case Neutral12AsNumber: return Neutral12AsString;
// //     case Neutral17AsNumber: return Neutral17AsString;
// //     case Neutral20AsNumber: return Neutral20AsString;
// //     case Neutral22AsNumber: return Neutral22AsString;
// //     case Neutral24AsNumber: return Neutral24AsString;
// //     case Neutral30AsNumber: return Neutral30AsString;
// //     case Neutral4AsNumber: return Neutral4AsString;
// //     case Neutral40AsNumber: return Neutral40AsString;
// //     case Neutral50AsNumber: return Neutral50AsString;
// //     case Neutral6AsNumber: return Neutral6AsString;
// //     case Neutral60AsNumber: return Neutral60AsString;
// //     case Neutral70AsNumber: return Neutral70AsString;
// //     case Neutral80AsNumber: return Neutral80AsString;
// //     case Neutral87AsNumber: return Neutral87AsString;
// //     case Neutral90AsNumber: return Neutral90AsString;
// //     case Neutral92AsNumber: return Neutral92AsString;
// //     case Neutral94AsNumber: return Neutral94AsString;
// //     case Neutral95AsNumber: return Neutral95AsString;
// //     case Neutral96AsNumber: return Neutral96AsString;
// //     case Neutral98AsNumber: return Neutral98AsString;
// //     case Neutral99AsNumber: return Neutral99AsString;
// //     case Primary0AsNumber: return Primary0AsString;
// //     case Primary10AsNumber: return Primary10AsString;
// //     case Primary100AsNumber: return Primary100AsString;
// //     case Primary20AsNumber: return Primary20AsString;
// //     case Primary30AsNumber: return Primary30AsString;
// //     case Primary40AsNumber: return Primary40AsString;
// //     case Primary50AsNumber: return Primary50AsString;
// //     case Primary60AsNumber: return Primary60AsString;
// //     case Primary70AsNumber: return Primary70AsString;
// //     case Primary80AsNumber: return Primary80AsString;
// //     case Primary90AsNumber: return Primary90AsString;
// //     case Primary95AsNumber: return Primary95AsString;
// //     case Primary99AsNumber: return Primary99AsString;
// //     case Secondary0AsNumber: return Secondary0AsString;
// //     case Secondary10AsNumber: return Secondary10AsString;
// //     case Secondary100AsNumber: return Secondary100AsString;
// //     case Secondary20AsNumber: return Secondary20AsString;
// //     case Secondary30AsNumber: return Secondary30AsString;
// //     case Secondary40AsNumber: return Secondary40AsString;
// //     case Secondary50AsNumber: return Secondary50AsString;
// //     case Secondary60AsNumber: return Secondary60AsString;
// //     case Secondary70AsNumber: return Secondary70AsString;
// //     case Secondary80AsNumber: return Secondary80AsString;
// //     case Secondary90AsNumber: return Secondary90AsString;
// //     case Secondary95AsNumber: return Secondary95AsString;
// //     case Secondary99AsNumber: return Secondary99AsString;
// //     case Tertiary0AsNumber: return Tertiary0AsString;
// //     case Tertiary10AsNumber: return Tertiary10AsString;
// //     case Tertiary100AsNumber: return Tertiary100AsString;
// //     case Tertiary20AsNumber: return Tertiary20AsString;
// //     case Tertiary30AsNumber: return Tertiary30AsString;
// //     case Tertiary40AsNumber: return Tertiary40AsString;
// //     case Tertiary50AsNumber: return Tertiary50AsString;
// //     case Tertiary60AsNumber: return Tertiary60AsString;
// //     case Tertiary70AsNumber: return Tertiary70AsString;
// //     case Tertiary80AsNumber: return Tertiary80AsString;
// //     case Tertiary90AsNumber: return Tertiary90AsString;
// //     case Tertiary95AsNumber: return Tertiary95AsString;
// //     case Tertiary99AsNumber: return Tertiary99AsString;
// //     case WhiteAsNumber: return WhiteAsString;
// //     default: throw new Error("unhandled switch case");
// //   }
// // };
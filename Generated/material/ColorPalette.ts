import { ColorPalette } from "@internal/prelude";

export const enum ColorPaletteKey {
    Black = -1,
    Error0 = 0,
    Error10 = 1,
    Error100 = 2,
    Error20 = 3,
    Error30 = 4,
    Error40 = 5,
    Error50 = 6,
    Error60 = 7,
    Error70 = 8,
    Error80 = 9,
    Error90 = 10,
    Error95 = 11,
    Error99 = 12,
    NeutralVariant0 = 13,
    NeutralVariant10 = 14,
    NeutralVariant100 = 15,
    NeutralVariant20 = 16,
    NeutralVariant30 = 17,
    NeutralVariant40 = 18,
    NeutralVariant50 = 19,
    NeutralVariant60 = 20,
    NeutralVariant70 = 21,
    NeutralVariant80 = 22,
    NeutralVariant90 = 23,
    NeutralVariant95 = 24,
    NeutralVariant99 = 25,
    Neutral0 = 26,
    Neutral10 = 27,
    Neutral100 = 28,
    Neutral12 = 29,
    Neutral17 = 30,
    Neutral20 = 31,
    Neutral22 = 32,
    Neutral24 = 33,
    Neutral30 = 34,
    Neutral4 = 35,
    Neutral40 = 36,
    Neutral50 = 37,
    Neutral6 = 38,
    Neutral60 = 39,
    Neutral70 = 40,
    Neutral80 = 41,
    Neutral87 = 42,
    Neutral90 = 43,
    Neutral92 = 44,
    Neutral94 = 45,
    Neutral95 = 46,
    Neutral96 = 47,
    Neutral98 = 48,
    Neutral99 = 49,
    Primary0 = 50,
    Primary10 = 51,
    Primary100 = 52,
    Primary20 = 53,
    Primary30 = 54,
    Primary40 = 55,
    Primary50 = 56,
    Primary60 = 57,
    Primary70 = 58,
    Primary80 = 59,
    Primary90 = 60,
    Primary95 = 61,
    Primary99 = 62,
    Secondary0 = 63,
    Secondary10 = 64,
    Secondary100 = 65,
    Secondary20 = 66,
    Secondary30 = 67,
    Secondary40 = 68,
    Secondary50 = 69,
    Secondary60 = 70,
    Secondary70 = 71,
    Secondary80 = 72,
    Secondary90 = 73,
    Secondary95 = 74,
    Secondary99 = 75,
    Tertiary0 = 76,
    Tertiary10 = 77,
    Tertiary100 = 78,
    Tertiary20 = 79,
    Tertiary30 = 80,
    Tertiary40 = 81,
    Tertiary50 = 82,
    Tertiary60 = 83,
    Tertiary70 = 84,
    Tertiary80 = 85,
    Tertiary90 = 86,
    Tertiary95 = 87,
    Tertiary99 = 88,
    White = 89
}

export class ColorPaletteRef.Any {
    static isRef(it: unknown): it is ColorPaletteRef.Any {
        return it instanceof ColorPaletteRef.Any;
    }
}

export class ColorPaletteBlackRef extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Black = ColorPaletteKey.Black;

    get(colorPalette: ColorPalette) {
        return colorPalette.black;
    }

    toName() {
        return "ColorPaletteBlack";
    }
}

export class ColorPaletteError0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error0 = ColorPaletteKey.Error0;

    get(colorPalette: ColorPalette) {
        return colorPalette.error0;
    }

    toName() {
        return "ColorPaletteError0";
    }
}

export class ColorPaletteError10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error10 = ColorPaletteKey.Error10;

    get(colorPalette: ColorPalette) {
        return colorPalette.error10;
    }

    toName() {
        return "ColorPaletteError10";
    }
}

export class ColorPaletteError100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error100 = ColorPaletteKey.Error100;

    get(colorPalette: ColorPalette) {
        return colorPalette.error100;
    }

    toName() {
        return "ColorPaletteError100";
    }
}

export class ColorPaletteError20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error20 = ColorPaletteKey.Error20;

    get(colorPalette: ColorPalette) {
        return colorPalette.error20;
    }

    toName() {
        return "ColorPaletteError20";
    }
}

export class ColorPaletteError30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error30 = ColorPaletteKey.Error30;

    get(colorPalette: ColorPalette) {
        return colorPalette.error30;
    }

    toName() {
        return "ColorPaletteError30";
    }
}

export class ColorPaletteError40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error40 = ColorPaletteKey.Error40;

    get(colorPalette: ColorPalette) {
        return colorPalette.error40;
    }

    toName() {
        return "ColorPaletteError40";
    }
}

export class ColorPaletteError50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error50 = ColorPaletteKey.Error50;

    get(colorPalette: ColorPalette) {
        return colorPalette.error50;
    }

    toName() {
        return "ColorPaletteError50";
    }
}

export class ColorPaletteError60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error60 = ColorPaletteKey.Error60;

    get(colorPalette: ColorPalette) {
        return colorPalette.error60;
    }

    toName() {
        return "ColorPaletteError60";
    }
}

export class ColorPaletteError70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error70 = ColorPaletteKey.Error70;

    get(colorPalette: ColorPalette) {
        return colorPalette.error70;
    }

    toName() {
        return "ColorPaletteError70";
    }
}

export class ColorPaletteError80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error80 = ColorPaletteKey.Error80;

    get(colorPalette: ColorPalette) {
        return colorPalette.error80;
    }

    toName() {
        return "ColorPaletteError80";
    }
}

export class ColorPaletteError90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error90 = ColorPaletteKey.Error90;

    get(colorPalette: ColorPalette) {
        return colorPalette.error90;
    }

    toName() {
        return "ColorPaletteError90";
    }
}

export class ColorPaletteError95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error95 = ColorPaletteKey.Error95;

    get(colorPalette: ColorPalette) {
        return colorPalette.error95;
    }

    toName() {
        return "ColorPaletteError95";
    }
}

export class ColorPaletteError99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Error99 = ColorPaletteKey.Error99;

    get(colorPalette: ColorPalette) {
        return colorPalette.error99;
    }

    toName() {
        return "ColorPaletteError99";
    }
}

export class ColorPaletteNeutralVariant0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant0 = ColorPaletteKey.NeutralVariant0;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant0;
    }

    toName() {
        return "ColorPaletteNeutralVariant0";
    }
}

export class ColorPaletteNeutralVariant10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant10 = ColorPaletteKey.NeutralVariant10;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant10;
    }

    toName() {
        return "ColorPaletteNeutralVariant10";
    }
}

export class ColorPaletteNeutralVariant100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant100 = ColorPaletteKey.NeutralVariant100;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant100;
    }

    toName() {
        return "ColorPaletteNeutralVariant100";
    }
}

export class ColorPaletteNeutralVariant20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant20 = ColorPaletteKey.NeutralVariant20;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant20;
    }

    toName() {
        return "ColorPaletteNeutralVariant20";
    }
}

export class ColorPaletteNeutralVariant30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant30 = ColorPaletteKey.NeutralVariant30;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant30;
    }

    toName() {
        return "ColorPaletteNeutralVariant30";
    }
}

export class ColorPaletteNeutralVariant40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant40 = ColorPaletteKey.NeutralVariant40;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant40;
    }

    toName() {
        return "ColorPaletteNeutralVariant40";
    }
}

export class ColorPaletteNeutralVariant50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant50 = ColorPaletteKey.NeutralVariant50;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant50;
    }

    toName() {
        return "ColorPaletteNeutralVariant50";
    }
}

export class ColorPaletteNeutralVariant60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant60 = ColorPaletteKey.NeutralVariant60;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant60;
    }

    toName() {
        return "ColorPaletteNeutralVariant60";
    }
}

export class ColorPaletteNeutralVariant70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant70 = ColorPaletteKey.NeutralVariant70;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant70;
    }

    toName() {
        return "ColorPaletteNeutralVariant70";
    }
}

export class ColorPaletteNeutralVariant80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant80 = ColorPaletteKey.NeutralVariant80;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant80;
    }

    toName() {
        return "ColorPaletteNeutralVariant80";
    }
}

export class ColorPaletteNeutralVariant90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant90 = ColorPaletteKey.NeutralVariant90;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant90;
    }

    toName() {
        return "ColorPaletteNeutralVariant90";
    }
}

export class ColorPaletteNeutralVariant95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant95 = ColorPaletteKey.NeutralVariant95;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant95;
    }

    toName() {
        return "ColorPaletteNeutralVariant95";
    }
}

export class ColorPaletteNeutralVariant99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.NeutralVariant99 = ColorPaletteKey.NeutralVariant99;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutralVariant99;
    }

    toName() {
        return "ColorPaletteNeutralVariant99";
    }
}

export class ColorPaletteNeutral0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral0 = ColorPaletteKey.Neutral0;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral0;
    }

    toName() {
        return "ColorPaletteNeutral0";
    }
}

export class ColorPaletteNeutral10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral10 = ColorPaletteKey.Neutral10;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral10;
    }

    toName() {
        return "ColorPaletteNeutral10";
    }
}

export class ColorPaletteNeutral100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral100 = ColorPaletteKey.Neutral100;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral100;
    }

    toName() {
        return "ColorPaletteNeutral100";
    }
}

export class ColorPaletteNeutral12Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral12 = ColorPaletteKey.Neutral12;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral12;
    }

    toName() {
        return "ColorPaletteNeutral12";
    }
}

export class ColorPaletteNeutral17Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral17 = ColorPaletteKey.Neutral17;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral17;
    }

    toName() {
        return "ColorPaletteNeutral17";
    }
}

export class ColorPaletteNeutral20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral20 = ColorPaletteKey.Neutral20;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral20;
    }

    toName() {
        return "ColorPaletteNeutral20";
    }
}

export class ColorPaletteNeutral22Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral22 = ColorPaletteKey.Neutral22;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral22;
    }

    toName() {
        return "ColorPaletteNeutral22";
    }
}

export class ColorPaletteNeutral24Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral24 = ColorPaletteKey.Neutral24;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral24;
    }

    toName() {
        return "ColorPaletteNeutral24";
    }
}

export class ColorPaletteNeutral30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral30 = ColorPaletteKey.Neutral30;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral30;
    }

    toName() {
        return "ColorPaletteNeutral30";
    }
}

export class ColorPaletteNeutral4Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral4 = ColorPaletteKey.Neutral4;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral4;
    }

    toName() {
        return "ColorPaletteNeutral4";
    }
}

export class ColorPaletteNeutral40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral40 = ColorPaletteKey.Neutral40;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral40;
    }

    toName() {
        return "ColorPaletteNeutral40";
    }
}

export class ColorPaletteNeutral50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral50 = ColorPaletteKey.Neutral50;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral50;
    }

    toName() {
        return "ColorPaletteNeutral50";
    }
}

export class ColorPaletteNeutral6Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral6 = ColorPaletteKey.Neutral6;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral6;
    }

    toName() {
        return "ColorPaletteNeutral6";
    }
}

export class ColorPaletteNeutral60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral60 = ColorPaletteKey.Neutral60;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral60;
    }

    toName() {
        return "ColorPaletteNeutral60";
    }
}

export class ColorPaletteNeutral70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral70 = ColorPaletteKey.Neutral70;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral70;
    }

    toName() {
        return "ColorPaletteNeutral70";
    }
}

export class ColorPaletteNeutral80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral80 = ColorPaletteKey.Neutral80;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral80;
    }

    toName() {
        return "ColorPaletteNeutral80";
    }
}

export class ColorPaletteNeutral87Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral87 = ColorPaletteKey.Neutral87;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral87;
    }

    toName() {
        return "ColorPaletteNeutral87";
    }
}

export class ColorPaletteNeutral90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral90 = ColorPaletteKey.Neutral90;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral90;
    }

    toName() {
        return "ColorPaletteNeutral90";
    }
}

export class ColorPaletteNeutral92Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral92 = ColorPaletteKey.Neutral92;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral92;
    }

    toName() {
        return "ColorPaletteNeutral92";
    }
}

export class ColorPaletteNeutral94Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral94 = ColorPaletteKey.Neutral94;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral94;
    }

    toName() {
        return "ColorPaletteNeutral94";
    }
}

export class ColorPaletteNeutral95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral95 = ColorPaletteKey.Neutral95;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral95;
    }

    toName() {
        return "ColorPaletteNeutral95";
    }
}

export class ColorPaletteNeutral96Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral96 = ColorPaletteKey.Neutral96;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral96;
    }

    toName() {
        return "ColorPaletteNeutral96";
    }
}

export class ColorPaletteNeutral98Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral98 = ColorPaletteKey.Neutral98;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral98;
    }

    toName() {
        return "ColorPaletteNeutral98";
    }
}

export class ColorPaletteNeutral99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Neutral99 = ColorPaletteKey.Neutral99;

    get(colorPalette: ColorPalette) {
        return colorPalette.neutral99;
    }

    toName() {
        return "ColorPaletteNeutral99";
    }
}

export class ColorPalettePrimary0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary0 = ColorPaletteKey.Primary0;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary0;
    }

    toName() {
        return "ColorPalettePrimary0";
    }
}

export class ColorPalettePrimary10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary10 = ColorPaletteKey.Primary10;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary10;
    }

    toName() {
        return "ColorPalettePrimary10";
    }
}

export class ColorPalettePrimary100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary100 = ColorPaletteKey.Primary100;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary100;
    }

    toName() {
        return "ColorPalettePrimary100";
    }
}

export class ColorPalettePrimary20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary20 = ColorPaletteKey.Primary20;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary20;
    }

    toName() {
        return "ColorPalettePrimary20";
    }
}

export class ColorPalettePrimary30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary30 = ColorPaletteKey.Primary30;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary30;
    }

    toName() {
        return "ColorPalettePrimary30";
    }
}

export class ColorPalettePrimary40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary40 = ColorPaletteKey.Primary40;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary40;
    }

    toName() {
        return "ColorPalettePrimary40";
    }
}

export class ColorPalettePrimary50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary50 = ColorPaletteKey.Primary50;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary50;
    }

    toName() {
        return "ColorPalettePrimary50";
    }
}

export class ColorPalettePrimary60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary60 = ColorPaletteKey.Primary60;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary60;
    }

    toName() {
        return "ColorPalettePrimary60";
    }
}

export class ColorPalettePrimary70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary70 = ColorPaletteKey.Primary70;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary70;
    }

    toName() {
        return "ColorPalettePrimary70";
    }
}

export class ColorPalettePrimary80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary80 = ColorPaletteKey.Primary80;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary80;
    }

    toName() {
        return "ColorPalettePrimary80";
    }
}

export class ColorPalettePrimary90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary90 = ColorPaletteKey.Primary90;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary90;
    }

    toName() {
        return "ColorPalettePrimary90";
    }
}

export class ColorPalettePrimary95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary95 = ColorPaletteKey.Primary95;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary95;
    }

    toName() {
        return "ColorPalettePrimary95";
    }
}

export class ColorPalettePrimary99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Primary99 = ColorPaletteKey.Primary99;

    get(colorPalette: ColorPalette) {
        return colorPalette.primary99;
    }

    toName() {
        return "ColorPalettePrimary99";
    }
}

export class ColorPaletteSecondary0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary0 = ColorPaletteKey.Secondary0;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary0;
    }

    toName() {
        return "ColorPaletteSecondary0";
    }
}

export class ColorPaletteSecondary10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary10 = ColorPaletteKey.Secondary10;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary10;
    }

    toName() {
        return "ColorPaletteSecondary10";
    }
}

export class ColorPaletteSecondary100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary100 = ColorPaletteKey.Secondary100;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary100;
    }

    toName() {
        return "ColorPaletteSecondary100";
    }
}

export class ColorPaletteSecondary20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary20 = ColorPaletteKey.Secondary20;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary20;
    }

    toName() {
        return "ColorPaletteSecondary20";
    }
}

export class ColorPaletteSecondary30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary30 = ColorPaletteKey.Secondary30;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary30;
    }

    toName() {
        return "ColorPaletteSecondary30";
    }
}

export class ColorPaletteSecondary40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary40 = ColorPaletteKey.Secondary40;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary40;
    }

    toName() {
        return "ColorPaletteSecondary40";
    }
}

export class ColorPaletteSecondary50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary50 = ColorPaletteKey.Secondary50;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary50;
    }

    toName() {
        return "ColorPaletteSecondary50";
    }
}

export class ColorPaletteSecondary60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary60 = ColorPaletteKey.Secondary60;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary60;
    }

    toName() {
        return "ColorPaletteSecondary60";
    }
}

export class ColorPaletteSecondary70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary70 = ColorPaletteKey.Secondary70;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary70;
    }

    toName() {
        return "ColorPaletteSecondary70";
    }
}

export class ColorPaletteSecondary80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary80 = ColorPaletteKey.Secondary80;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary80;
    }

    toName() {
        return "ColorPaletteSecondary80";
    }
}

export class ColorPaletteSecondary90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary90 = ColorPaletteKey.Secondary90;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary90;
    }

    toName() {
        return "ColorPaletteSecondary90";
    }
}

export class ColorPaletteSecondary95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary95 = ColorPaletteKey.Secondary95;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary95;
    }

    toName() {
        return "ColorPaletteSecondary95";
    }
}

export class ColorPaletteSecondary99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Secondary99 = ColorPaletteKey.Secondary99;

    get(colorPalette: ColorPalette) {
        return colorPalette.secondary99;
    }

    toName() {
        return "ColorPaletteSecondary99";
    }
}

export class ColorPaletteTertiary0Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary0 = ColorPaletteKey.Tertiary0;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary0;
    }

    toName() {
        return "ColorPaletteTertiary0";
    }
}

export class ColorPaletteTertiary10Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary10 = ColorPaletteKey.Tertiary10;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary10;
    }

    toName() {
        return "ColorPaletteTertiary10";
    }
}

export class ColorPaletteTertiary100Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary100 = ColorPaletteKey.Tertiary100;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary100;
    }

    toName() {
        return "ColorPaletteTertiary100";
    }
}

export class ColorPaletteTertiary20Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary20 = ColorPaletteKey.Tertiary20;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary20;
    }

    toName() {
        return "ColorPaletteTertiary20";
    }
}

export class ColorPaletteTertiary30Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary30 = ColorPaletteKey.Tertiary30;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary30;
    }

    toName() {
        return "ColorPaletteTertiary30";
    }
}

export class ColorPaletteTertiary40Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary40 = ColorPaletteKey.Tertiary40;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary40;
    }

    toName() {
        return "ColorPaletteTertiary40";
    }
}

export class ColorPaletteTertiary50Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary50 = ColorPaletteKey.Tertiary50;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary50;
    }

    toName() {
        return "ColorPaletteTertiary50";
    }
}

export class ColorPaletteTertiary60Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary60 = ColorPaletteKey.Tertiary60;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary60;
    }

    toName() {
        return "ColorPaletteTertiary60";
    }
}

export class ColorPaletteTertiary70Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary70 = ColorPaletteKey.Tertiary70;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary70;
    }

    toName() {
        return "ColorPaletteTertiary70";
    }
}

export class ColorPaletteTertiary80Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary80 = ColorPaletteKey.Tertiary80;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary80;
    }

    toName() {
        return "ColorPaletteTertiary80";
    }
}

export class ColorPaletteTertiary90Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary90 = ColorPaletteKey.Tertiary90;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary90;
    }

    toName() {
        return "ColorPaletteTertiary90";
    }
}

export class ColorPaletteTertiary95Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary95 = ColorPaletteKey.Tertiary95;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary95;
    }

    toName() {
        return "ColorPaletteTertiary95";
    }
}

export class ColorPaletteTertiary99Ref extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.Tertiary99 = ColorPaletteKey.Tertiary99;

    get(colorPalette: ColorPalette) {
        return colorPalette.tertiary99;
    }

    toName() {
        return "ColorPaletteTertiary99";
    }
}

export class ColorPaletteWhiteRef extends ColorPaletteRef.Any {
    readonly discriminant: ColorPaletteKey.White = ColorPaletteKey.White;

    get(colorPalette: ColorPalette) {
        return colorPalette.white;
    }

    toName() {
        return "ColorPaletteWhite";
    }
}

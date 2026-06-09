import { FontFamily, FontSize, FontTracking, FontWeight, LineHeight, Typescale } from "@internal/prelude";

export const enum TypeRoleKey {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  BodyLarge,
  BodyMedium,
  BodySmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  EmphasizedDisplayLarge,
  EmphasizedDisplayMedium,
  EmphasizedDisplaySmall,
  EmphasizedHeadlineLarge,
  EmphasizedHeadlineMedium,
  EmphasizedHeadlineSmall,
  EmphasizedTitleLarge,
  EmphasizedTitleMedium,
  EmphasizedTitleSmall,
  EmphasizedBodyLarge,
  EmphasizedBodyMedium,
  EmphasizedBodySmall,
  EmphasizedLabelLarge,
  EmphasizedLabelMedium,
  EmphasizedLabelSmall,
}

export class TypeRoleRef {
  // We only need generic key when "get" can return values of multiple types
  private constructor(readonly key: TypeRoleKey) {}

  static DisplayLarge() {
    return new TypeRoleRef(TypeRoleKey.DisplayLarge);
  }
  static DisplayMedium() {
    return new TypeRoleRef(TypeRoleKey.DisplayMedium);
  }
  static DisplaySmall() {
    return new TypeRoleRef(TypeRoleKey.DisplaySmall);
  }
  static HeadlineLarge() {
    return new TypeRoleRef(TypeRoleKey.HeadlineLarge);
  }
  static HeadlineMedium() {
    return new TypeRoleRef(TypeRoleKey.HeadlineMedium);
  }
  static HeadlineSmall() {
    return new TypeRoleRef(TypeRoleKey.HeadlineSmall);
  }
  static TitleLarge() {
    return new TypeRoleRef(TypeRoleKey.TitleLarge);
  }
  static TitleMedium() {
    return new TypeRoleRef(TypeRoleKey.TitleMedium);
  }
  static TitleSmall() {
    return new TypeRoleRef(TypeRoleKey.TitleSmall);
  }
  static BodyLarge() {
    return new TypeRoleRef(TypeRoleKey.BodyLarge);
  }
  static BodyMedium() {
    return new TypeRoleRef(TypeRoleKey.BodyMedium);
  }
  static BodySmall() {
    return new TypeRoleRef(TypeRoleKey.BodySmall);
  }
  static LabelLarge() {
    return new TypeRoleRef(TypeRoleKey.LabelLarge);
  }
  static LabelMedium() {
    return new TypeRoleRef(TypeRoleKey.LabelMedium);
  }
  static LabelSmall() {
    return new TypeRoleRef(TypeRoleKey.LabelSmall);
  }
  static EmphasizedDisplayLarge() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedDisplayLarge);
  }
  static EmphasizedDisplayMedium() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedDisplayMedium);
  }
  static EmphasizedDisplaySmall() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedDisplaySmall);
  }
  static EmphasizedHeadlineLarge() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedHeadlineLarge);
  }
  static EmphasizedHeadlineMedium() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedHeadlineMedium);
  }
  static EmphasizedHeadlineSmall() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedHeadlineSmall);
  }
  static EmphasizedTitleLarge() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedTitleLarge);
  }
  static EmphasizedTitleMedium() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedTitleMedium);
  }
  static EmphasizedTitleSmall() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedTitleSmall);
  }
  static EmphasizedBodyLarge() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedBodyLarge);
  }
  static EmphasizedBodyMedium() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedBodyMedium);
  }
  static EmphasizedBodySmall() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedBodySmall);
  }
  static EmphasizedLabelLarge() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedLabelLarge);
  }
  static EmphasizedLabelMedium() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedLabelMedium);
  }
  static EmphasizedLabelSmall() {
    return new TypeRoleRef(TypeRoleKey.EmphasizedLabelSmall);
  }

  family() {
    return TypeRolePropertyRef.Family(this);
  }

  weight() {
    return TypeRolePropertyRef.Weight(this);
  }

  size() {
    return TypeRolePropertyRef.Size(this);
  }

  tracking() {
    return TypeRolePropertyRef.Tracking(this);
  }

  lineHeight() {
    return TypeRolePropertyRef.LineHeight(this);
  }

  get(typescale: Typescale) {
    switch (this.key) {
      case TypeRoleKey.DisplayLarge: return typescale.displayLarge;
      case TypeRoleKey.DisplayMedium: return typescale.displayMedium;
      case TypeRoleKey.DisplaySmall: return typescale.displaySmall;
      case TypeRoleKey.HeadlineLarge: return typescale.headlineLarge;
      case TypeRoleKey.HeadlineMedium: return typescale.headlineMedium;
      case TypeRoleKey.HeadlineSmall: return typescale.headlineSmall;
      case TypeRoleKey.TitleLarge: return typescale.titleLarge;
      case TypeRoleKey.TitleMedium: return typescale.titleMedium;
      case TypeRoleKey.TitleSmall: return typescale.titleSmall;
      case TypeRoleKey.BodyLarge: return typescale.bodyLarge;
      case TypeRoleKey.BodyMedium: return typescale.bodyMedium;
      case TypeRoleKey.BodySmall: return typescale.bodySmall;
      case TypeRoleKey.LabelLarge: return typescale.labelLarge;
      case TypeRoleKey.LabelMedium: return typescale.labelMedium;
      case TypeRoleKey.LabelSmall: return typescale.labelSmall;
      case TypeRoleKey.EmphasizedDisplayLarge: return typescale.emphasizedDisplayLarge;
      case TypeRoleKey.EmphasizedDisplayMedium: return typescale.emphasizedDisplayMedium;
      case TypeRoleKey.EmphasizedDisplaySmall: return typescale.emphasizedDisplaySmall;
      case TypeRoleKey.EmphasizedHeadlineLarge: return typescale.emphasizedHeadlineLarge;
      case TypeRoleKey.EmphasizedHeadlineMedium: return typescale.emphasizedHeadlineMedium;
      case TypeRoleKey.EmphasizedHeadlineSmall: return typescale.emphasizedHeadlineSmall;
      case TypeRoleKey.EmphasizedTitleLarge: return typescale.emphasizedTitleLarge;
      case TypeRoleKey.EmphasizedTitleMedium: return typescale.emphasizedTitleMedium;
      case TypeRoleKey.EmphasizedTitleSmall: return typescale.emphasizedTitleSmall;
      case TypeRoleKey.EmphasizedBodyLarge: return typescale.emphasizedBodyLarge;
      case TypeRoleKey.EmphasizedBodyMedium: return typescale.emphasizedBodyMedium;
      case TypeRoleKey.EmphasizedBodySmall: return typescale.emphasizedBodySmall;
      case TypeRoleKey.EmphasizedLabelLarge: return typescale.emphasizedLabelLarge;
      case TypeRoleKey.EmphasizedLabelMedium: return typescale.emphasizedLabelMedium;
      case TypeRoleKey.EmphasizedLabelSmall: return typescale.emphasizedLabelSmall;
    }
  }
}

export const enum TypeRolePropertyKey {
  Family,
  Weight,
  Size,
  Tracking,
  LineHeight,
}

export type TypeRoleFamilyRef = TypeRolePropertyRef<TypeRolePropertyKey.Family>;
export type TypeRoleWeightRef = TypeRolePropertyRef<TypeRolePropertyKey.Weight>;
export type TypeRoleSizeRef = TypeRolePropertyRef<TypeRolePropertyKey.Size>;
export type TypeRoleTrackingRef = TypeRolePropertyRef<TypeRolePropertyKey.Tracking>;
export type TypeRoleLineHeightRef = TypeRolePropertyRef<TypeRolePropertyKey.LineHeight>;

export class TypeRolePropertyRef<Key extends TypeRolePropertyKey> {
  private constructor(
    readonly propertyKey: Key,
    readonly roleRef: TypeRoleRef,
  ) {}

  static Family(roleRef: TypeRoleRef) {
    return new TypeRolePropertyRef(TypeRolePropertyKey.Family, roleRef);
  }

  static Weight(roleRef: TypeRoleRef) {
    return new TypeRolePropertyRef(TypeRolePropertyKey.Weight, roleRef);
  }

  static Size(roleRef: TypeRoleRef) {
    return new TypeRolePropertyRef(TypeRolePropertyKey.Size, roleRef);
  }

  static Tracking(roleRef: TypeRoleRef) {
    return new TypeRolePropertyRef(TypeRolePropertyKey.Tracking, roleRef);
  }

  static LineHeight(roleRef: TypeRoleRef) {
    return new TypeRolePropertyRef(TypeRolePropertyKey.LineHeight, roleRef);
  }

  get(this: TypeRoleFamilyRef, typescale: Typescale): FontFamily
  get(this: TypeRoleWeightRef, typescale: Typescale): FontWeight
  get(this: TypeRoleSizeRef, typescale: Typescale): FontSize
  get(this: TypeRoleTrackingRef, typescale: Typescale): FontTracking
  get(this: TypeRoleLineHeightRef, typescale: Typescale): LineHeight
  get(typescale: Typescale) {
    const role = this.roleRef.get(typescale);

    switch (this.propertyKey) {
      case TypeRolePropertyKey.Family: return role.family;
      case TypeRolePropertyKey.Weight: return role.weight;
      case TypeRolePropertyKey.Size: return role.size;
      case TypeRolePropertyKey.Tracking: return role.tracking;
      case TypeRolePropertyKey.LineHeight: return role.lineHeight;
    }
  }
}

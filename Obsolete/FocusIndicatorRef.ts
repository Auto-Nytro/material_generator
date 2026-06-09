import { FocusIndicator } from "@internal/prelude";

export const enum FocusIndicatorKey {
  Thickness,
  OuterOffset,
  InnerOffset,
}

export class FocusIndicatorRef<Discriminant extends FocusIndicatorKey> {
  private constructor(readonly discriminant: Discriminant) {}

  private static readonly internalThickness = new FocusIndicatorRef(FocusIndicatorKey.Thickness);
  private static readonly internalOuterOffset = new FocusIndicatorRef(FocusIndicatorKey.OuterOffset);
  private static readonly internalInnerOffset = new FocusIndicatorRef(FocusIndicatorKey.InnerOffset);

  static Thickness() {
    return this.internalThickness;
  }
  static OuterOffset() {
    return this.internalOuterOffset;
  }
  static InnerOffset() {
    return this.internalInnerOffset;
  }

  deref(focusIndicator: FocusIndicator) {
    switch (this.discriminant) {
      case FocusIndicatorKey.Thickness: return focusIndicator.thickness;
      case FocusIndicatorKey.OuterOffset: return focusIndicator.outerOffset;
      case FocusIndicatorKey.InnerOffset: return focusIndicator.innerOffset;
    }
  }
}

export type FocusIndicatorRefThickness = FocusIndicatorRef<FocusIndicatorKey.Thickness>;
export type FocusIndicatorRefOuterOffset = FocusIndicatorRef<FocusIndicatorKey.OuterOffset>;
export type FocusIndicatorRefInnerOffset = FocusIndicatorRef<FocusIndicatorKey.InnerOffset>;

export type FocusIndicatorRefOffset = (
  | FocusIndicatorRefOuterOffset
  | FocusIndicatorRefInnerOffset
);
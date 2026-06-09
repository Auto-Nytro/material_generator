import { Dp, CircleRadius } from "@internal/prelude";
import { Var } from "./Var.ts";

const _None = null as unknown as Var<Dp>;
const _ExtraSmall = null as unknown as Var<Dp>;
const _Small = null as unknown as Var<Dp>;
const _Medium = null as unknown as Var<Dp>;
const _Large = null as unknown as Var<Dp>;
const _LargeIncreased = null as unknown as Var<Dp>;
const _ExtraLarge = null as unknown as Var<Dp>;
const _ExtraLargeIncreased = null as unknown as Var<Dp>;
const _ExtraExtraLarge = null as unknown as Var<Dp>;
const _Full = null as unknown as Var<CircleRadius>;

export const None = () => _None;
export const ExtraSmall = () => _ExtraSmall;
export const Small = () => _Small;
export const Medium = () => _Medium;
export const Large = () => _Large;
export const LargeIncreased = () => _LargeIncreased;
export const ExtraLarge = () => _ExtraLarge;
export const ExtraLargeIncreased = () => _ExtraLargeIncreased;
export const ExtraExtraLarge = () => _ExtraExtraLarge;
export const Full = () => _Full;
export interface Var<T> {
  readonly implementMePlease: T
}

export type MaybeVar<T> = (
  | T 
  | Var<T>
);
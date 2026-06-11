- data types factories have inconsistent names: create, baseline, Baseline

- HexColor should just be a generic Color

- Data types export methods as properties of an exported object with the same name as the type. Remove these objects and instead use this export pattern in Main.ts files:
export * as MyType from "..."
export type MyType = MyType.MyType;
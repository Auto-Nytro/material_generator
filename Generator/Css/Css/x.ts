
export interface Writer {

}

export const createGlobalVar = (
  it: Writer,
  name: string, 
  value: string,
) => {};

export const Writer = {
  var: createGlobalVar,
};
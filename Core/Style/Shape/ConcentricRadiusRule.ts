// When you have two nested shapes with a gap between them, 
// using the same corner radius for both makes the outer shape 
// look "flatter" or poorly aligned.
// 
// Concentric Radius Rule: 
// To make the corners look perfectly parallel and maintain a 
// consistent visual "tunnel," the outer radius must be larger 
// than the inner radius. The math to fix this is:
//
// Outer Radius = Inner Radius + gap + (thickness / 2)
//
// NOTE: One major use case for this is a button with a focus ring
//       around it.
// outer radius = inne radius + offset + thickness / 2

// TODO: Should these numbers be pixels?
export const calculate = (
  innerRadius: number, offset: number, thickness: number): number => {
  return innerRadius + offset + thickness / 2;   
};

export const ConcentricRadiusRule = {
  calculate,
};
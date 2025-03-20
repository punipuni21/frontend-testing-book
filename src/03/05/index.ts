export class RangeError extends Error {}

function checkRange(value: number) {
  if (value < 0 || value > 100) {
    throw new RangeError("input value must be between 0 and 100");
  }
}

export function add(a: number, b: number): number {
  checkRange(a);
  checkRange(b);
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number): number {
  checkRange(a);
  checkRange(b);
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}

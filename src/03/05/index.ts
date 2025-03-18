export function add(a: number, b: number): number {
  if (a < 0 || a > 100) {
    throw new Error("input value must be between 0 and 100");
  }
  if (b < 0 || b > 100) {
    throw new Error("input value must be between 0 and 100");
  }

  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

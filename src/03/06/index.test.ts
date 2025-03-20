test("true value verification", () => {
  expect(1).toBeTruthy();
});

test("false value verification", () => {
  expect(0).toBeFalsy();
});

test("null or undefined value verification", () => {
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeDefined();
});

describe("value verification", () => {
  const value = 2 + 2;
  test("equality verification", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("greater than or equal to verification", () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  });

  test("less than or equal to verification", () => {
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  });
});

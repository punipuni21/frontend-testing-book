import { checkConfig } from "./checkConfig";

test("mock func can check contents of the argument", () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith({ mock: true, feature: { spy: true } });
});

test("expect.objectContaining", () => {
  const mockFn = jest.fn();
  checkConfig(mockFn);
  expect(mockFn).toHaveBeenCalledWith(
    expect.objectContaining({
      feature: { spy: true },
    })
  );
});

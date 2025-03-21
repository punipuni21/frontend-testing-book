test("mock func was called", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});

test("mock func was not called", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toHaveBeenCalled();
});

test("verify the number of calls", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(1);
  mockFn();
  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("mock func was called", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});

test("mock func was not called", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toHaveBeenCalled();
});

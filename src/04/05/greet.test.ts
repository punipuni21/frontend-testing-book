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

test("mock fun can be called in a function", () => {
  const mockFn = jest.fn();
  function greet() {
    mockFn();
  }
  greet();
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("mock func can watch the arguments", () => {
  const mockFn = jest.fn();
  function greet(name: string) {
    mockFn(name);
  }
  greet("John");
  expect(mockFn).toHaveBeenCalledWith("John");
});

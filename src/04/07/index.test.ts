import { greetByTime } from ".";

describe("greetByTime", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test("wait for designated time, then resolved", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0));
    expect(greetByTime()).toBe("Good Morning");
  });

  test("wait for designated time, then resolved", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 13, 0, 0));
    expect(greetByTime()).toBe("Good Afternoon");
  });

  test("wait for designated time, then resolved", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 19, 0, 0));
    expect(greetByTime()).toBe("Good Evening");
  });
});

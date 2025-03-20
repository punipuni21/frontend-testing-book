import { timeout, wait } from ".";

describe("wait verification(resolve", () => {
  test("when wait for designated time, promise is resolved", () => {
    return wait(50).then((duration) => {
      expect(duration).toBe(50);
    });
  });

  test("when wait for designated time, promise is resolved", () => {
    return expect(wait(50)).resolves.toBe(50);
  });

  test("when wait for designated time, promise is resolved", async () => {
    await expect(wait(50)).resolves.toBe(50);
  });

  test("when wait for designated time, promise is resolved", async () => {
    expect(await wait(50)).toBe(50);
  });
});

describe("wait verification(reject)", () => {
  test("when wait for designated time, promise is rejected", () => {
    return timeout(50).catch((duration) => {
      expect(duration).toBe(50);
    });
  });

  test("when wait for designated time, promise is rejected", () => {
    return expect(timeout(50)).rejects.toBe(50);
  });

  test("when wait for designated time, promise is rejected", async () => {
    await expect(timeout(50)).rejects.toBe(50);
  });

  test("when wait for designated time, promise is rejected", async () => {
    expect.assertions(1); // 1回のアサーションを行うことを期待
    try {
      await timeout(50);
    } catch (err) {
      expect(err).toBe(50);
    }
  });
});

import { wait } from ".";

describe("wait verification", () => {
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
    await expect(wait(50)).resolves.toBe(50);
  });
});

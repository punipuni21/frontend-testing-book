import { getGreet } from ".";
import * as Fetchers from "../fetchers";
import { httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

describe("getGreet", () => {
  test("when data fetched successfully, in case of no username", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
    });

    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
  });

  test("when data fetched successfully, in case of valid username", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
      id: "xxxxxxx-123456",
      email: "taroyamada@myapi.testing.com",
      name: "taroyamada",
    });

    await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
  });

  test("when fetching data fails", async () => {
    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
    await expect(getGreet()).rejects.toMatchObject({
      err: { message: "Internal Server Error" },
    });
  });

  test("when fetching data fails with unexpected error, error data is thrown", async () => {
    expect.assertions(1);
    jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
    try {
      await getGreet();
    } catch (err) {
      expect(err).toMatchObject(httpError);
    }
  });
});

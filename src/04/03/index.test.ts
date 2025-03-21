import { getGreet } from ".";
import * as Fetchers from "../fetchers";

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
});

import { Profile, HttpError } from "./type";

export const httpError: HttpError = {
  err: { message: "Internal Server Error" },
};

export function getMyProfile(): Promise<Profile> {
  return fetch("https://myapi.testing.com/my/profile").then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}

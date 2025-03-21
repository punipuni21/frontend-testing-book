export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export type HttpError = {
  err: { message: string };
};

export type Profile = {
  id: string;
  name?: string;
  age?: number;
  email: string;
};

export type HttpError = {
  err: { message: string };
};

export type Article = {
  id: string;
  createdAt: string;
  tags: string[];
  title: string;
  body: string;
};

export type Articles = {
  articles: Article[];
};

export type ArticleInput = {
  tags: string[];
  title: string;
  body: string;
};

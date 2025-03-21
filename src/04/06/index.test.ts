import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { checkLength } from ".";

function mockPostArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest.spyOn(Fetchers, "postMyArticle").mockRejectedValue(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ["testing"],
    title: "TypeScript を使ったテストの書き方",
    body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
    ...input,
  };
}

test("when pass validations, return success", async () => {
  const input = inputFactory();
  const mock = mockPostArticle(input);

  const result = await postMyArticle(input);
  expect(result).toMatchObject(expect.objectContaining(input));
  expect(mock).toHaveBeenCalled();
});

test("when violate validations, return error", async () => {
  expect.assertions(2);
  const input = inputFactory({ title: "", body: "" });
  const mock = mockPostArticle(input);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: "Internal Server Error" } });
    expect(mock).toHaveBeenCalled();
  });
});

test("when fetching data failed, reject with error", async () => {
  expect.assertions(2);
  const input = inputFactory();
  const mock = mockPostArticle(input, 500);
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({ err: { message: "Internal Server Error" } });
    expect(mock).toHaveBeenCalled();
  });
});

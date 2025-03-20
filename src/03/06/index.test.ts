test("true value verification", () => {
  expect(1).toBeTruthy();
});

test("false value verification", () => {
  expect(0).toBeFalsy();
});

test("null or undefined value verification", () => {
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeDefined();
});

describe("value verification", () => {
  const value = 2 + 2;
  test("equality verification", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test("greater than or equal to verification", () => {
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
  });

  test("less than or equal to verification", () => {
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  });
});

test("floating point number is not accurate", () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3);
});

test("compare floating point numbers with a certain precision", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3); // dfault precision is 2
  expect(value).toBeCloseTo(0.3, 15);
  expect(value).not.toBeCloseTo(0.3, 16);
});

describe("string verification", () => {
  const str = "こんにちは世界";
  const obj = { status: 200, message: str };

  test("equality verification", () => {
    expect(str).toBe("こんにちは世界");
    expect(str).toEqual("こんにちは世界");
  });

  test("toContain verification", () => {
    expect(str).toContain("世界");
    expect(str).not.toContain("こんばんは");
  });

  test("toMatch verification", () => {
    expect(str).toMatch(/世界/);
    expect(str).not.toMatch(/こんばんは/);
  });

  test("toHaveLength", () => {
    expect(str).toHaveLength(7);
    expect(str).not.toHaveLength(8);
  });

  test("stringContaining verification", () => {
    expect(obj).toEqual(
      expect.objectContaining({
        message: expect.stringContaining("世界"),
      })
    );
  });

  test("stringMatching verification", () => {
    expect(obj).toEqual(
      expect.objectContaining({
        message: expect.stringMatching(/世界/),
      })
    );
  });
});

describe("array verification", () => {
  const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];
  test("toContain", () => {
    expect(tags).toContain("Jest");
    expect(tags).toHaveLength(5);
  });

  const article1 = { author: "taro", title: "Testing Next.js" };
  const article2 = { author: "jiro", title: "Testing React" };
  const article3 = { author: "hanako", title: "Testing Jest" };
  const article4 = { author: "saburo", title: "Testing Playwright" };
  const articles = [article1, article2, article3];
  test("toContainEqual", () => {
    expect(articles).toContainEqual(article1);
    expect(articles).toHaveLength(3);
  });

  test("arrayContaining verification", () => {
    expect(articles).toEqual(expect.arrayContaining([article1]));
    expect(articles).toEqual(expect.arrayContaining([article1, article2]));
    expect(articles).toEqual(
      expect.arrayContaining([article1, article2, article3])
    );
    expect(articles).not.toEqual(expect.arrayContaining([article4]));
  });
});

describe("object verification", () => {
  const author = { name: "yamada", age: 28 };
  test("toMatchObject verification", () => {
    expect(author).toMatchObject({ name: "yamada" });
    expect(author).toMatchObject({ name: "yamada", age: 28 });
    expect(author).not.toMatchObject({ name: "yamada", age: 29 });
  });

  test("toHaveProperty verification", () => {
    expect(author).toHaveProperty("name");
    expect(author).toHaveProperty("age");
    expect(author).not.toHaveProperty("address");
  });

  const article = {
    title: "Testing React",
    author: { name: "yamada", age: 28 },
  };

  test("objectContaining verification", () => {
    expect(article).toEqual({
      title: "Testing React",
      author: expect.objectContaining({ name: "yamada" }),
    });
    expect(article).toEqual({
      title: "Testing React",
      author: expect.objectContaining({ name: "yamada", age: 28 }),
    });
    expect(article).toEqual({
      title: "Testing React",
      author: expect.not.objectContaining({ name: "yamada", age: 29 }),
    });
    expect(article).not.toEqual({
      title: "Testing React",
      author: expect.objectContaining({ name: "yamada", age: 29 }),
    });
  });
});

export default {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jest-environment-jsdom",
  transform: { "^.+\\.(ts?|tsx?)$": "babel-jest" },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  roots: ["<rootDir>/src"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__reports__",
        filename: "jest.html",
      },
    ],
  ],
};

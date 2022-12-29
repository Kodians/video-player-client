const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import("jest").Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 20,
      lines: 10,
      statements: -68,
    },
  },
};

module.exports = createJestConfig(customJestConfig);

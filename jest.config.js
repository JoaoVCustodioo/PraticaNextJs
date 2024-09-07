const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jsdom",

  clearMocks: true,

  collectCoverage: true,

  coverageProvider: "v8",

  coverageDirectory: "coverage",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/components/$1",
  },

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  transformIgnorePatterns: ["/node_modules/"],

  coveragePathIgnorePatterns: ["/node_modules/", "/.next/"],
};

module.exports = createJestConfig(config);

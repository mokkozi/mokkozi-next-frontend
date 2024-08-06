import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
const jestConfigWithOverrides = async () => {
  const configFn = createJestConfig(config);
  const res = await configFn();

  res.moduleNameMapper = {
    // We cannot depend on the exact key used by Next.js
    // so we inject an SVG key higher up on the mapping tree
    "\\.svg": "<rootDir>/__mocks__/svg.js",
    "^next/navigation$": "<rootDir>/__mocks__/next/navigation.js",
    ...res.moduleNameMapper,
  };

  return res;
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default jestConfigWithOverrides;

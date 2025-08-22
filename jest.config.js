module.exports = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.js"],
  testMatch: ["<rootDir>/__tests__/**/*.test.js"],
  collectCoverage: true, // ✅ Activer la collecte
  collectCoverageFrom: [
    "src/**/*.js",
    "!__tests__/**",
    "!src/models/**",
    "!src/index.js",
    "!src/**/index.js",
    "!src/config/**",
    "!src/utils/**",
  ],
  coverageReporters: ["text", "lcov"], // ✅ Affiche dans le terminal + HTML
  clearMocks: true,
  resetMocks: true,
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};

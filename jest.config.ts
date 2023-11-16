import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.(t|s)sx?$': '@swc/jest',
  },
  preset: 'ts-jest',
  maxWorkers: '100%',
  testMatch: ['**/test/**/*.test.ts'],
};

export default config;

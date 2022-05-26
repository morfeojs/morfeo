const fs = require('fs');
const baseConfig = require('./jest.base');

function getAllInternalPackages() {
  return fs
    .readdirSync('./packages', { withFileTypes: true })
    .filter(directory => directory.isDirectory())
    .map(directory => directory.name);
}

const packages = getAllInternalPackages();

const projects = packages.map(package => {
  let packageConfig = {};
  const packageJson = JSON.parse(
    fs.readFileSync(`./packages/${package}/package.json`),
  );
  if (fs.existsSync(`./packages/${package}/jest.config.js`)) {
    packageConfig = require(`./packages/${package}/jest.config.js`);
  }

  return {
    rootDir: `packages/${package}`,
    displayName: packageJson.name,
    ...baseConfig,
    ...packageConfig,
  };
});

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  projects,
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'text', 'html', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**',
    '!<rootDir>/src/**/**/index.ts',
    '!<rootDir>/src/**/**/*.d.ts',
    '!<rootDir>/src/**/mocks/**/**',
  ],
  moduleNameMapper: {
    '@morfeo/(.*)': '<rootDir>/packages/$1/src',
  },
  maxWorkers: 1,
  coverageThreshold: {
    global: {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
  },
};

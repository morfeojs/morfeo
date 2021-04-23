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
  if (fs.existsSync(`./packages/${package}/jest.config`)) {
    packageConfig = JSON.parse(
      fs.readFileSync(`./packages/${package}/jest.config`),
    );
  }

  return {
    rootDir: `packages/${package}`,
    displayName: packageJson.name,
    ...baseConfig,
    ...packageConfig,
  };
});

module.exports = {
  projects,
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'text', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**',
    '!<rootDir>/src/**/**/index.ts',
    '!<rootDir>/src/**/**/*.d.ts',
    '!<rootDir>/src/**/mocks/**/**',
  ],
  moduleNameMapper: {
    '@morfeo/(.*)': '<rootDir>/packages/$1/src',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

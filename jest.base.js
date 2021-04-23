module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: ['<rootDir>/(src|tests)/**/**.(spec|test).ts(x|)'],
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'html', 'text'],
  collectCoverageFrom: [
    '<rootDir>/src/**/**',
    '!<rootDir>/src/**/**/index.ts',
    '!<rootDir>/src/**/**/*.d.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['node_modules'],
};

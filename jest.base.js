module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/(src|tests)/**/**.(spec|test).ts(x|)'],
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['node_modules'],
};

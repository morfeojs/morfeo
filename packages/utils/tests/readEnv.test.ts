import * as ENV from '../src/readEnv';

describe('readEnv', () => {
  it('should return the value of the environment', () => {
    expect(ENV.readEnv('NODE_ENV')).toBe('test');
  });

  it('should return the fallback in case the environment variable does not exist', () => {
    expect(
      ENV.readEnv('FAKE_ENV_VARIABLE_THAT_DOES_NOT_EXIST', 'FALLBACK'),
    ).toBe('FALLBACK');
  });

  it('should return the fallback in case the environment object is', () => {
    jest.spyOn(ENV, 'getEnv').mockReturnValue({});

    expect(
      ENV.readEnv('FAKE_ENV_VARIABLE_THAT_DOES_NOT_EXIST', 'FALLBACK'),
    ).toBe('FALLBACK');
  });
});

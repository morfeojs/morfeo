export function getEnv(): NodeJS.ProcessEnv {
  /* istanbul ignore next */
  return typeof process === 'object' ? process.env : {};
}

export function readEnv<Key extends keyof NodeJS.ProcessEnv>(
  key: Key,
  fallback?: NodeJS.ProcessEnv[Key],
) {
  const env = getEnv();
  return env[key] || fallback;
}

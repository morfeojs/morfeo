const colors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgBlue: '\x1b[44m',
  reset: '\x1b[0m',
};

type LogOptions = {
  type: 'debug' | 'error';
  label?: string;
  message?: string;
  color?: keyof typeof colors;
};

function log(options: LogOptions) {
  const prefix = [
    colors.bgBlue,
    'Ⓜ️  morfeo',
    colors.reset,
    colors[options.color || 'cyan'],
    options.label,
    colors.reset,
  ];

  console[options.type]([...prefix, options.message].filter(Boolean).join(' '));
}

function createLogger() {
  const timers = new Map<string, number>();

  function debug(message: string) {
    log({ message, label: 'debug', type: 'debug', color: 'cyan' });
  }

  function error(message: string) {
    log({ message, label: 'error', type: 'error', color: 'red' });
  }

  function success(message: string) {
    log({ message, label: 'success', type: 'debug', color: 'green' });
  }

  function warning(message: string) {
    log({ message, label: 'warning', type: 'debug', color: 'yellow' });
  }

  function startTimer(id: string) {
    if (!timers.has(id)) {
      timers.set(id, Date.now());
    }
  }

  function endTimer(id: string) {
    const timer = timers.get(id);
    if (!timer) {
      return;
    }

    const diff = Number((Date.now() - timer) / 1000).toFixed(2);
    timers.delete(id);
    return diff;
  }

  return {
    debug,
    error,
    warning,
    success,
    endTimer,
    startTimer,
  };
}

export const logger = createLogger();

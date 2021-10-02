import * as chokidar from 'chokidar';

export function watchFiles(
  files: string[],
  callback: (...file: string[]) => void,
  options?: chokidar.WatchOptions,
) {
  const watcher = chokidar.watch(files, options);

  watcher.on('change', callback);
  watcher.on('add', callback);
}

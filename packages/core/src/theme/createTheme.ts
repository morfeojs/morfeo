import { BreakPoint, Theme, ThemeKey } from '@morfeo/spec';
import { deepMerge, parseNumber } from '@morfeo/utils';
import { ThemeMode } from '../types';
import { createComponent } from './createComponent';

type ThemeListener = (theme: Theme) => void;

type EnsurePlainValue<T> = T extends { light?: infer A; dark?: infer A }
  ? A
  : T;

export interface ThemeMetadata {}

export function createTheme() {
  let context: Theme | undefined = undefined;
  const defaultMode: ThemeMode = 'light';
  let metadata: ThemeMetadata = {};

  let listeners: Record<string | number, ThemeListener> = {};

  const mediaQueriesCache = new Map<BreakPoint, string>();

  function get() {
    return context || ({} as Theme);
  }

  function getSlice<T extends ThemeKey>(slice: T) {
    return get()[slice] || {};
  }

  function getValue<T extends ThemeKey, K extends keyof Theme[T]>(
    slice: T,
    key: K,
    mode: ThemeMode = 'light',
  ): EnsurePlainValue<Theme[T][K]> {
    const value = getSlice(slice)[key];
    if (isMultiThemeValue(value)) {
      return value[mode] || value[defaultMode];
    }

    return value as any;
  }

  function isResponsive(value: any): value is object {
    const breakpoints = getSlice('breakpoints');
    if (typeof value === 'object' && breakpoints) {
      const keys = Object.keys(value);
      return keys.some(key => breakpoints[key] !== undefined);
    }

    return false;
  }

  function isMultiThemeValue(value: any): value is object {
    if (value && typeof value === 'object') {
      return !!value.light || !!value.dark;
    }

    return false;
  }

  function setMediaQuery(breakpoint: BreakPoint, mediaQuery: string) {
    mediaQueriesCache.set(breakpoint, mediaQuery);
    return mediaQuery;
  }

  function resolveMediaQuery(breakpoint: BreakPoint): string {
    if (mediaQueriesCache.has(breakpoint)) {
      return mediaQueriesCache.get(breakpoint) as string;
    }

    const breakPoints = getSlice('breakpoints');
    const mediaQueries = getSlice('mediaQueries');
    const hasCustomMediaQuery = !!mediaQueries[breakpoint];

    const breakPointsKeys = Object.keys(breakPoints).sort(
      (first, second) =>
        parseNumber(breakPoints[first]) - parseNumber(breakPoints[second]),
    );

    if (!hasCustomMediaQuery) {
      return setMediaQuery(
        breakpoint,
        `@media (min-width: ${breakPoints[breakpoint]})`,
      );
    }

    const mediaQuery = breakPointsKeys.reduce((acc, bp) => {
      return acc.replace(`{{${bp}}}`, breakPoints[bp]);
    }, mediaQueries[breakpoint] as string);

    return setMediaQuery(breakpoint, mediaQuery);
  }

  function resolveMultiThemeValue(mode: ThemeMode) {
    return `@media (prefers-color-scheme: ${mode})`;
  }

  function callListeners() {
    Object.values(listeners).map(listener => listener(get()));
  }

  function set(theme: {
    [TK in ThemeKey]?: Partial<Theme[TK]>;
  }) {
    context = deepMerge(context || {}, theme) as Theme;
    callListeners();
  }

  function setSlice<T extends ThemeKey>(slice: T, value: Partial<Theme[T]>) {
    set({ [slice]: value });
  }

  function setValue<T extends ThemeKey, K extends keyof Theme[T]>(
    slice: T,
    key: keyof Theme[T],
    value: Theme[T][K],
  ) {
    setSlice(slice, { [key]: value } as any);
  }

  function reset() {
    context = {} as Theme;
    mediaQueriesCache.clear();
    callListeners();
  }

  function getSafeUid(uid?: string, suffix = 0): string {
    const safeUid = uid || Object.values(listeners).length.toString();

    const alreadyExists = !!listeners[safeUid];
    if (alreadyExists) {
      return getSafeUid(`${safeUid}-${suffix}`, suffix + 1);
    }

    return safeUid;
  }

  function subscribe(callback: ThemeListener, uid?: string) {
    const safeUid = getSafeUid(uid);
    listeners[safeUid] = callback;
    return safeUid;
  }

  function cleanUp(uid?: string) {
    if (uid) {
      delete listeners[uid];
      return;
    }
    listeners = {};
  }

  function getMetadata() {
    return metadata;
  }

  function setMetadata(data: ThemeMetadata) {
    metadata = data;
  }

  const theme = {
    get,
    set,
    reset,
    cleanUp,
    getSlice,
    setSlice,
    getValue,
    setValue,
    subscribe,
    getMetadata,
    setMetadata,
    isResponsive,
    isMultiThemeValue,
    resolveMediaQuery,
    resolveMultiThemeValue,
  };

  const component = createComponent(theme);

  return { ...theme, component };
}

export type ThemeHandler = ReturnType<typeof createTheme>;

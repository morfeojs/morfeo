import { BreakPoint } from './breakpoints';

export type MediaQueries = {
  [K in BreakPoint]: string;
};

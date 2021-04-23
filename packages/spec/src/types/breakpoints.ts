export interface BreakPoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export type BreakPoint = keyof BreakPoints;

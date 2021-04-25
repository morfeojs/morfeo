import { allProperties } from '../allProperties';

export type AllDefaultProperties = typeof allProperties;
export interface AllProperties extends AllDefaultProperties {}

export type Property = keyof AllProperties;

import { allProperties } from '../allProperties';

export interface CustomProperties {}
export type AllDefaultProperties = typeof allProperties & CustomProperties;
export interface AllProperties extends AllDefaultProperties {}

export type Property = keyof AllProperties;

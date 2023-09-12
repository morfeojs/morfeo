import { ThemeKey, Theme } from '@morfeo/react';

export enum ActionType {
  SET = 'morfeo/set',
  GET = 'morfeo/get',
}

export type MorfeoDevToolAction = {
  type: ActionType;
  theme: Theme;
  fonts?: string;
};

export enum SliceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  COMING_SOON = 'coming soon',
}

export type SliceWithStatus = {
  name: ThemeKey;
  values: number;
  status: SliceStatus;
};

export type Author = {
  name: string;
  url: string;
  image?: string;
  contributions?: string[];
};

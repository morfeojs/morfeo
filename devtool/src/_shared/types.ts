import { Themes, ThemeName } from '@morfeo/react';

export enum ActionType {
  SET = 'morfeo/set',
  GET = 'morfeo/get',
}

export type MorfeoDevToolAction = {
  type: ActionType;
  themes: Themes;
  current: ThemeName;
};

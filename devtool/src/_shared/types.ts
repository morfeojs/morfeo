import { Theme } from '@morfeo/react';

export enum ActionType {
  SET = 'morfeo/set',
  GET = 'morfeo/get',
}

export type MorfeoDevToolAction = {
  type: ActionType;
  theme: Theme;
};

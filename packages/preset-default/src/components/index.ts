import { Typography } from './Typography';
import { Box } from './Box';
import { Card } from './Card';
import { Hr } from './Hr';
import * as templates from './Templates';
import * as grid from './Grid';
import * as forms from './Forms';
import * as list from './List';
import * as tables from './Table';

export const components = {
  ...list,
  ...grid,
  ...forms,
  ...templates,
  ...tables,
  Hr,
  Card,
  Box,
  Typography,
};

type LocalComponents = typeof components;

declare module '@morfeo/web' {
  export interface Components extends LocalComponents {}
}

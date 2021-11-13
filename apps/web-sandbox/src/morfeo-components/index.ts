import { Typography } from './Typography';
import { Box } from './Box';
import { Card, CardDark } from './Card';
import { Hr } from './Hr';
import * as templates from './Templates';
import * as grid from './Grid';
import * as forms from './Forms';
import * as list from './List';

export const components = {
  Typography,
  Box,
  Card,
  Hr,
  ...list,
  ...grid,
  ...templates,
  ...forms,
};

export const componentsDark = {
  ...components,
  Card: CardDark,
};

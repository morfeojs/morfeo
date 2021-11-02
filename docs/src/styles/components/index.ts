import { Button } from './button';
import { Typography } from './typography';
import { Card } from './card';
import { Box } from './box';

export const components = {
  Box,
  Card,
  Button,
  Typography,
};

type LocalComponents = typeof components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
}

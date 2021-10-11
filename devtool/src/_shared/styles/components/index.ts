import { Button } from './button';
import { Typography } from './typography';
import { Card } from './card';

export const components = {
  Box: { style: {}, variants: {} },
  Card,
  Button,
  Typography,
};

type LocalComponents = typeof components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
}

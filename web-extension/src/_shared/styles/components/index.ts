import { Button } from './button';
import { Typography } from './typography';
import { Card } from './card';
import { Input } from './input';

export const components = {
  Box: { style: {}, variants: {} },
  Card,
  Input,
  Button,
  Typography,
};

type LocalComponents = typeof components;

declare module '@morfeo/react' {
  export interface Components extends LocalComponents {}
}

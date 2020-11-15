import { colors } from './colors';
import { shadows } from './shadows';
import { typography } from './typography';

export const theme = {
  colors,
  shadows,
  ...typography,
} as const;

export type Theme = typeof theme[keyof typeof theme];

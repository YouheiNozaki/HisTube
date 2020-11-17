import 'styled-components';

import { colors } from './colors';
import { shadows } from './shadows';
import { typography } from './typography';

export const theme = {
  colors,
  shadows,
  ...typography,
} as const;

// export type Theme = typeof theme[keyof typeof theme];
export type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

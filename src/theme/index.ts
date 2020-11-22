import 'styled-components';

import { colors } from './colors';
import { shadows } from './shadows';
import { typography } from './typography';
import { zIndices } from './zindex';

export const theme = {
  colors,
  shadows,
  zIndices,
  ...typography,
} as const;

// export type Theme = typeof theme[keyof typeof theme];
export type Theme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

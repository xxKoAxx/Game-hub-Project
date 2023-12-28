// 1. import `extendTheme` function
import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('#151515', 'whiteAlpha.900')(props),
      bg: mode('whiteAlpha.900', '#151515')(props),
    },
  }),
};

// 3. extend the theme
const theme = extendTheme({ config, styles });

export default theme;

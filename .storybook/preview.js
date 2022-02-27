import { ThemeProvider } from '@xstyled/styled-components';

import mainTheme from '../src/theme/mainTheme';
import ResetStyles from '../src/theme/resetStyles';
import MainStyle from '../src/theme/mainStyle';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <ResetStyles />
      <MainStyle />
      <Story />
    </ThemeProvider>
  ),
];

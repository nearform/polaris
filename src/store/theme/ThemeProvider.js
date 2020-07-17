import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { ThemeSettingsContext } from './ThemeSettingsProvider';
import themes from 'src/themes';

export const ThemeProvider = ({ children }) => {
  const theme = React.useContext(ThemeSettingsContext);

  return <EmotionThemeProvider theme={themes[theme]}>{children}</EmotionThemeProvider>;
};

import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import reducer, { initialState } from './reducer';
import * as types from './constants';
import themes from 'src/themes';

export const ThemeActionsContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = React.useReducer(reducer, initialState);
  const setLightTheme = () => dispatch({ type: types.SET_LIGHT_THEME });
  const setDarkTheme = () => dispatch({ type: types.SET_DARK_THEME });
  const toggleTheme = () => dispatch({ type: types.TOGGLE_THEME });
  const actionsRef = React.useRef({ setLightTheme, setDarkTheme, toggleTheme });

  return (
    <ThemeActionsContext.Provider value={actionsRef.current}>
      <EmotionThemeProvider theme={themes[theme]}>{children}</EmotionThemeProvider>
    </ThemeActionsContext.Provider>
  );
};

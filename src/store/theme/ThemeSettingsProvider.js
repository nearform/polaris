import React from 'react';
import reducer, { initialState } from './reducer';
import * as types from './constants';

export const ThemeActionsContext = React.createContext();
export const ThemeSettingsContext = React.createContext();

export const ThemeSettingsProvider = ({ children }) => {
  const [theme, dispatch] = React.useReducer(reducer, initialState);
  const setLightTheme = () => dispatch({ type: types.SET_LIGHT_THEME });
  const setDarkTheme = () => dispatch({ type: types.SET_DARK_THEME });
  const toggleTheme = () => dispatch({ type: types.TOGGLE_THEME });
  const actionsRef = React.useRef({ setLightTheme, setDarkTheme, toggleTheme });

  return (
    <ThemeActionsContext.Provider value={actionsRef.current}>
      <ThemeSettingsContext.Provider value={theme}>{children}</ThemeSettingsContext.Provider>
    </ThemeActionsContext.Provider>
  );
};

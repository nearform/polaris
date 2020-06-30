import React, { useRef } from 'react';
import { SET_LIGHT_THEME, SET_DARK_THEME, TOGGLE_THEME } from './actions';
import UIReducer, { defaultTheme } from './reducer';

export const UIContext = React.createContext();

export const UIProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(UIReducer, defaultTheme);
  const setLightTheme = () =>
    dispatch({
      type: SET_LIGHT_THEME
    });
  const setDarkTheme = () =>
    dispatch({
      type: SET_DARK_THEME
    });
  const toggleTheme = () =>
    dispatch({
      type: TOGGLE_THEME
    });
  const reducersRef = useRef({ setLightTheme, setDarkTheme, toggleTheme });

  return <UIContext.Provider value={[state, reducersRef.current]}>{children}</UIContext.Provider>;
};

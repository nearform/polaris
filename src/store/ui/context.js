import React from 'react';
import { SET_LIGHT_THEME, SET_DARK_THEME } from './actions';
import uiReducer, { initialUI } from './reducer';

const { Provider, Consumer } = React.createContext();

export { Consumer as UIConsumer };

export const UIProvider = ({ children }) => {
  const [ui, dispatch] = React.useReducer(uiReducer, initialUI);
  const setLightTheme = () =>
    dispatch({
      type: SET_LIGHT_THEME
    });
  const setDarkTheme = () =>
    dispatch({
      type: SET_DARK_THEME
    });
  return <Provider value={{ ...ui, setLightTheme, setDarkTheme }}>{children}</Provider>;
};

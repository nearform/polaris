import { SET_LIGHT_THEME, SET_DARK_THEME, TOGGLE_THEME } from './actions';
import colors, { theme } from './initialstate';

const { darkColor, lightColor } = colors;

const themes = {
  light: {
    theme: 'light',
    textColor: darkColor,
    bgColor: lightColor
  },
  dark: {
    theme: 'dark',
    textColor: lightColor,
    bgColor: darkColor
  }
};

export const defaultTheme = themes[theme];

const UIReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        ...themes.light
      };
    case SET_DARK_THEME:
      return {
        ...state,
        ...themes.dark
      };
    case TOGGLE_THEME: {
      const newState = themes[state.theme === 'light' ? 'dark' : 'light'];

      return {
        ...state,
        ...newState
      };
    }
    default:
      return state;
  }
};

export default UIReducer;

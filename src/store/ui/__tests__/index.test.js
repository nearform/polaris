import React, { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { SET_DARK_THEME, SET_LIGHT_THEME, TOGGLE_THEME } from '../actions';
import colors, { theme } from '../initialstate';
import UIReducer from '../reducer';

const { darkColor, lightColor } = colors;

const initialState = { theme, textColor: darkColor, bgColor: lightColor };

describe('Store UI', () => {
  it('context has initialState state', () => {
    const UIContext = React.createContext();
    const wrapper = ({ children }) => <UIContext.Provider value={initialState}>{children}</UIContext.Provider>;
    const { result } = renderHook(() => useContext(UIContext), { wrapper });
    expect(result.current).toStrictEqual(initialState);
  });

  it('reducer should return empty initial state', () => {
    expect(UIReducer(undefined, {})).toEqual({});
  });

  it('reducer should return correct state on light theme switch', () => {
    const action = { type: SET_LIGHT_THEME };
    const expectedState = { theme: 'light', bgColor: lightColor, textColor: darkColor };

    expect(UIReducer(undefined, action)).toEqual(expectedState);
  });

  it('reducer should return correct state on dark theme switch', () => {
    const action = { type: SET_DARK_THEME };
    const expectedState = { theme: 'dark', bgColor: darkColor, textColor: lightColor };

    expect(UIReducer(undefined, action)).toEqual(expectedState);
  });

  it('reducer should return dark theme on default state toggle', () => {
    const action = { type: TOGGLE_THEME };
    const expectedState = { theme: 'dark', bgColor: darkColor, textColor: lightColor };

    expect(UIReducer(initialState, action)).toEqual(expectedState);
  });
});

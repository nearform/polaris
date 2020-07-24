import T from 'prop-types'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as StyledThemeProviderNative } from 'styled-components/native'
import themes from 'src/themes'

import reducer, { initialState } from './reducer'
import * as types from './constants'

export const ThemeActionsContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = React.useReducer(reducer, initialState)
  const setLightTheme = () => dispatch({ type: types.SET_LIGHT_THEME })
  const setDarkTheme = () => dispatch({ type: types.SET_DARK_THEME })
  const toggleTheme = () => dispatch({ type: types.TOGGLE_THEME })
  const actionsRef = React.useRef({ setLightTheme, setDarkTheme, toggleTheme })

  return (
    <ThemeActionsContext.Provider value={actionsRef.current}>
      <StyledThemeProvider theme={themes[theme]}>
        <StyledThemeProviderNative theme={themes[theme]}>
          {children}
        </StyledThemeProviderNative>
      </StyledThemeProvider>
    </ThemeActionsContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: T.node
}

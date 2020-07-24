import * as types from './constants'

export const initialState = 'light'

export default (state, { type }) => {
  switch (type) {
    case types.SET_DARK_THEME:
      return 'dark'

    case types.SET_LIGHT_THEME:
      return initialState

    case types.TOGGLE_THEME:
      return state === initialState ? 'dark' : initialState

    default:
      return initialState
  }
}

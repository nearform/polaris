import { SET_DARK_THEME, SET_LIGHT_THEME, TOGGLE_THEME } from '../constants'
import reducer, { initialState } from '../reducer'

describe('theme reducer', () => {
  it('reducer should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('reducer should return correct state on light theme switch', () => {
    const action = { type: SET_LIGHT_THEME }
    expect(reducer(undefined, action)).toEqual('light')
  })

  it('reducer should return correct state on dark theme switch', () => {
    const action = { type: SET_DARK_THEME }
    expect(reducer(undefined, action)).toEqual('dark')
  })

  it('reducer should return dark theme on default state toggle', () => {
    const action = { type: TOGGLE_THEME }
    expect(reducer(initialState, action)).toEqual('dark')
  })
})

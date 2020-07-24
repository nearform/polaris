import React from 'react'
import { render } from 'react-native-testing-library'

import App from './App'

describe('Main App', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<App />)
    const tree = toJSON()
    expect(tree).toBeDefined()
  })
})

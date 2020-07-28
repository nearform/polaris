import React from 'react'
import { render, cleanup } from 'utils/test-utils'

import App from './App'

afterEach(cleanup)

describe('Main App', () => {
  it('renders content including some links, without crashing', () => {
    const { queryAllByRole } = render(<App />)
    const links = queryAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

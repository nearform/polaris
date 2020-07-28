import React from 'react'
import { renderAsRoute, cleanup } from 'utils/test-utils'

import { HomeScreen } from '.'

afterEach(cleanup)

describe('HomeScreen test', () => {
  it('renders a link without crashing', () => {
    const { queryAllByRole } = renderAsRoute(<HomeScreen />)
    const links = queryAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

import {
  renderWithContext,
  cleanup,
  firePressEvent,
  act
} from 'utils/test-utils'

import { RouteFixture } from './fixtures'

afterEach(cleanup)

describe('Link', () => {
  it('Navigates to correct route on press', async () => {
    const { getByText, queryAllByText } = renderWithContext(RouteFixture)
    await act(async () => {})

    expect(getByText('Screen One')).toBeTruthy()
    expect(queryAllByText('Screen Two')).toHaveLength(0)
    expect(queryAllByText('Screen Three')).toHaveLength(0)

    // Find and click link in first screen
    const linkA = getByText('Go to Two')

    await act(async () => await firePressEvent(linkA))

    expect(queryAllByText('Screen One')).toHaveLength(0)
    expect(getByText('Screen Two')).toBeTruthy()
    expect(queryAllByText('Screen Three')).toHaveLength(0)

    // Find and click link in new screen
    const linkB = getByText('Go to Three')
    await act(async () => await firePressEvent(linkB))

    expect(queryAllByText('Screen One')).toHaveLength(0)
    expect(queryAllByText('Screen Two')).toHaveLength(0)
    expect(getByText('Screen Three')).toBeTruthy()

    // Don't crash on navigating to same screen
    const linkC = getByText('Go to Three')
    await act(async () => await firePressEvent(linkC))

    expect(queryAllByText('Screen One')).toHaveLength(0)
    expect(queryAllByText('Screen Two')).toHaveLength(0)
    expect(getByText('Screen Three')).toBeTruthy()

    // Return to previously visited screen
    const linkD = getByText('Go to One')
    await act(async () => await firePressEvent(linkD))

    expect(getByText('Screen One')).toBeTruthy()
    expect(queryAllByText('Screen Two')).toHaveLength(0)
    expect(queryAllByText('Screen Three')).toHaveLength(0)
  })
})

import React from 'react'
import { render, cleanup } from 'utils/test-utils/testing-library'
import { renderAsRoute, renderWithContext } from 'utils/test-utils/renderers'
import { prettyOutput } from 'utils/test-utils/platform-utils'
import { expectToThrow } from 'utils/test-utils/expects'

import { SimpleView, ContextualView, RouteView } from './fixtures'

afterEach(cleanup)

const doesRender = container => {
  const strOutput = prettyOutput(container)
  return strOutput.length >= 0
}

describe('render', () => {
  it('can render simple views', () => {
    const { container } = render(<SimpleView />)
    expect(doesRender(container)).toBeTruthy()
  })
  it('fails to render views containing routes', () => {
    expectToThrow(() => render(<RouteView />))
  })
  it('fails to render view requiring context', () => {
    expectToThrow(() => render(<ContextualView />))
  })
})

describe('renderWithContext', () => {
  it('can render simple views', () => {
    const { container } = renderWithContext(SimpleView)
    expect(doesRender(container)).toBeTruthy()
  })
  it('fails to render views containing routes', () => {
    expectToThrow(() => renderWithContext(RouteView))
  })
  it('can render views requiring context', () => {
    const { container } = renderWithContext(ContextualView)
    expect(doesRender(container)).toBeTruthy()
  })
})

describe('renderAsRoute', () => {
  it('can render simple views', () => {
    const { container } = renderAsRoute(SimpleView)
    expect(doesRender(container)).toBeTruthy()
  })
  it('can render views containing routes', () => {
    const { container } = renderAsRoute(RouteView)
    expect(doesRender(container)).toBeTruthy()
  })
  it('can render views requiring context', () => {
    const { container } = renderAsRoute(ContextualView)
    expect(doesRender(container)).toBeTruthy()
  })
})

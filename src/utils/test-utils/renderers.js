import React from 'react'
import { ThemeProvider } from 'store'
import Route from 'components/templates/route'

import { render } from './testing-library'

const _asComponent = renderable => {
  if (typeof renderable === 'function') return renderable
  return () => renderable
}

const _convertToRoute = (
  renderable,
  {
    path = '/test-path',
    name = 'Test path',
    routes,
    additionalRoutes = [],
    LayoutComponent = null
  } = {}
) => {
  if (!routes) {
    const Component = _asComponent(renderable)
    const route = { path, View: Component, name }
    routes = [route, ...additionalRoutes]
  }

  const RouteComponent = props => (
    <Route
      defaultPath={path}
      routes={routes}
      LayoutComponent={LayoutComponent}
      {...props}
    />
  )
  return RouteComponent
}

export const renderWithContext = (renderable, renderOptions = {}) => {
  const Component = _asComponent(renderable)
  return render(<Component />, { ...renderOptions, wrapper: ThemeProvider })
}

export const renderAsRoute = (
  renderable,
  { renderOptions = {}, routeOptions } = {}
) => {
  const RouteComponent = _convertToRoute(renderable, routeOptions)

  return render(<RouteComponent />, {
    ...renderOptions,
    wrapper: ThemeProvider
  })
}

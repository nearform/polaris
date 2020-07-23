import React from 'react';
import { render } from './testing-library';
import { ThemeProvider } from 'store';
import Route from 'components/templates/route';

const _asComponent = renderable => {
  if (typeof renderable === 'function') return renderable;
  return () => renderable;
};

const _convertToRoute = (
  renderable,
  { path = '/test-path', name = 'Test path', defaultPath, additionalRoutes = [], LayoutComponent = null } = {}
) => {
  const Component = _asComponent(renderable);
  const route = { path, View: Component, name };
  const routes = [route, ...additionalRoutes];
  return props => (
    <Route defaultPath={defaultPath || path} routes={routes} LayoutComponent={LayoutComponent} {...props} />
  );
};

export const renderWithContext = (renderable, renderOptions = {}) => {
  const Component = _asComponent(renderable);
  return render(<Component />, { ...renderOptions, wrapper: ThemeProvider });
};

export const renderAsRoute = (renderable, { renderOptions = {}, routeOptions } = {}) => {
  const RouteComponent = _convertToRoute(renderable, routeOptions);
  return render(<RouteComponent />, { ...renderOptions, wrapper: ThemeProvider });
};

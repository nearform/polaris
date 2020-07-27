import React, { createContext, useMemo } from 'react'
import T from 'prop-types'
import presetRoutes, { defaultPath as presetDefaultPath } from 'routes'

const RoutesContext = createContext()

// Allow route overrides, for tests, or rarely, for complex dynamic nested native routes
const RoutesProvider = ({
  children,
  routes = presetRoutes,
  defaultPath = presetDefaultPath
}) => {
  // routes and defaultPaths will change together, and rarely (if ever)
  const routesContextValue = useMemo(
    () => ({
      routes,
      defaultPath
    }),
    [defaultPath, routes]
  )
  return (
    <RoutesContext.Provider value={routesContextValue}>
      {children}
    </RoutesContext.Provider>
  )
}

RoutesProvider.propTypes = {
  children: T.node.isRequired,
  routes: T.array,
  defaultPath: T.string
}

const withRoutesProvider = (Component, { routes, defaultPath }) => {
  const ComponentWithRoutesProvider = props => (
    <RoutesProvider routes={routes} defaultPath={defaultPath}>
      <Component {...props} />
    </RoutesProvider>
  )
  return ComponentWithRoutesProvider
}

export { RoutesContext, RoutesProvider, withRoutesProvider }

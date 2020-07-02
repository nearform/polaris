import React from 'react'
import T from 'prop-types'
import { Switch, Route as DomRoute, Redirect, BrowserRouter } from 'react-router-dom'

import defaultRoutes, { routeShape } from 'routes'

const withBrowserRouter = (Component) => {
  return (props) => (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
  )
}

const Route = ({ routes = defaultRoutes }) => {
  return (
    <Switch>
      {routes.map((route) => (
        !route.redirectTo ? (
          <DomRoute exact path={route.path} component={route.View} key={route.path} />
        ) : (
          <Redirect from={route.path} to={route.redirectTo} key={route.path} />
        )
      ))}
    </Switch>
  )
}

Route.propTypes = {
  routes: T.arrayOf(T.shape(routeShape))
}

export default withBrowserRouter(Route)

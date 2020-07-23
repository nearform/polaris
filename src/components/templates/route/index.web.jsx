import React, { Fragment } from 'react';
import T from 'prop-types';
import { Switch, Route as DomRoute, Redirect, BrowserRouter } from 'react-router-dom';

import Layout from 'components/templates/layout';
import presetRoutes, { routeShape, defaultPath as presetDefaultPath } from 'routes';
import { View404 } from 'components/views/404';
import { RoutesProvider } from 'store/routing/routes-provider';

const Route = ({
  routes = presetRoutes,
  defaultPath = presetDefaultPath,
  LayoutComponent = Layout,
  basename = '/'
}) => {
  // Allow null to be passed, disabling layout component
  if (!LayoutComponent) LayoutComponent = Fragment;

  return (
    <BrowserRouter basename={basename}>
      <RoutesProvider routes={routes} defaultPath={defaultPath}>
        <LayoutComponent>
          <Switch>
            {routes.map(route =>
              !route.redirectTo ? (
                <DomRoute exact path={route.path} component={route.View} key={route.path} />
              ) : (
                <Redirect from={route.path} to={route.redirectTo} key={route.path} />
              )
            )}
            {defaultPath !== basename ? <Redirect from={basename} to={defaultPath} /> : ''}
            <DomRoute component={View404} />
          </Switch>
        </LayoutComponent>
      </RoutesProvider>
    </BrowserRouter>
  );
};

Route.propTypes = {
  routes: T.arrayOf(routeShape)
};

export default Route;

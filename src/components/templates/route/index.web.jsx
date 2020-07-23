import React from 'react';
import T from 'prop-types';
import { Switch, Route as DomRoute, Redirect, BrowserRouter } from 'react-router-dom';

import Layout from 'components/templates/layout';
import defaultRoutes, { routeShape } from 'routes';
import { View404 } from 'components/views/404';

const withBrowserRouter = Component => {
  return props => (
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  );
};

const Route = ({ routes = defaultRoutes }) => {
  return (
    <Layout>
      <Switch>
        {routes.map(route =>
          !route.redirectTo ? (
            <DomRoute exact path={route.path} component={route.View} key={route.path} />
          ) : (
            <Redirect from={route.path} to={route.redirectTo} key={route.path} />
          )
        )}
        <DomRoute component={View404} />
      </Switch>
    </Layout>
  );
};

Route.propTypes = {
  routes: T.arrayOf(routeShape)
};

export default withBrowserRouter(Route);

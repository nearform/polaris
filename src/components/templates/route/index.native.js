import React from 'react';
import T from 'prop-types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import defaultRoutes, { defaultPath, routeShape } from 'routes';
import { replaceParams } from 'utils/paths';
import Layout from 'components/templates/layout'

const withNavigationContainer = Component => {
  return props => (
    <NavigationContainer>
      <Component {...props} />
    </NavigationContainer>
  );
};

const withLayout = Component => {
  return props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

const Stack = createStackNavigator();
const isViewRoute = route => !!route.View;

const Route = ({ routes = defaultRoutes }) => {
  const viewRoutes = routes.filter(isViewRoute);

  return (
    <Stack.Navigator initialRouteName={defaultPath}>
      {viewRoutes.map(route => (
        <Stack.Screen
          name={route.path}
          component={withLayout(route.View)}
          options={({ route: { params } }) => ({
            title: replaceParams(route.name, params)
          })}
          key={route.path}
        />
      ))}
    </Stack.Navigator>
  );
};

Route.propTypes = {
  routes: T.arrayOf(T.shape(routeShape))
};

export default withNavigationContainer(Route);

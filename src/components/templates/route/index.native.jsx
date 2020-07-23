import React from 'react';
import T from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from '@react-navigation/drawer';
import createDrawerNavigator from 'utils/navigators/create-drawer-nav';

import presetRoutes, { defaultPath as presetDefaultPath, routeShape } from 'routes';

import { replaceParams } from 'utils/paths';
import Layout from 'components/templates/layout';
import { RoutesProvider } from 'store/routing/routes-provider';

const Drawer = createDrawerNavigator();
const isViewRoute = route => !!route.View;
const isMenuRoute = route => typeof route.menuIndex === 'number';

// Sort by lowest menu index first, with non-menu views last
const getMenuIndexSortValue = menuIndex => (typeof menuIndex === 'number' ? menuIndex : Infinity);

// Enable hooks that need to be inside NavigationContainer in Route component
const withNavigationContainer = RouteComponent => {
  return props => (
    <NavigationContainer>
      <RouteComponent {...props} />
    </NavigationContainer>
  );
};

// Place layout inside each screen, around each view, to access navigation hooks
const withLayout = (ViewComponent, LayoutComponent) => {
  if (!LayoutComponent) return ViewComponent;

  return props => {
    return (
      <Layout>
        <ViewComponent {...props} />
      </Layout>
    );
  };
};

// Have navigator aware of all routes, but show only menu routes in the nav drawer
const withMenuFilter = (DrawerComponent, menuNames) => {
  return ({ state, ...props }) => {
    const drawerRoutes = state.routes;
    const filteredState = {
      ...state,
      routes: drawerRoutes.filter(({ name }) => menuNames.includes(name))
    };
    return <DrawerComponent state={filteredState} {...props} />;
  };
};

const Route = ({ routes = presetRoutes, defaultPath = presetDefaultPath, LayoutComponent = Layout }) => {
  const dimensions = useWindowDimensions();
  const { t } = useTranslation();

  const viewRoutes = routes.filter(isViewRoute);
  viewRoutes.sort((a, b) => getMenuIndexSortValue(a.menuIndex) - getMenuIndexSortValue(b.menuIndex));
  const menuNames = viewRoutes.filter(isMenuRoute).map(route => route.path);

  return (
    <RoutesProvider routes={routes} defaultPath={defaultPath}>
      <Drawer.Navigator
        initialRouteName={defaultPath}
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerContent={withMenuFilter(DrawerContent, menuNames)}
      >
        {viewRoutes.map(route => (
          <Drawer.Screen
            name={route.path}
            component={withLayout(route.View, LayoutComponent)}
            options={({ route: { params } }) => ({
              title: replaceParams(t(route.name), params)
            })}
            key={route.path}
          />
        ))}
      </Drawer.Navigator>
    </RoutesProvider>
  );
};

Route.propTypes = {
  routes: T.arrayOf(routeShape),
  defaultPath: T.string,
  LayoutComponent: T.elementType
};

export default withNavigationContainer(Route);

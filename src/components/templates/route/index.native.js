import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { Header } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import routes, { defaultPath } from 'routes';
import { replaceParams } from 'utils/paths';
import Layout from 'components/templates/layout';
import usePlatformLocation from 'utils/hooks/usePlatformLocation';

const Drawer = createDrawerNavigator();
const isViewRoute = route => !!route.View;
const isMenuRoute = route => typeof route.menuIndex === 'number';
const viewRoutes = routes.filter(isViewRoute);

// Sort by lowest menu index first, with non-menu views last
const getMenuIndexSortValue = menuIndex => (typeof menuIndex === 'number' ? menuIndex : Infinity);
viewRoutes.sort((a, b) => getMenuIndexSortValue(a.menuIndex) - getMenuIndexSortValue(b.menuIndex));

const menuNames = viewRoutes.filter(isMenuRoute).map(route => route.path);

const Left = ({ isHome, goBack }) =>
  isHome ? (
    <Text> </Text>
  ) : (
    <TouchableOpacity onPress={goBack}>
      <AntDesign name="arrowleft" color="white" size={28} />
    </TouchableOpacity>
  );

const Right = ({ toggleDrawer }) => (
  <TouchableOpacity onPress={toggleDrawer}>
    <AntDesign name="bars" color="white" size={28} />
  </TouchableOpacity>
);

const CustomHeader = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { currentRoute, params } = usePlatformLocation();
  const isHome = currentRoute.path === defaultPath;
  const translatedName = t(currentRoute.name);
  const title = replaceParams(translatedName, params);
  return (
    <Header
      leftComponent={<Left isHome={isHome} goBack={navigation.goBack} />}
      centerComponent={{
        text: title,
        style: {
          color: '#fff',
          fontSize: 21
        }
      }}
      rightComponent={<Right toggleDrawer={navigation.toggleDrawer} />}
    />
  );
};

// Enable hooks that need to be inside NavigationContainer in Route component
const withNavigationContainer = RouteComponent => {
  return props => (
    <NavigationContainer>
      <RouteComponent {...props} />
    </NavigationContainer>
  );
};

// Place layout inside each screen, around each view, to access navigation hooks
const withLayout = (ViewComponent, screenName) => {
  const WrappedView = props => {
    return (
      <Layout>
        <CustomHeader />
        <ViewComponent {...props} />
      </Layout>
    );
  };
  return WrappedView;
};

// Have navigator aware of all routes, but show only menu routes in the nav drawer
const withMenuFilter = DrawerComponent => {
  return ({ state, ...props }) => {
    const drawerRoutes = state.routes;
    const filteredState = {
      ...state,
      routes: drawerRoutes.filter(({ name }) => menuNames.includes(name))
    };
    return <DrawerComponent state={filteredState} {...props} />;
  };
};

const Route = () => {
  const dimensions = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName={defaultPath}
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerContent={withMenuFilter(DrawerContent)}
    >
      {viewRoutes.map(route => (
        <Drawer.Screen
          name={route.path}
          component={withLayout(route.View, route.path)}
          options={({ route: { params } }) => ({
            title: replaceParams(t(route.name), params)
          })}
          key={route.path}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default withNavigationContainer(Route);

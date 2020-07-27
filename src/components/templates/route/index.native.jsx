import React from 'react'
import T from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { DrawerContent } from '@react-navigation/drawer'
import createDrawerNavigator from 'utils/navigators/create-drawer-nav'
import presetRoutes, { defaultPath as presetDefaultPath } from 'routes'
import { replaceParams } from 'utils/paths'
import Layout from 'components/templates/layout'
import { RoutesProvider } from 'store/routing/routes-provider'

import propTypes from './prop-types'

const Drawer = createDrawerNavigator()
const isViewRoute = route => !!route.View
const isMenuRoute = route => typeof route.menuIndex === 'number'

// Sort by lowest menu index first, with non-menu views last
const getMenuIndexSortValue = menuIndex =>
  typeof menuIndex === 'number' ? menuIndex : Infinity

// Place layout inside each screen, around each view, to access navigation hooks
const withLayout = (ViewComponent, LayoutComponent) => {
  if (!LayoutComponent) return ViewComponent

  const ViewWithLayout = props => {
    return (
      <LayoutComponent>
        <ViewComponent {...props} />
      </LayoutComponent>
    )
  }
  return ViewWithLayout
}

// Have navigator aware of all routes, but show only menu routes in the nav drawer
const withMenuFilter = (DrawerComponent, menuNames) => {
  const DrawerWithFilteredRoutes = ({ state, ...props }) => {
    const drawerRoutes = state.routes
    const filteredState = {
      ...state,
      routes: drawerRoutes.filter(({ name }) => menuNames.includes(name))
    }
    return <DrawerComponent state={filteredState} {...props} />
  }
  DrawerWithFilteredRoutes.propTypes = {
    state: T.shape({ routes: T.array.isRequired })
  }
  return DrawerWithFilteredRoutes
}

const RouteNavigator = ({
  routes = presetRoutes,
  defaultPath = presetDefaultPath,
  LayoutComponent = Layout
}) => {
  const dimensions = useWindowDimensions()
  const { t } = useTranslation()

  const viewRoutes = routes.filter(isViewRoute)
  viewRoutes.sort(
    (a, b) =>
      getMenuIndexSortValue(a.menuIndex) - getMenuIndexSortValue(b.menuIndex)
  )
  const menuNames = viewRoutes.filter(isMenuRoute).map(route => route.path)

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
  )
}

RouteNavigator.propTypes = propTypes

// Enable hooks that need to be inside NavigationContainer in Route component
const Route = props => (
  <NavigationContainer>
    <RouteNavigator {...props} />
  </NavigationContainer>
)

export default Route

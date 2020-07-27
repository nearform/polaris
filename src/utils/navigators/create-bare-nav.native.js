import React from 'react'
import T from 'prop-types'
import { View } from 'react-native'
import {
  useNavigationBuilder,
  createNavigatorFactory,
  NavigationHelpersContext
} from '@react-navigation/native'
import { StackRouter } from '@react-navigation/routers'

/*
 * Defines a UI-agnostic React Navigation router which can store custom route state
 *
 * - Can be safely used in Jest (React Navigation navigators hit errors on accessing native APIs)
 * - Connects all routes to the NavigationContainer
 * - Separates route handling logic from navigation UI
 */

const actionCreators = {
  setStateProperty: (key, value) => ({
    type: 'SET_STATE_PROPERTY',
    payload: { key, value }
  })
}

const createBareRouter = options => {
  const BareStackRouter = StackRouter(options)
  return {
    ...BareStackRouter,
    actionCreators: {
      ...BareStackRouter.actionCreators,
      ...actionCreators
    },
    getInitialState: options => {
      const newState = BareStackRouter.getInitialState(options)
      newState.stateProperties = {}
      return newState
    },
    getStateForAction: (state, action, options) => {
      const newState = BareStackRouter.getStateForAction(state, action, options)
      newState.stateProperties = { ...state.stateProperties }
      if (action.type === 'SET_STATE_PROPERTY') {
        const { key, value } = action.payload
        newState.stateProperties[key] = value
      }
      return newState
    }
  }
}

const BareNavigator = ({
  children,
  defaultPath,
  screenOptions,
  contentStyle
}) => {
  const { descriptors, navigation, state } = useNavigationBuilder(
    createBareRouter,
    {
      children,
      initialRouteName: defaultPath,
      screenOptions
    }
  )

  const currentRouteView = descriptors[state.routes[state.index].key].render()

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <View style={[{ flex: 1 }, contentStyle]}>{currentRouteView}</View>
    </NavigationHelpersContext.Provider>
  )
}

BareNavigator.propTypes = {
  children: T.node,
  defaultPath: T.string,
  screenOptions: T.object,
  contentStyle: T.object
}

const createBareNavigator = createNavigatorFactory(BareNavigator)

export default createBareNavigator

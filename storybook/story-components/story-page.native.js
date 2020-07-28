import React from 'react'
import T from 'prop-types'
import DocText from './doc-text'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { size, fontFamily } from './helpers/platform-styles'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ThemeProvider } from 'store'

const Stack = createStackNavigator()

const Story = ({ storyFn, children, url, width }) => (
  <ScrollView style={[styles.root, { width }]}>
    <Text style={styles.url}>{url}</Text>
    <Text style={styles.description}>{children}</Text>
    {storyFn()}
  </ScrollView>
)

const DefaultLinkedScreen = (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>A linked screen</Text>
  </View>
)

function LinkedScreen({ name, screen }) {
  return DefaultLinkedScreen
}

/**
 * Wrapper for all stories in a story file.
 * Apply with .addDecorator when using storiesOf or include in the decorators array
 * if using CSF format.
 * The storyFn must be passed in from the decorators callback.
 */
const StoryPage = props => {
  const StoryScreen = () => <Story {...props} />
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            options={{
              title: props.title,
              headerStyle: styles.headerStyle,
              headerTitleStyle: styles.title,
              headerTitleAlign: 'left'
            }}
            component={StoryScreen}
          />

          {props.screens &&
            props.screens.map(({ name, screen }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={screen ? screen : LinkedScreen}
              />
            ))}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: size.normal,
    flex: 1,
    flexBasis: 'auto',
    backgroundColor: '#fff'
  },
  title: {
    fontWeight: 'normal',
    fontSize: size.xlarge
  },
  headerStyle: {
    backgroundColor: '#fff'
  },
  url: {
    fontSize: size.small,
    fontFamily: fontFamily.mono
  },
  description: {
    color: '#666',
    display: 'flex',
    flexDirection: 'column',
    fontSize: size.large,
    marginTop: size.xsmall
  }
})

StoryPage.propTypes = {
  title: T.string.isRequired,
  storyFn: T.func.isRequired,
  children: T.node,
  url: T.string.isRequired,
  width: T.number,
  screens: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      screen: T.node
    })
  )
}

export default StoryPage

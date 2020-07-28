import React from 'react'
import T from 'prop-types'
import DocText from './doc-text'
import { StyleSheet, View, Text } from 'react-native'
import { MemoryRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from 'services/i18n/'
import { size, fontFamily } from './helpers/platform-styles'

import { ThemeProvider } from 'store'

const Title = ({ children }) => (
  <DocText accessibilityRole="header" style={styles.title}>
    {children}
  </DocText>
)

/**
 * Wrapper for all stories in a story file.
 * Apply with .addDecorator when using storiesOf or include in the decorators array
 * if using CSF format.
 * The storyFn must be passed in from the decorators callback.
 */
const StoryPage = ({ title, storyFn, children, url, width }) => (
  <ThemeProvider>
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <View style={[styles.root, { width }]}>
          <Title>{title}</Title>
          <Text style={styles.url}>{url}</Text>
          <Text style={styles.description}>{children}</Text>
          {storyFn()}
        </View>
      </MemoryRouter>
    </I18nextProvider>
  </ThemeProvider>
)

const styles = StyleSheet.create({
  root: {
    padding: size.normal,
    flex: 1,
    flexBasis: 'auto'
  },
  title: {
    fontSize: size.xlarge
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
  width: T.number
}

export default StoryPage

import T from 'prop-types'
import React from 'react'
import { Platform } from 'react-native'
import SideMenu from 'react-native-side-menu'
import styled from 'styled-components/native'
import Navigation from 'components/organisms/navigation'

const Screen = styled.View`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Page = styled.View`
  flex: 1;
  background-color: white;
  padding-bottom: 0;
`

const LayoutBase = props => {
  const { children } = props

  return (
    <Screen>
      <SideMenu menuPosition="left">
        <Page>
          {Platform.OS === 'web' && <Navigation />}
          {children}
        </Page>
        {Platform.OS !== 'web' && <Navigation />}
      </SideMenu>
    </Screen>
  )
}

LayoutBase.propTypes = {
  children: T.node
}

export default LayoutBase

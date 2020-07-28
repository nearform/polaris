import React from 'react'
import T from 'prop-types'
import styled from 'styled-components/native'
import Nav from 'components/organisms/navigation/nav'

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
      <Page>
        <Nav />
        {children}
      </Page>
    </Screen>
  )
}

LayoutBase.propTypes = {
  children: T.node
}

export default LayoutBase

import React from 'react'
import T from 'prop-types'
import Navigation from 'components/organisms/navigation'
import Header from 'components/organisms/header'
import Screen from 'components/atoms/screen'
import Page from 'components/atoms/page'

const LayoutBase = ({ children }) => {
  return (
    <Screen>
      <Page>
        <Header />
        {children}
        <Navigation />
      </Page>
    </Screen>
  )
}

LayoutBase.propTypes = {
  children: T.node
}

export default LayoutBase

import React from 'react'
import T from 'prop-types'
import Navigation from 'components/organisms/navigation'
import Screen from 'components/atoms/screen'
import Page from 'components/atoms/page'

const LayoutBase = props => {
  const { children } = props

  return (
    <Screen>
      <Page>
        <Navigation />
        {children}
      </Page>
    </Screen>
  )
}

LayoutBase.propTypes = {
  children: T.node
}

export default LayoutBase

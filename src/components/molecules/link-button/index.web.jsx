import React from 'react'
import styled from 'styled-components'
import Link from 'components/atoms/link'
import { buttonStyle } from 'components/atoms/button'

const StyledLink = styled(Link)`
  ${buttonStyle}
`

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const LinkButton = props => {
  return <StyledLink {...props} />
}

export default LinkButton

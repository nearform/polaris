import React from 'react'
import Link from 'components/atoms/link'
import Button from 'components/atoms/button'

const LinkButton = props => {
  return <Link Component={Button} titleAsProp {...props} />
}

export default LinkButton

import React from 'react'
import { Button } from 'react-native'
import { useTheme } from 'styled-components'

const ButtonAtom = props => {
  const theme = useTheme()
  return <Button color={theme.colors.primary} {...props} />
}

export default ButtonAtom

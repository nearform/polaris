import React from 'react'
import T from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation'

const Link = ({
  path,
  title,
  params,
  Component = TouchableOpacity,
  titleAsProp,
  ...rest
}) => {
  const { navigate } = usePlatformNavigation()
  return (
    <Component
      title={titleAsProp ? title : null}
      accessibilityRole="link"
      onPress={() => navigate(path, params)}
      {...rest}
    >
      {titleAsProp ? null : <Text>{title}</Text>}
    </Component>
  )
}

Link.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object,
  Component: T.elementType,
  titleAsProp: T.bool
}

export default Link

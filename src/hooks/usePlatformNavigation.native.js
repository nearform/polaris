import React, { useCallback, Fragment } from 'react'

import { useNavigation } from '@react-navigation/native'

const usePlatformNavigation = () => {
  const navigation = useNavigation()
  const { navigate } = navigation


  return {
    navigate
  }
}

export default usePlatformNavigation

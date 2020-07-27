import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import usePlatformParams from './usePlatformParams'

const usePlatformNavigation = () => {
  const navigation = useNavigation()
  const currentParams = usePlatformParams()
  const { navigate, setParams } = navigation

  const replaceParams = useCallback(
    params => {
      const nullifiedParams = Object.keys(currentParams).reduce(
        (newParams, key) => {
          newParams[key] = null
          return newParams
        },
        {}
      )
      setParams(Object.assign({}, nullifiedParams, params))
    },
    [currentParams, setParams]
  )

  return {
    navigate,
    replaceParams,
    setParams
  }
}

export default usePlatformNavigation

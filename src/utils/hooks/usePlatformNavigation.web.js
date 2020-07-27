import { useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getPathFromParams } from 'utils/paths'

import usePlatformParams from './usePlatformParams'

const usePlatformNavigation = () => {
  const currentParams = usePlatformParams()
  const webLocation = useLocation()
  const currentPath = webLocation.pathname

  const history = useHistory()
  const { push } = history

  const navigate = useCallback(
    (path, params) => {
      // Navigate as a function call, allowing usage like React Navigation
      const newPath = getPathFromParams(path, params)
      push(newPath, params)
    },
    [push]
  )

  const replaceParams = useCallback(
    params => {
      const newPath = getPathFromParams(currentPath, params)
      push(newPath, params)
    },
    [currentPath, push]
  )

  const setParams = useCallback(
    params => {
      const mergedParams = Object.assign({}, currentParams, params)
      const newPath = getPathFromParams(currentPath, mergedParams)
      push(newPath, mergedParams)
    },
    [currentPath, currentParams, push]
  )

  return {
    navigate,
    replaceParams,
    setParams
  }
}

export default usePlatformNavigation

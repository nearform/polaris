import { useCallback } from 'react'

import { useHistory, Redirect } from 'react-router-dom'

const usePlatformNavigation = () => {
  const history = useHistory()
  const { push } = history

  const navigate = useCallback(
    path => {
      // Navigate as a function call, allowing usage like React Navigation
      push(path)
    },
    [push]
  )

  return {
    navigate
  }
}

export default usePlatformNavigation

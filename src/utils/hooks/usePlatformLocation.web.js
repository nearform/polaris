import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { RoutesContext } from 'store/routing/routes-provider'

import usePlatformParams from './usePlatformParams'

const usePlatformLocation = () => {
  const { routes } = useContext(RoutesContext)
  const webLocation = useLocation()
  const params = usePlatformParams()

  const currentRoute = routes.find(
    route => route.path === webLocation.pathname
  ) || {
    path: webLocation.pathname
  }

  return { currentRoute, params }
}

export default usePlatformLocation

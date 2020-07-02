import { useLocation } from 'react-router-dom'
import routes from 'routes'

const usePlatformLocation = () => {
  const webLocation = useLocation()
  const currentRoute = routes.find(route => route.path === webLocation.pathname)
  return currentRoute
}

export default usePlatformLocation

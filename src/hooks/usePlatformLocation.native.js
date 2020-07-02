import { useRoute } from '@react-navigation/native'
import routes from 'routes'

const usePlatformLocation = () => {
  const nativeRoute = useRoute()
  const currentRoute = routes.find(route => route.path === nativeRoute.name)
  return { currentRoute, params: nativeRoute.params || {} }
}

export default usePlatformLocation

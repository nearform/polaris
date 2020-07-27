import { useContext } from 'react'
import { useRoute } from '@react-navigation/native'
import { RoutesContext } from 'store/routing/routes-provider'

const usePlatformLocation = () => {
  const { routes } = useContext(RoutesContext)
  const nativeRoute = useRoute()
  const currentRoute = routes.find(route => route.path === nativeRoute.name)
  return { currentRoute, params: nativeRoute.params || {} }
}

export default usePlatformLocation

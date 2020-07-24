import { useRoute } from '@react-navigation/native'

const usePlatformParams = () => {
  const nativeRoute = useRoute()
  return nativeRoute.params || {}
}

export default usePlatformParams

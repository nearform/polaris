import { useLocation, useParams } from 'react-router-dom'
import routes from 'routes'

const usePlatformLocation = () => {
  const webLocation = useLocation()
  console.log(webLocation)

  const queryString = webLocation.search

  // If IE support is needed, install and use `query-string`
  const queryParams = Object.fromEntries(new URLSearchParams(queryString))
  const pathParams = useParams() || {}
  const params = {
    ...pathParams,
    queryParams
  }

  const currentRoute = routes.find(route => route.path === webLocation.pathname) || {
    path: webLocation.pathname
  }

  return { ...currentRoute, params }
}

export default usePlatformLocation

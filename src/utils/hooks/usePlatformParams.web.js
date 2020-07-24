import { useLocation, useParams } from 'react-router-dom'

const usePlatformParams = () => {
  const webLocation = useLocation()

  const queryString = webLocation.search

  // If IE support is needed, install and use `query-string`
  const queryParams = Object.fromEntries(new URLSearchParams(queryString))
  const pathParams = useParams() || {}
  const params = {
    ...pathParams,
    queryParams
  }
  return params
}

export default usePlatformParams

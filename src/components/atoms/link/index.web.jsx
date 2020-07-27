import React from 'react'
import T from 'prop-types'
import { Link as DomLink } from 'react-router-dom'
import { getPathFromParams, getPathQueryString } from 'utils/paths'

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const Link = ({ path, title, params = {}, Component = DomLink, ...rest }) => {
  const pathname = getPathFromParams(path, params)
  const queryString = getPathQueryString(params.queryParams)

  return (
    <Component
      to={{
        pathname,
        search: queryString
      }}
      title={title}
      {...rest}
    >
      {title}
    </Component>
  )
}

Link.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object,
  Component: T.elementType
}

export default Link

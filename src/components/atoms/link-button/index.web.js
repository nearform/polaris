import React from 'react'
import T from 'prop-types'

import { Link } from 'react-router-dom'
import { getPathFromParams, replaceParams, getPathQueryString } from 'utils/paths' 
import routes from 'routes'

// Temporary styles to allign with Native view
// TODO: apply cross-platform styles once styling approach is stable
const defaultStyle = {
  display: 'inline-block',
  padding: '12px',
  background: '#0790f2',
  color: '#FFFFFF',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontFamily: 'sans',
  borderRadius: '3px',
  boxShadow: '0px 2px 3px 3px rgba(0,0,0,0.1)',
}

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const LinkButton = ({ path, title: buttonText, params = {}, style = defaultStyle }) => {
  const pathname = getPathFromParams(path, params)
  const queryString = getPathQueryString(params.queryParams)
  const routeDef = routes.find(route => route.path === path)
  const title = routeDef && replaceParams(routeDef.name, params)

  return (
    <Link
      to={{
        pathname,
        search: queryString,
      }}
      title={title}
      // TODO: apply cross-platform styles once styling approach is stable
      style={style}
      // component={Button}
    >
      {buttonText}
    </Link>
  )
}

LinkButton.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object,
}

export default LinkButton

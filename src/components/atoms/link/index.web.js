import React from 'react';
import T from 'prop-types';

import { Link as DomLink } from 'react-router-dom';
import { getPathFromParams, replaceParams, getPathQueryString } from 'utils/paths';
import routes from 'routes';

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const Link = ({ path, title: buttonText, params = {}, style = {}, Component = DomLink }) => {
  const pathname = getPathFromParams(path, params);
  const queryString = getPathQueryString(params.queryParams);
  const routeDef = routes.find(route => route.path === path);
  const title = routeDef && replaceParams(routeDef.name, params);

  return (
    <Component
      to={{
        pathname,
        search: queryString
      }}
      title={title}
      style={style}
    >
      {buttonText}
    </Component>
  );
};

Link.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object,
  style: T.object,
  Component: T.elementType
};

export default Link;

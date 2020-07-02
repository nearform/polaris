import { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { getPathFromParams } from 'utils/paths';
import usePlatformLocation from 'hooks/usePlatformLocation';

const usePlatformNavigation = () => {
  const currentRoute = usePlatformLocation();
  const currentPath = currentRoute.path;
  const currentParams = currentRoute.params;

  const history = useHistory();
  const { push } = history;

  const navigate = useCallback(
    (path, params) => {
      // Navigate as a function call, allowing usage like React Navigation
      const newPath = getPathFromParams(path, params);
      push(newPath, params);
    },
    [push]
  );

  const replaceParams = useCallback(
    params => {
      const newPath = getPathFromParams(currentPath, params);
      push(newPath, params);
    },
    [currentPath, push]
  );

  const setParams = useCallback(
    params => {
      const mergedParams = Object.assign({}, currentParams, params);
      const newPath = getPathFromParams(currentPath, mergedParams);
      console.log('newPath', newPath, 'mergedParams', mergedParams);
      push(newPath, mergedParams);
    },
    [currentPath, currentParams, push]
  );

  return {
    navigate,
    replaceParams,
    setParams
  };
};

export default usePlatformNavigation;

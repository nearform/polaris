import { useLocation } from 'react-router-dom';
import routes from 'routes';
import usePlatformParams from './usePlatformParams';

const usePlatformLocation = () => {
  const webLocation = useLocation();
  const params = usePlatformParams();

  const currentRoute = routes.find(route => route.path === webLocation.pathname) || {
    path: webLocation.pathname
  };

  return { ...currentRoute, params };
};

export default usePlatformLocation;

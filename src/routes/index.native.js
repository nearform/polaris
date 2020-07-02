import routes, { defaultPath, routeShape } from './index.common';
import { Camera } from 'components/views';
import { Settings } from 'components/views/settings';

const nativeOnlyRoutes = [
  { path: '/camera', View: Camera, name: 'camera:title', menuIndex: 6 },
  { path: '/settings', View: Settings, name: 'App settings' }
];

export default [...routes, ...nativeOnlyRoutes];
export { defaultPath, routeShape };

import routes, { defaultPath, routeShape } from './index.common';
import { Camera } from 'components/views';

const nativeOnlyRoutes = [{ path: '/camera', View: Camera, name: 'camera:title', menuIndex: 10 }];

export default [...routes, ...nativeOnlyRoutes];
export { defaultPath, routeShape };

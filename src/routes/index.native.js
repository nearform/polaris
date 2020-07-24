import { Camera } from 'components/views'

import routes, { defaultPath, routeShape } from './index.common'

const nativeOnlyRoutes = [
  { path: '/camera', View: Camera, name: 'camera:title', menuIndex: 10 }
]

export default [...routes, ...nativeOnlyRoutes]
export { defaultPath, routeShape }

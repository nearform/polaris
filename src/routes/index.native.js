import { Camera } from 'components/views'
import { QRCode } from 'components/views/QRCode'
import { MapView } from 'components/views/MapView'

import routes, { defaultPath, routeShape } from './index.common'

const nativeOnlyRoutes = [
  { path: '/camera', View: Camera, name: 'camera:title', menuIndex: 10 },
  {
    path: '/qrCode',
    View: QRCode,
    name: 'qrCode:title',
    menuIndex: 11
  },
  {
    path: '/map',
    View: MapView,
    name: 'map:title',
    menuIndex: 12
  }
]

export default [...routes, ...nativeOnlyRoutes]
export { defaultPath, routeShape }

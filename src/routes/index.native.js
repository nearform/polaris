import { Camera } from 'components/views'
import { QRCode } from 'components/views/QRCode'

import routes, { defaultPath, routeShape } from './index.common'

const nativeOnlyRoutes = [
  { path: '/camera', View: Camera, name: 'camera:title', menuIndex: 10 },
  {
    path: '/qrCode',
    View: QRCode,
    name: 'qrCode:title',
    menuIndex: 11
  }
]

export default [...routes, ...nativeOnlyRoutes]
export { defaultPath, routeShape }

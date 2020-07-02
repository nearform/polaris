import routes, { defaultPath, routeShape } from './index.common'
import { Settings } from 'components/views/settings'

const nativeOnlyRoutes = [
  { path: '/settings', View: Settings, name: 'App settings'}
]

export default [ ...routes, ...nativeOnlyRoutes ]
export { defaultPath, routeShape }

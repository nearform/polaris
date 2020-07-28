import T from 'prop-types'
import { HomeScreen } from 'components/views/home'
import { Community, Spain, Province } from 'components/views/geography'
import { Settings } from 'components/views/settings'

const routes = [
  { path: '/', View: HomeScreen, menuIndex: 0, name: 'home:title' },
  { path: '/index.html', redirectTo: '/' },
  { path: '/spain', View: Spain, name: 'geography:title' },
  { path: '/community/:name', View: Community, name: 'geography:title' },
  { path: '/province/:name', View: Province, name: 'geography:title' },
  { path: '/settings', View: Settings, menuIndex: 1, name: 'settings:title' }
]

const defaultPath = routes[0].path

const routeShape = T.shape({
  path: T.string.isRequired,
  View: T.elementType,
  menuIndex: T.number,
  name: T.string
})

export default routes
export { defaultPath, routeShape }

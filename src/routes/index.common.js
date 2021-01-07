import T from 'prop-types'
import { HomeScreen } from 'components/views/home'
import { Simple } from 'components/views/simple'
import { ListView } from 'components/views/list/ListView'
import { ListItem } from 'components/views/list/ListItem'
import { Settings } from 'components/views/settings'
import { PushNotifications } from 'components/views/push-notifications'
import { Responsive } from 'components/views/responsive'
import { Auth } from 'components/views/auth'

const routes = [
  { path: '/', View: HomeScreen, menuIndex: 0, name: 'home:title' },
  { path: '/index.html', redirectTo: '/' },
  { path: '/simple', View: Simple, menuIndex: 1, name: 'simple:title' },
  { path: '/listView', View: ListView, menuIndex: 2, name: 'listView:title' },
  { path: '/listItem/:id', View: ListItem, name: 'listItem:title' },
  { path: '/settings', View: Settings, menuIndex: 3, name: 'settings:title' },
  {
    path: '/pushNotifications',
    View: PushNotifications,
    menuIndex: 4,
    name: 'pushNotificationsView:title'
  },
  {
    path: '/responsive',
    View: Responsive,
    menuIndex: 5,
    name: 'responsiveView:title'
  },
  {
    path: '/auth',
    View: Auth,
    menuIndex: 6,
    name: 'authView:title'
  }
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

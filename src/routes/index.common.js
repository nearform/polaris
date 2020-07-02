import T from 'prop-types';

import { HomeScreen } from 'components/views/home';
import { ViewOne } from 'components/views/viewOne';
import { ViewTwo } from 'components/views/viewTwo';
import { ViewThree } from 'components/views/viewThree';
import { ListView } from 'components/views/list/ListView';
import { ListItem } from 'components/views/list/ListItem';
// import Login from 'components/views/login'
// import User from 'components/views/User'

const routes = [
  { path: '/', View: HomeScreen, menuIndex: 0, name: 'Home' },
  { path: '/index.html', redirectTo: '/' },
  { path: '/viewOne', View: ViewOne, menuIndex: 1, name: 'View one' },
  { path: '/viewTwo', View: ViewTwo, menuIndex: 2, name: 'View two' },
  { path: '/viewThree', View: ViewThree, menuIndex: 3, name: 'View three' },
  { path: '/listView', View: ListView, menuIndex: 4, name: 'List view' },
  { path: '/listItem/:id', View: ListItem, name: 'List item {:id}' }
  //  { path: '/login', View: Login, name: 'Log in' },
  //  { path: '/user', View: User, name: 'User profile' }
];

const defaultPath = routes[0].path;

const routeShape = T.shape({
  path: T.string.isRequired,
  View: T.elementType,
  menuIndex: T.number,
  name: T.string
});

export default routes;
export { defaultPath, routeShape };

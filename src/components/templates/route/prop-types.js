import T from 'prop-types'
import { routeShape } from 'routes'

const propTypes = {
  routes: T.arrayOf(routeShape),
  defaultPath: T.string,
  LayoutComponent: T.elementType,
  basename: T.string
}

export default propTypes

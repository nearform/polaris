import { generateMedia } from 'styled-media-query'
import { colors } from 'src/constants'

import typography from './typography'
import breakpoints from './breakpoints'

export default {
  name: 'light',
  textColor: colors.darkColor,
  bgColor: colors.lightColor,
  primary: colors.nearformBlue,
  white: colors.white,
  typography,
  breakpoints: generateMedia(breakpoints)
}

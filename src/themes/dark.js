import { generateMedia } from 'styled-media-query'
import { colors } from 'src/constants'

import typography from './typography'
import breakpoints from './breakpoints'

export default {
  name: 'dark',
  textColor: colors.lightColor,
  bgColor: colors.darkColor,
  primary: colors.midnightBlue,
  white: colors.white,
  typography,
  breakpoints: generateMedia(breakpoints)
}

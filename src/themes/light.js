import { generateMedia } from 'styled-media-query'
import { colors } from 'src/constants'

import typography from './typography'
import breakpoints from './breakpoints'
import spacing from './spacing'

export default {
  name: 'light',
  colors: {
    textPrimary: colors.darkPrimary,
    textSecondary: colors.lightSecondary,
    backgroundPrimary: colors.lightPrimary,
    primary: colors.nearformBlue,
    white: colors.white
  },
  typography,
  breakpoints: generateMedia(breakpoints),
  spacing
}

import { colors } from 'src/constants';
import typography from './typography';

export default {
  name: 'dark',
  textColor: colors.lightColor,
  bgColor: colors.darkColor,
  primary: colors.midnightBlue,
  white: colors.white,
  ...typography
};

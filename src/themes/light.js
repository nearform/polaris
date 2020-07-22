import { colors } from 'src/constants';
import typography from './typography';

export default {
  name: 'light',
  textColor: colors.darkColor,
  bgColor: colors.lightColor,
  primary: colors.nearformBlue,
  white: colors.white,
  ...typography
};

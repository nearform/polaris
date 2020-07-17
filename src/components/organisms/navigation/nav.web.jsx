import React, { useContext } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from 'emotion-theming';
import { ThemeActionsContext } from 'store';
import { useTranslation } from 'react-i18next';
import Link from 'components/atoms/link';

const Container = styled.View`
  padding: 0;
  padding-top: 30;
  height: 85;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 1;
  position: relative;
  background-color: ${props => props.theme.bgColor};
`;

export default function Header() {
  const { t } = useTranslation();
  const { toggleTheme } = useContext(ThemeActionsContext);
  const theme = useTheme();

  return (
    <Container>
      <View style={styles.left}>
        <Link title={t('home:title')} path={'/'} />
      </View>
      <View style={styles.center}>
        <Text style={{ color: theme.textColor }}>{t('nav:topCenter')}</Text>
      </View>
      <View style={styles.right}>
        <Link title={t('home:settingsButton')} path={'/settings'} />
        <Switch onValueChange={toggleTheme} value={theme.name !== 'light'} testID="theme-switch" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  themeText: {
    paddingRight: 5,
    textTransform: 'capitalize'
  },
  center: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    alignSelf: 'center'
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20
  }
});

import React, { useContext } from 'react';
import { Switch } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from 'emotion-theming';
import { ThemeActionsContext } from 'store';
import { useTranslation } from 'react-i18next';
import Link from 'components/atoms/link';

const Container = styled.View`
  height: 85;
  flex-direction: row;
  align-items: stretch;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 1;
  background-color: ${props => props.theme.bgColor};
`;

const Column = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Left = styled(Column)`
  padding-left: 20;
`;

const Right = styled(Column)`
  padding-right: 20;
`;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ThemeText = styled.Text`
  color: ${props => props.theme.textColor};
`;

export default function Header() {
  const { t } = useTranslation();
  const { toggleTheme } = useContext(ThemeActionsContext);
  const theme = useTheme();

  return (
    <Container>
      <Left>
        <Link title={t('home:title')} path={'/'} />
      </Left>
      <Center>
        <ThemeText>{t('nav:topCenter')}</ThemeText>
      </Center>
      <Right>
        <Link title={t('home:settingsButton')} path={'/settings'} />
        <Switch onValueChange={toggleTheme} value={theme.name !== 'light'} testID="theme-switch" />
      </Right>
    </Container>
  );
}

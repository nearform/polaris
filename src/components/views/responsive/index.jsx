import React from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import styledWeb, { css } from 'styled-components';
import styledNative from 'styled-components/native';

import Container from 'components/atoms/container';
import breakpoints from '../../../themes/breakpoints';

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.primary};
`;

const Block =
  Platform.OS === 'web'
    ? styledWeb.div`
  ${commonStyles}
  ${props => css`
    ${props.theme.breakpoints.greaterThan('sm')`
      width: 50%;
    `}
  `}
`
    : styledNative.View`${commonStyles}`;

const StyledText = styledNative.Text`
  color: ${props => props.theme.white}
`;

export const Responsive = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Block>
        <StyledText>
          {Platform.OS === 'web'
            ? `${t('responsiveView:textWeb')} > ${breakpoints.sm}`
            : t('responsiveView:textNative')}
        </StyledText>
      </Block>
    </Container>
  );
};

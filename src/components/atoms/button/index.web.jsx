import React from 'react';
import T from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const getButtonStyle = theme => css`
  display: flex;
  box-sizing: border-box;
  color: ${theme.white};
  background-color: ${theme.primary};
  padding: 8px;
  border: 1px solid transparent;
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSize.base};
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${theme.font};
  transition: all 0.2s;
  cursor: pointer;

  &:hover:not([disabled]),
  &:active:not([disabled]) {
    color: ${theme.primary};
    background-color: ${theme.white};
    border-color: ${theme.primary};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

const ButtonBase = styled.button`
  ${props => getButtonStyle(props.theme)};
`;

const Button = ({
  onPress,
  title,
  accessibilityLabel = undefined,
  testID = undefined,
  color,
  hasTVPreferredFocus,
  nextFocusDown,
  nextFocusForward,
  nextFocusLeft,
  nextFocusRight,
  nextFocusUp,
  touchSoundDisabled,
  ...rest
}) => (
  <ButtonBase onClick={onPress} aria-label={accessibilityLabel} data-testid={testID} {...rest}>
    {title}
  </ButtonBase>
);

Button.propTypes = {
  title: T.string.isRequired,
  onPress: T.func.isRequired,
  accessibilityLabel: T.string,
  testID: T.string
};

export default Button;

import React from 'react'
import T from 'prop-types'
import styled, { css } from 'styled-components'

export const buttonStyle = ({ theme }) => css`
  display: flex;
  box-sizing: border-box;
  color: ${theme.white};
  background-color: ${theme.primary};
  padding: 8px;
  border: 1px solid transparent;
  font-weight: ${theme.typography.fontWeight.normal};
  font-size: ${theme.typography.fontSize.base};
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${theme.typography.font};
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
`

const ButtonBase = styled.button`
  ${buttonStyle}
`

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
  ...webButtonProps
}) => (
  <ButtonBase
    onClick={onPress}
    aria-label={accessibilityLabel}
    data-testid={testID}
    {...webButtonProps}
  >
    {title}
  </ButtonBase>
)

Button.propTypes = {
  color: T.string,
  hasTVPreferredFocus: T.bool,
  nextFocusDown: T.node,
  nextFocusForward: T.node,
  nextFocusLeft: T.node,
  nextFocusRight: T.node,
  nextFocusUp: T.node,
  touchSoundDisabled: T.bool,
  title: T.string.isRequired,
  onPress: T.func.isRequired,
  accessibilityLabel: T.string,
  testID: T.string
}

export default Button

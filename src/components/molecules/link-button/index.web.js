import React from 'react';
import styled from '@emotion/styled';

import Link from 'components/atoms/link';
import { getButtonStyle } from 'components/atoms/button';

const StyledLink = styled(Link)`
  ${props => getButtonStyle(props.theme)}
`;

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const LinkButton = props => {
  return <StyledLink {...props} />;
};

export default LinkButton;

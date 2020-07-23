import React from 'react';
import styled from '@emotion/native';

import Nav from 'components/organisms/navigation/nav';
import Header from 'components/organisms/header';

const Screen = styled.View`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Page = styled.View`
  flex: 1;
  background-color: white;
  padding-bottom: 0;
`;

const LayoutBase = ({ children }) => {
  return (
    <Screen>
      <Page>
        <Header />
        {children}
        <Nav />
      </Page>
    </Screen>
  );
};

export default LayoutBase;

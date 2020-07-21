import * as React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import Container from 'components/atoms/container';

export const ViewTwo = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text>{t('viewTwo:message')}</Text>
    </Container>
  );
};

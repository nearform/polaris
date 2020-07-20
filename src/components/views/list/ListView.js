import * as React from 'react';
import { Text, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled, { css } from '@emotion/native';

import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';
import usePlatformParams from 'utils/hooks/usePlatformParams';

import Container from 'components/atoms/container';
import PickerSheet from 'components/atoms/picker-sheet';
import LinkButton from 'components/molecules/link-button';
import content from './content';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PickerContainer = styled.View`
  border: 1px #ccc;
  margin-left: 16;
`;

const Table = styled.View`
  justify-content: space-around;
  align-self: stretch;
  align-items: stretch;
`;

const TableRow = styled(Row)`
  height: 48;
  padding: 0 32px;
`;

const TableCell = Container;

export const ListView = () => {
  const { t, i18n } = useTranslation();
  const { setParams } = usePlatformNavigation();
  const params = usePlatformParams();
  const currentSort = params.queryParams?.sort || 'id';
  const sortedContent = [...content].sort((a, b) => a[currentSort] - b[currentSort]);
  const currentLang = i18n.language.split('-')[0];

  const sortOptions = [
    { value: 'id', label: t('listView:id') },
    { value: 'score', label: t('listView:score') }
  ];
  const currentSortOption = sortOptions.find(({ value }) => value === currentSort);

  const handleSortChange = itemValue => {
    setParams({
      queryParams: {
        sort: itemValue
      }
    });
  };
  return (
    <Container>
      <StatusBar style="auto" />
      <Row>
        <Text>{t('listView:sortBy')}</Text>
        <PickerContainer>
          <PickerSheet
            onValueChange={handleSortChange}
            currentOption={currentSortOption}
            style={css`
              width: 128;
              height: 48;
              background-color: white;
            `}
            options={sortOptions}
          />
        </PickerContainer>
      </Row>
      <Table>
        {sortedContent.map(({ id, translations, score }) => (
          <TableRow key={id}>
            <TableCell>
              <Text>#{id}</Text>
            </TableCell>
            <TableCell>
              <Text>{translations[currentLang].title}</Text>
            </TableCell>
            <TableCell>
              <Text>{score} / 10</Text>
            </TableCell>
            <TableCell>
              <LinkButton path="/listItem/:id" params={{ id }} title={t('listView:viewButton', { id: id })} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
};

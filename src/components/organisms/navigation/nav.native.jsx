import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Link from 'components/atoms/link';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.view}>
      <View style={styles.item}>
        <Link title={t('home:title')} path={'/'} />
      </View>
      <View style={styles.item}>
        <Link title={t('listView:title')} path={'/listView'} />
      </View>
      <View style={styles.item}>
        <Link title={t('settings:title')} path={'/settings'} />
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30
  }
});

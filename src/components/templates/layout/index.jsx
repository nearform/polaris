import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Nav from 'components/organisms/navigation/nav';

const LayoutBase = props => {
  const { children } = props;

  return (
    <View style={styles.container}>
      <SideMenu menuPosition="left">
        <View style={[styles.layout, styles.tabBarSpacing]}>
          {Platform.OS === 'web' && <Nav />}
          {children}
        </View>
        {Platform.OS !== 'web' && <Nav />}
      </SideMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  layout: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBarSpacing: {
    paddingBottom: 0
  }
});

export default LayoutBase;

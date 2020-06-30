import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Nav from '../../organisms/navigation/nav';

const LayoutBase = props => {
  const { children } = props;

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }}
    >
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
  layout: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBarSpacing: {
    paddingBottom: 0
  }
});

export default LayoutBase;

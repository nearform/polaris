import React from 'react';
import { View, StyleSheet, Text, Image, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

const LinkNativeProps = !isWeb ? { underlayColor: 'none' } : {};

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text>Top Left</Text>
      </View>
      <View style={styles.center}>
        <Text>Top Center</Text>
      </View>
      <View style={styles.right}>
        <Text>Top Right</Text>
      </View>
    </View>
  );
};

export default Header;

const tabLinkStyle = {
  textDecoration: 'none',
  alignItems: 'center',
  height: '100%'
};

const styles = StyleSheet.create({
  tab: {
    textDecorationLine: 'none',
    fontSize: 14,
    color: '#797979',
    fontFamily: 'NB'
  },
  tabActive: {
    color: '#4C4C4C',
    fontWeight: 'bold'
  },
  header: {
    padding: 0,
    paddingTop: 30,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    position: 'relative'
  },
  tabItem: {
    height: '100%',
    paddingHorizontal: 15,
    marginHorizontal: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabItemBorderActive: {
    position: 'absolute',
    left: 0,
    bottom: -1,
    height: 2,
    backgroundColor: '#4c9e00',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    alignSelf: 'center'
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20
  },
  menu: {
    paddingHorizontal: 20,
    paddingTop: 3
  },
  logoHeader: {
    width: 110,
    height: 24
  },
  userName: {
    fontSize: 12,
    marginHorizontal: 5
  },
  avatar: {
    marginHorizontal: 5,
    width: 26,
    height: 26
  }
});

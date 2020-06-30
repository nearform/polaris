import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

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

const styles = StyleSheet.create({
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
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { size, fontFamily } from './platform-styles';

const StyleList = ({ types }) => (
  <View accessibilityTraits="list" style={styles.wrapper}>
    {types.map(({ label, name, typeInfo }, i) => (
      <View accessibilityTraits="listitem" key={i} style={styles.item}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <Text style={styles.name}>{name}</Text>
        {typeInfo ? <Text style={styles.name}>: </Text> : null}
        {typeInfo ? <Text style={styles.code}>{typeInfo}</Text> : null}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: size.xsmall,
    marginBottom: size.xsmall,
    flexDirection: 'column'
  },
  code: {
    fontFamily: fontFamily.mono,
    lineHeight: size.large
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: size.xsmall
  },
  name: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: size.xlarge
  },
  label: {
    borderRadius: size.normal,
    paddingVertical: 1,
    paddingHorizontal: size.xsmall,
    marginRight: size.xsmall,
    backgroundColor: '#ddd'
  }
});

export default StyleList;

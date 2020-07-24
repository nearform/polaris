import React from 'react';
import T from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { size } from './helpers/platform-styles';

/**
 * Display a text list
 */
const TextList = ({ items }) => (
  <View accessibilityTraits="list" style={styles.list}>
    {items.map((item, i) => (
      <View accessibilityTraits="listitem" key={i} style={styles.item}>
        <View style={styles.bullet} />
        <Text>{item}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    paddingLeft: 20,
    marginBottom: size.xsmall
  },
  bullet: {
    position: 'absolute',
    left: 6,
    top: 10,
    bottom: 0,
    marginTop: -2,
    height: 4,
    width: 4,
    backgroundColor: 'black',
    borderRadius: 50
  }
});

TextList.propTypes = {
  items: T.arrayOf(T.node)
};

export default TextList;

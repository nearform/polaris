import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { size, fontFamily } from './platform-styles';

const Row = ({ name, type, required, defaultValue, description }) => (
  <View style={styles.rowWrapper}>
    <View style={styles.row}>
      <TitleCell data={name} style={styles.titleCell} />
      <NarrowCell data={type} style={styles.narrowCell} />
      <NarrowCell data={required ? 'true' : 'false'} style={styles.narrowCell} />
    </View>
    {!!description && <Text>{description}</Text>}
    {!!defaultValue && <Text>Default Value: {defaultValue}</Text>}
  </View>
);

const NarrowCell = ({ data }) => (
  <View style={styles.narrowCell}>
    <Text style={styles.mono}>{data}</Text>
  </View>
);

const TitleCell = ({ data }) => (
  <View style={styles.titleCell}>
    <Text style={styles.title}>{data}</Text>
  </View>
);

const PropTable = ({ propData }) => (
  <View style={styles.gridContainer}>
    <Text style={styles.propTitle}>Props</Text>
    <View style={styles.row}>
      <View style={styles.titleCell}>
        <Text style={styles.header}>Name</Text>
      </View>
      <View style={styles.narrowCell}>
        <Text style={styles.header}>Type</Text>
      </View>
      <View style={styles.narrowCell}>
        <Text style={styles.header}>Required</Text>
      </View>
    </View>
    {propData.map(rowData => (
      <Row key={rowData.name} {...rowData} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  gridContainer: {
    maxWidth: 600
  },
  propTitle: {
    fontSize: size.large,
    fontWeight: 'bold',
    marginTop: size.large
  },
  rowWrapper: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingTop: size.xsmall,
    paddingBottom: size.xsmall
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleCell: {
    flex: 2,
    margin: 0
  },
  narrowCell: {
    fontFamily: fontFamily.mono,
    flex: 1,
    margin: 0
  },
  wideCell: {
    flex: 1,
    margin: 0
  },
  header: {
    color: '#999',
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold'
  },
  mono: {
    fontFamily: fontFamily.mono
  }
});

export default PropTable;

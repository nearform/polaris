import React from 'react';

import DocText from './doc-text';
import DocCode from './doc-code';
import InlineCode from './inline-code';
import DocSection from './doc-section';
import insertBetween from './insert-between';
import { StyleSheet, Text, View } from 'react-native';
import { size } from './platform-styles';

const Divider = () => <View style={styles.verticalDivider} />;

const createDescription = description => {
  const nodeList = React.Children.toArray(description);
  return typeof description === 'string' ? (
    <Text>{description}</Text>
  ) : (
    insertBetween(() => <Divider key={Math.random()} />, nodeList)
  );
};

const renderIfPopulated = (content, component) => {
  return content !== undefined && content !== null && (typeof content !== 'string' || content.length > 0)
    ? component
    : null;
};

const DocItem = ({ sectionTitle, description, example = {}, name, typeInfo, label, required, defaultValue }) => {
  const Item = (
    <View style={styles.example}>
      {renderIfPopulated(
        name,
        <PropText label={label} name={name} typeInfo={typeInfo} required={required} defaultValue={defaultValue} />
      )}
      {!!description && <View style={styles.description}>{createDescription(description)}</View>}
      {(example.render || example.code) && (
        <View style={styles.renderBox}>
          <DocText style={styles.exampleText}>Example</DocText>
          {example.render && <View>{example.render()}</View>}
          {example.render && example.code && <View style={styles.verticalDivider} />}
          {example.code && <DocCode code={example.code} />}
        </View>
      )}
    </View>
  );
  return sectionTitle ? <DocSection title={sectionTitle} children={Item} /> : <Item />;
};

const PropText = ({ label, name, typeInfo, required, defaultValue }) => (
  <View>
    <DocText style={styles.title}>
      {label && <Text style={[styles.label, label === 'web' && styles.webLabel]}>{label}</Text>}
      <Text style={styles.propName}>{name}</Text>
      {typeInfo && (
        <Text>
          {': '}
          <InlineCode code={typeInfo} />
        </Text>
      )}
    </DocText>
    {required !== undefined && (
      <DocText>
        Required: <InlineCode code={required ? 'true' : 'false'} />
      </DocText>
    )}
    {!!defaultValue && <DocText>Default value: {defaultValue}</DocText>}
  </View>
);

const styles = StyleSheet.create({
  example: {
    marginBottom: size.xlarge
  },
  title: {
    fontSize: size.normal
  },
  text: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    fontSize: size.normal,
    lineHeight: size.large
  },
  label: {
    backgroundColor: '#ddd',
    borderRadius: size.normal,
    color: '#555',
    marginRight: '0.5rem',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.5rem'
  },
  propName: {
    fontWeight: 'bold'
  },
  webLabel: {
    backgroundColor: '#bdebff',
    color: '#025268'
  },
  description: {
    marginTop: size.xsmall
  },
  renderBox: {
    borderColor: '#E6ECF0',
    borderWidth: 1,
    padding: size.large,
    marginTop: size.large
  },
  exampleText: {
    color: '#AAB8C2',
    fontSize: size.small,
    fontWeight: 'bold',
    marginBottom: size.xsmall,
    textTransform: 'uppercase'
  },
  verticalDivider: {
    height: size.normal
  }
});

export default DocItem;

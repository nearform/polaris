import React from 'react'
import T from 'prop-types'
import DocText from './doc-text'
import DocCode from './doc-code'
import DocSection from './doc-section'
import StyleList from './style-list'
import insertBetween from './helpers/insert-between'
import { StyleSheet, Text, View } from 'react-native'
import { size } from './helpers/platform-styles'

const Divider = () => <View style={styles.verticalDivider} />

const createDescription = description => {
  const nodeList = React.Children.toArray(description)
  return typeof description === 'string' ? (
    <Text>{description}</Text>
  ) : (
    insertBetween(() => <Divider key={Math.random()} />, nodeList)
  )
}

/**
 * Documents a param that is passed to a component.
 */
const DocItem = ({
  sectionTitle,
  name,
  description,
  typeInfo,
  example = {},
  label,
  required,
  defaultValue
}) => {
  const Item = (
    <View>
      {name !== undefined && (
        <StyleList
          types={[{ label, name, typeInfo, required, defaultValue }]}
        />
      )}
      {description !== undefined && (
        <View style={styles.description}>{createDescription(description)}</View>
      )}
      {(example.render || example.code) && (
        <View style={styles.renderBox}>
          <DocText style={styles.exampleText}>Example</DocText>
          {example.render && <View>{example.render}</View>}
          {example.render && example.code && (
            <View style={styles.verticalDivider} />
          )}
          {example.code && <DocCode code={example.code} />}
        </View>
      )}
    </View>
  )
  return sectionTitle ? (
    <DocSection title={sectionTitle} children={Item} />
  ) : (
    Item
  )
}

const styles = StyleSheet.create({
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
})

DocItem.propTypes = {
  sectionTitle: T.string,
  name: T.string,
  description: T.string,
  typeInfo: T.string,
  example: T.shape({
    render: T.node,
    code: T.string
  }),
  label: T.string,
  required: T.bool,
  defaultValue: T.string
}

export default DocItem

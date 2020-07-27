import T from 'prop-types'

export default {
  onValueChange: T.func.isRequired,
  options: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      label: T.string // use value as label if label undefined
    })
  ),
  currentOption: T.object,
  nativeID: T.string,
  testID: T.string,
  cancelLabel: T.string // Used in iOS only
}

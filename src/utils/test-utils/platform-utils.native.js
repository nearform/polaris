// Unify prettyPrint(nativeElement) & prettyDom(domElement)
import { prettyPrint as prettyOutput, fireEvent } from './testing-library'
export { prettyOutput }

// Unify nativeElement.getProp() & domElement.getAttribute()
export const getAttrOrProp = (nativeElement, prop) =>
  nativeElement.getProp(prop)

const _matchProp = (propValue, value) =>
  propValue === value || (!propValue && !value)
const _matchWordInList = (listString = '', word) =>
  word && listString.match(new RegExp(`(^| )${word}($| )`))

// Unify nativeElement.findAll() & domElement.querySelectorAll()
export const queryAllDescendents = (
  nativeContainer,
  { value = '', nativeProp = 'type', prop = nativeProp, matchType = '' }
) =>
  nativeContainer.findAll(nativeElement => {
    if (prop === 'type') return nativeElement.type === value
    if (prop === 'class') {
      return _matchWordInList(nativeElement.getProp('className'), value)
    }
    const propValue = nativeElement.getProp(prop)

    switch (matchType) {
      case '':
        return _matchProp(propValue, value)
      case '^':
        return propValue && propValue.startsWith(value)
      case '$':
        return propValue && propValue.endsWith(value)
      case '*':
        return propValue && propValue.includes(value)
      case '~':
        return propValue && _matchWordInList(propValue, value)
      case '|':
        return (
          _matchProp(propValue, prop) ||
          (propValue && propValue.startsWith(value + '-'))
        )
      default:
        throw new Error(
          `Invalid matchType "${matchType}" (type ${typeof matchType})`
        )
    }
  })

// Unify native fireEvent.press and web fireEvent.click
export const firePressEvent = fireEvent.press

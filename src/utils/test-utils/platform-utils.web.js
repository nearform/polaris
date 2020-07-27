// Unify prettyPrint(nativeElement) & prettyDOM(domElement)
import { prettyDOM as prettyOutput, fireEvent } from './testing-library'
export { prettyOutput }

// Unify nativeElement.getProp() & domElement.getAttribute()
export const getAttrOrProp = (domElement, attr) => domElement.getAttribute(attr)

// Unify nativeElement.findAll() & domElement.querySelectorAll()
export const queryAllDescendents = (
  domContainer,
  { webAttr = 'type', prop = webAttr, value, matchType = '' }
) => {
  if (!['', '^', '$', '*', '|', '~'].includes(matchType)) {
    throw new Error(`Invalid matchType ${matchType} (type ${typeof matchType})`)
  }
  switch (prop) {
    case 'type':
      return domContainer.querySelectorAll(value)
    case 'class':
      return domContainer.querySelectorAll(`.${value}`)
    default:
      if (!value) return domContainer.querySelectorAll(`[${prop}]`)

      // For example, [name="password"], [attr^="prefix"]
      return domContainer.querySelectorAll(`[${prop}${matchType}="${value}"]`)
  }
}

// Unify native fireEvent.press and web fireEvent.click
export const firePressEvent = fireEvent.click

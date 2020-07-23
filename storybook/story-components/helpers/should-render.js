/**
 * Only render the element if it has content.
 */
const shouldRender = element =>
  element !== undefined && element !== null && (typeof element !== 'string' || element.length > 0);

export default shouldRender;

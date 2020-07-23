export const mapBreakpointsToMedia = breakpoints =>
  Object.entries(breakpoints).reduce((acc, [key, value]) => ({ ...acc, [key]: `@media (min-width: ${value}px)` }), {});

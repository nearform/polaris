const spacingUnit = 8

export default function spacing(...coefficients) {
  if (coefficients.length < 1 || coefficients.length > 4) {
    console.error(
      `Too many arguments provided, expected between 1 and 4, got ${coefficients.length}`
    )
  }

  const convertedSpacing = coefficients.map(
    coefficient => `${spacingUnit * coefficient}px`
  )
  return convertedSpacing.join(' ')
}

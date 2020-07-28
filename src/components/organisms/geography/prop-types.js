import T from 'prop-types'

const propertiesType = T.shape({
  name: T.string.isRequired,
  population: T.string,
  area: T.string,
  capital: T.string,
  flag: T.any
}).isRequired

export default {
  item: T.shape({
    properties: propertiesType
  }).isRequired,
  constituents: T.shape({
    features: T.arrayOf(
      T.shape({
        properties: propertiesType
      })
    )
  })
}

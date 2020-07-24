export const getPathFromParams = (path, params) => {
  if (!params) return path

  // For example: '/admin/:type/edit/:id', { type: 'article', id: 3 } --> '/admin/article/edit/3'
  const parsedPath = path
    .split('/')
    .map(segment => {
      const matchParam = segment.match(/^:(.*)$/)
      if (!matchParam) return segment
      return params[matchParam[1]] || ''
    })
    .join('/')

  const queryString = getPathQueryString(params.queryParams)
  return `${parsedPath}${queryString}`
}

export const getPathQueryString = queryParams => {
  // For example: { type: 'article', id: 3 } --> '?type=article&id=3'
  if (!queryParams || typeof queryParams !== 'object') return ''
  const queryStrings = Object.entries(queryParams).map(
    ([key, value]) => `${key}=${value}`
  )
  return queryStrings.length ? `?${queryStrings.join('&')}` : ''
}

export const replaceParams = (template, params) => {
  // For example: 'This {:type} has id {:id}', { type: 'article', id: 3 } --> 'This article has id 3'
  if (!params) return template

  const placeholderMatches = template.match(/\{:.*?\}/g)
  if (!placeholderMatches) return template
  const edittedString = placeholderMatches.reduce(
    (edittedTemplate, placeholder) => {
      const key = placeholder.match(/\{:(.*?)\}/)[1]
      return edittedTemplate.replace(placeholder, params[key] || '')
    },
    template
  )
  return edittedString
}

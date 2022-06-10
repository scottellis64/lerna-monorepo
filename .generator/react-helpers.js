module.exports = {
  reactComponentName: (h, s) => h.inflection.camelize(s),
  reactStoryComponentName: (h, s) => h.inflection.camelize(s) + 'Story',
  reactWidgetFile: (h, s) => h.changeCase.paramCase(s),
  widgetPkgName: (h, s, scope) => !! scope ? '@' + scope + '/' + h.changeCase.paramCase(s) : h.changeCase.paramCase(s),
  reactWidgetFolder: (h, s) => h.packages() + '/' + h.reactWidgetFile(h, s)
}

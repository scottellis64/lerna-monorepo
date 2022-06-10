---
to: <%= h.reactWidgetFolder(h, name) %>/package.json
---
{
  "name": "@<%=comp_scope%>/<%=h.widgetPkgName(h, name)%>",
  "version": "<%=version%>",
  "author": "<%=author%>",
  "description": "<%=description%>",
  "main": "dist/<%=h.reactWidgetFile(h, name)%>.es.js",
  "module": "dist/<%=h.reactWidgetFile(h, name)%>.es.js",
  "scripts": {
    "build": "vite build",
    "build:watch": "vite build --watch",
    "yalc:push": "yalc push",
    "yalc:push:watch": "watch 'yarn yalc:push' ./dist",
    "lint": "eslint ./src",
    "tsc": "tsc"
  },
  "types": "./src/<%=h.reactWidgetFile(h, name)%>.d.ts"
}

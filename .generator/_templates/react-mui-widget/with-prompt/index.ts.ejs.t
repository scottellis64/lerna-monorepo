---
to: <%= h.reactWidgetFolder(h, name) %>/src/index.ts
---
export * from './<%= h.reactComponentName(h, name) %>';

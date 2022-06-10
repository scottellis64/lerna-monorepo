---
to: <%= h.reactWidgetFolder(h, name) %>/src/<%= h.reactComponentName(h, name)%>.tsx
---
import './<%= h.reactWidgetFile(h, name) %>.scss';

export interface <%= h.reactComponentName(h, name)%>Props {
  name: string;
}

export const <%= h.reactComponentName(h, name)%> = (props: <%= h.reactComponentName(h, name)%>Props) => {
  const { name } = props;
  return (
    <div className={"<%= h.reactComponentName(h, name) %>Root"}>
      <h1>I am the {name} component</h1>
    </div>
  );
}

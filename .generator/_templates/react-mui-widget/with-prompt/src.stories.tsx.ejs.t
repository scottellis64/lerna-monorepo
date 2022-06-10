---
to: <%= h.reactWidgetFolder(h, name) %>/src/<%= h.reactComponentName(h, name)%>.stories.tsx
---
import type { Story } from '@storybook/react';

import { <%=h.reactComponentName(h, name)%> } from './<%=h.reactComponentName(h, name)%>';

export default {
  title: '<%=h.reactComponentName(h, name)%>'
} as any;

const Template: Story<any> = ({name}) => (
  <div>
    <<%=h.reactComponentName(h, name)%> name={name} />
  </div>
);

export const <%=h.reactStoryComponentName(h, name)%> = Template.bind({});

<%=h.reactStoryComponentName(h, name)%>.args = {
  name: '<%=h.reactComponentName(h, name)%>'
};

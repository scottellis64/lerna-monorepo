---
to: <%= h.reactWidgetFolder(h, name) %>/src/<%= h.reactComponentName(h, name)%>.test.tsx
---
import { render } from '@testing-library/react';

import { <%= h.reactComponentName(h, name)%> } from '.';

describe('<%= h.reactComponentName(h, name)%>', () => {
  it('renders the <%= h.reactComponentName(h, name)%> widget', async () => {
    const { getByText } = render(<<%= h.reactComponentName(h, name)%> name="<%= h.reactComponentName(h, name)%>"/>);

    expect(getByText('I am the <%= h.reactComponentName(h, name)%> component')).toBeDefined();
  });
});

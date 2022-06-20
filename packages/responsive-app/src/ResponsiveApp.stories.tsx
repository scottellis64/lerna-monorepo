import { emailsHandler } from '@sellis/email';
import { bidsHandler } from '@sellis/leaderboard';
import { Story } from '@storybook/react';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router';

import { ResponsiveApp } from './ResponsiveApp';

export default {
  title: 'Responsive App'
} as any;

const Template: Story<any> = () => (
  <MemoryRouter initialEntries={['/']}>
    <ResponsiveApp />
  </MemoryRouter>
);

export const ResponsiveAppStory = Template.bind({});

ResponsiveAppStory.parameters = {
  msw: {
    handlers: {
      emails: [rest.get('/emails', emailsHandler)],
      bids: [rest.get('/bids', bidsHandler)]
    }
  }
}

ResponsiveAppStory.args = {
};

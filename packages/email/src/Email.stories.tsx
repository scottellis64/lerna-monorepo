import type { Story } from '@storybook/react';

import { AppRoot } from '@sellis/app-root';
import { rest } from 'msw';

import { Email } from './Email';

import { emailsHandler } from './mocks';

export default {
  title: 'Email'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Email />
  </AppRoot>
);

export const EmailStory = Template.bind({});

EmailStory.parameters = {
  msw: {
    handlers: {
      emails: [rest.get('/emails', emailsHandler)]
    }
  }
}

EmailStory.args = {
  name: 'Email'
};

import type { Story } from '@storybook/react';

import { rest } from 'msw';

import { Navbar } from './Navbar';
import { AppRoot } from '@sellis/app-root';
import { emailsHandler } from '@sellis/email';

export default {
  title: 'Navbar'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Navbar />
  </AppRoot>
);

export const NavbarStory = Template.bind({});

NavbarStory.parameters = {
  msw: {
    handlers: {
      emails: [rest.get('/emails', emailsHandler)]
    }
  }
}

NavbarStory.args = {
};

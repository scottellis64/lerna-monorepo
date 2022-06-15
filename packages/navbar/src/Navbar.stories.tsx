import type { Story } from '@storybook/react';

import { AppRoot } from '@sellis/app-root';
import { Navbar } from './Navbar';

export default {
  title: 'Navbar'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Navbar />
  </AppRoot>
);

export const NavbarStory = Template.bind({});

NavbarStory.args = {
};

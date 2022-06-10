import type { Story } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Navbar'
} as any;

const Template: Story<any> = () => (
  <div>
    <Navbar />
  </div>
);

export const NavbarStory = Template.bind({});

NavbarStory.args = {
};

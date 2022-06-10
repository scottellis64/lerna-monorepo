import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { Rightbar } from './Rightbar';

export default {
  title: 'Rightbar'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Rightbar />
  </AppRoot>
);

export const RightbarStory = Template.bind({});

RightbarStory.args = {
};

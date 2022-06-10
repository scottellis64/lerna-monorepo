import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { OnlineFriends } from './OnlineFriends';

export default {
  title: 'OnlineFriends'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <OnlineFriends />
  </AppRoot>
);

export const OnlineFriendsStory = Template.bind({});

OnlineFriendsStory.args = {
};

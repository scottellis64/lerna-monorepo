import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { Feed } from './Feed';

export default {
  title: 'Feed'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Feed />
  </AppRoot>
);

export const FeedStory = Template.bind({});

FeedStory.args = {
};

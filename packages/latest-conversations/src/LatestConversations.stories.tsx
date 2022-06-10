import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { LatestConversations } from './LatestConversations';

export default {
  title: 'LatestConversations'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <LatestConversations />
  </AppRoot>
);

export const LatestConversationsStory = Template.bind({});

LatestConversationsStory.args = {
};

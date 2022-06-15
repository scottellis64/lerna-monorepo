import type { Story } from '@storybook/react';

import { AppRoot } from '@sellis/app-root';

import { Leaderboard } from './Leaderboard';

export default {
  title: 'Leaderboard'
} as any;

const Template: Story<any> = () => (
  <AppRoot>
    <Leaderboard />
  </AppRoot>
);

export const LeaderboardStory = Template.bind({});

LeaderboardStory.args = {
};

import type { Story } from '@storybook/react';

import { AppRoot } from '@sellis/app-root';
import { rest } from 'msw';
import { bidsHandler } from './mocks';

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

LeaderboardStory.parameters = {
  msw: {
    handlers: {
      bids: [rest.get('/bids', bidsHandler)]
    }
  }
}

LeaderboardStory.args = {
};

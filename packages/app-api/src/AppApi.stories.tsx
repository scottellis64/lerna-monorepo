import type { Story } from '@storybook/react';

import { AppApi } from './AppApi';

export default {
  title: 'AppApi'
} as any;

const Template: Story<any> = () => (
  <div>
    <AppApi />
  </div>
);

export const AppApiStory = Template.bind({});

AppApiStory.args = {
};

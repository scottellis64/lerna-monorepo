import type { Story } from '@storybook/react';

import { LatestPhotos } from './LatestPhotos';

export default {
  title: 'LatestPhotos'
} as any;

const Template: Story<any> = () => (
  <div>
    <LatestPhotos />
  </div>
);

export const LatestPhotosStory = Template.bind({});

LatestPhotosStory.args = {
};

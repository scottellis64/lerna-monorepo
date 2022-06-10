import { ApplicationState } from '@sellis/application-state';
import type { Story } from '@storybook/react';

import { CreatePost } from './CreatePost';

export default {
  title: 'CreatePost'
} as any;

const Template: Story<any> = () => (
  <ApplicationState>
    <CreatePost />
  </ApplicationState>
);

export const CreatePostStory = Template.bind({});

CreatePostStory.args = {
};

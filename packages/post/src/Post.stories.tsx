import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { Post } from './Post';

export default {
  title: 'Post'
} as any;

const Template: Story<any> = ({post}) => (
  <AppRoot>
    <Post post={post}/>
  </AppRoot>
);

export const PostStory = Template.bind({});

PostStory.args = {
  post: {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    imageAltText: 'Pancakes',
    subtitle: 'October 1, 2020',
    text: 'Pancake With Sliced Strawberry',
    title: 'Pancakes',
    liked: false
  }
};

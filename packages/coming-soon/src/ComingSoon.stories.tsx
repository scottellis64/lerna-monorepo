import { Home } from '@mui/icons-material';
import { ApplicationState } from '@sellis/application-state';
import type { Story } from '@storybook/react';

import { ComingSoon } from './ComingSoon';

export default {
  title: 'ComingSoon'
} as any;

const Template: Story<any> = ({name}) => (
  <ApplicationState>
    <ComingSoon name={name} icon={<Home/>} />
  </ApplicationState>
);

export const ComingSoonStory = Template.bind({});

ComingSoonStory.args = {
  name: 'ComingSoon'
};

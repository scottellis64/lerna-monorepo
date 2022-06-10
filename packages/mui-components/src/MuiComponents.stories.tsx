import { AppRoot } from '@sellis/app-root';
import type { Story } from '@storybook/react';

import { MuiComponents } from './MuiComponents';

export default {
  title: 'MuiComponents'
} as any;

const Template: Story<any> = ({tabName}) => (
  <AppRoot>
    <MuiComponents tabName={tabName} />
  </AppRoot>
);

export const MuiComponentsStory = Template.bind({});

MuiComponentsStory.argTypes = {
  tabName: {
    options: ['buttons', 'text', 'unique_button'],
    control: { type: 'radio' }
  }
};

MuiComponentsStory.args = {
  tabName: 'buttons'
};

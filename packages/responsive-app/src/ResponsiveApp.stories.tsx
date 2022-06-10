import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { ResponsiveApp } from './ResponsiveApp';

storiesOf('Responsive App', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('does render', () => (
    <div>
      <ResponsiveApp />
    </div>
  ));



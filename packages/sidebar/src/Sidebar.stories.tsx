import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { Sidebar } from './Sidebar';

storiesOf('Sidebar', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('does render', () => (
    <div>
      <Sidebar />
    </div>
  ));



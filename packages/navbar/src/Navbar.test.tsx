import { render } from '@testing-library/react';

import { Navbar } from '.';

describe('Navbar', () => {
  it('renders the Navbar widget', async () => {
    render(<Navbar />);
  });
});

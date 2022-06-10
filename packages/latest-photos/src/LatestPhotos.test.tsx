import { render } from '@testing-library/react';

import { LatestPhotos } from '.';

describe('LatestPhotos', () => {
  it('renders the LatestPhotos widget', async () => {
    render(<LatestPhotos />);
  });
});

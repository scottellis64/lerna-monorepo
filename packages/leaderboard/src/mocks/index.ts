import { ResponseResolver } from 'msw';

import { BidsResponse } from '@sellis/application-state';

import { bids } from '../fixtures';

export const bidsResolver = (response: BidsResponse): ResponseResolver => {
  return (_req, res, ctx) => {
    // @ts-ignore
    return res(ctx.json(response));
  }
};

export const bidsHandler: ResponseResolver = bidsResolver({
  data: bids
});

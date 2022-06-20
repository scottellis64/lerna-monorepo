import { ResponseResolver } from 'msw';

import { EmailsResponse } from '@sellis/application-state';

import { emails } from '../fixtures';

export const emailResolver = (response: EmailsResponse): ResponseResolver => {
  return (_req, res, ctx) => {
    // @ts-ignore
    return res(ctx.json(response));
  }
};

export const emailsHandler: ResponseResolver = emailResolver({
  emails
});



import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Response } from '../types';

import { bidData } from './bid-api';
import { emailData } from './email-api';

export const mockAxios = axios.create();

export const createMockApi = () => {
  const mock = new MockAdapter(mockAxios);
  mock
    .onGet('/emails').reply(200, emailData)
    .onGet('/bids').reply(200, bidData);
}

export async function get<T = any, R = AxiosResponse<T>, X = Response<T>>(url: string): Promise<X> {
  try {
    const { data } = await axios.get<R>(
      url,
      {
        headers: {
          Accept: 'application/json'
        },
      },
    );

    return {
      isLoading: false,
      data
    } as unknown as X;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('error message: ', error.message);
      return {
        isLoading: false,
        error
      } as unknown as X;
    } else {
      console.error('unexpected error: ', error);
      return {
        isLoading: false,
        error: { message: 'An unexpected error occurred' }
      } as unknown as X;
    }
  }
}

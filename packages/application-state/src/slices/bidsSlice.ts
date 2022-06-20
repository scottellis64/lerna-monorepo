import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { http } from '@sellis/app-api';

import { BidType } from '../types';
import { AppThunk } from '../store';
import { AppState } from '../rootReducer';

export interface BidError {
  message: string;
}

export interface BidsResponse {
  data: BidType[],
  error?: BidError
}

export interface BidState {
  isLoading: boolean;
  bids?: BidType[];
  error?: BidError;
}

export const initialBidState: BidState = {
  isLoading: false,
  error: {message: 'An Error Occurred'}
}

const bidsSlice = createSlice({
  name: 'bids',
  initialState: initialBidState,
  reducers: {
    setBidsLoading: (state, { payload: key }: PayloadAction<boolean>) => {
      state.isLoading = key;
    },
    setBids: (state, { payload: key }: PayloadAction<BidType[]>) => {
      state.bids = key;
      state.isLoading = false;
    },
    setGetBidsFailed: (state, { payload: key }: PayloadAction<BidError>) => {
      state.error = key;
      state.isLoading = false;
    }
  }
});

export const { setBidsLoading, setBids, setGetBidsFailed } = bidsSlice.actions;

const getBids = async (): Promise<BidState> => {
  try {
    const { data } = await http.get<BidsResponse>('/bids');

    return {
      isLoading: false,
      bids: data.data
    };
  } catch (error) {
    console.error('unexpected error: ', error);
    return {
      isLoading: false,
      error: { message: 'An unexpected error occurred' }
    };
  }
}

export const fetchBids = (): AppThunk => async dispatch => {
  try {
    dispatch(setBidsLoading(true));
    const bids = await getBids();
    dispatch(setBids(bids.bids!));
  } catch (error) {
    dispatch(setGetBidsFailed(error as BidError));
  } finally {
    dispatch(setBidsLoading(false));
  }
};

export const bidsSelector = (state: AppState) => state.bids;
export const BidsReducer = bidsSlice.reducer;

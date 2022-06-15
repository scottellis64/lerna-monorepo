import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { mockAxios } from '../mock-api';

import { EmailType } from '../types';
import { AppThunk } from '../store';
import { AppState } from '../rootReducer';

export interface EmailError {
  message: string;
}

export interface EmailsResponse {
  data: EmailType[],
  error: EmailError
}

export interface EmailState {
  isLoading: boolean;
  emails?: EmailType[];
  error?: EmailError;
}

export const initialEmailsState: EmailState = {
  isLoading: false,
  emails: [],
  error: {message: 'An Error Occurred'}
}

const emailsSlice = createSlice({
  name: 'emails',
  initialState: initialEmailsState,
  reducers: {
    setEmailsLoading: (state, { payload: key }: PayloadAction<boolean>) => {
      state.isLoading = key;
    },
    setEmails: (state, { payload: key }: PayloadAction<EmailType[]>) => {
      state.emails = key;
      state.isLoading = false;
    },
    setGetEmailsFailed: (state, { payload: key }: PayloadAction<EmailError>) => {
      state.error = key;
      state.isLoading = false;
    }
  }
});

export const { setEmailsLoading, setEmails, setGetEmailsFailed } = emailsSlice.actions;

const getEmails = async (): Promise<EmailState> => {
  try {
    const { data } = await mockAxios.get<EmailsResponse>(
      '/emails',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return {
      isLoading: false,
      emails: data.data
    };
  } catch (error) {
    console.error('unexpected error: ', error);
    return {
      isLoading: false,
      error: { message: 'An unexpected error occurred' }
    };
  }
}


export const fetchEmails = (): AppThunk => async dispatch => {
  try {
    dispatch(setEmailsLoading(true));
    const emails = await getEmails();
    dispatch(setEmails(emails.emails!));
  } catch (error) {
    dispatch(setGetEmailsFailed(error as EmailError));
  } finally {
    dispatch(setEmailsLoading(false));
  }
};

export const emailsSelector = (state: AppState) => state.emails;
export const EmailsReducer = emailsSlice.reducer;

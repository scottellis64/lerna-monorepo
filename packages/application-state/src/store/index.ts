import { Action, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { AppState } from '../rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, AppState, unknown, Action>

export default store;

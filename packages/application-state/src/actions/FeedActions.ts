import { AnyAction } from '@reduxjs/toolkit';
import { FeedType, FeedUpdateLike } from '../types';

export interface SetFeedAction {
  readonly type: 'SET_FEED';
  readonly payload: FeedType[]
}

export interface AddFeedAction {
  readonly type: 'ADD_FEED';
  readonly payload: FeedType
}

export interface DeleteFeedAction {
  readonly type: 'DELETE_FEED';
  readonly payload: number
}

export interface UpdateFeedLikeAction extends AnyAction {
  readonly type: 'UPDATE_FEED_LIKE';
  readonly payload: FeedUpdateLike
}

export type FeedActions =
  | AnyAction
  | SetFeedAction
  | AddFeedAction
  | DeleteFeedAction
  | UpdateFeedLikeAction;

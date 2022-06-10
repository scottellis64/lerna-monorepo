import { ConversationType } from '../types'

export interface SetLatestConversationsAction {
  readonly type: 'SET_LATEST_CONVERSATIONS';
  readonly payload: ConversationType[]
}

export interface AddLatestConversationsAction {
  readonly type: 'ADD_LATEST_CONVERSATION';
  readonly payload: ConversationType
}

export interface DeleteLatestConversationsAction {
  readonly type: 'DELETE_LATEST_CONVERSATION';
  readonly payload: number
}

export type LatestConversationsActions =
  | SetLatestConversationsAction
  | AddLatestConversationsAction
  | DeleteLatestConversationsAction;

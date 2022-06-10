import { FriendType } from '../types'

export interface SetFriendsAction {
  readonly type: 'SET_FRIENDS';
  readonly payload: FriendType[]
}

export interface AddFriendAction {
  readonly type: 'ADD_FRIEND';
  readonly payload: FriendType
}

export interface DeleteFriendAction {
  readonly type: 'DELETE_FRIEND';
  readonly payload: number
}

export type FriendsActions =
  | SetFriendsAction
  | AddFriendAction
  | DeleteFriendAction

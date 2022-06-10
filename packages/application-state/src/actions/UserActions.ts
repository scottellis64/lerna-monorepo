import { UserType } from '../types';

export interface SetUserAction {
  readonly type: 'SET_USER';
  readonly payload: UserType
}

export interface RemoveUserAction {
  readonly type: 'REMOVE_USER';
  readonly payload: number
}

export type UserActions =
  | SetUserAction
  | RemoveUserAction;

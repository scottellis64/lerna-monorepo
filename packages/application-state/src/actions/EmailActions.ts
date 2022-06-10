import { EmailType } from '../types'

export interface SetEmailsAction {
  readonly type: 'SET_EMAILS';
  readonly payload: EmailType[]
}

export interface AddEmailAction {
  readonly type: 'ADD_EMAIL';
  readonly payload: EmailType
}

export interface DeleteEmailAction {
  readonly type: 'DELETE_EMAIL';
  readonly payload: number
}

export type EmailActions =
  | SetEmailsAction
  | AddEmailAction
  | DeleteEmailAction

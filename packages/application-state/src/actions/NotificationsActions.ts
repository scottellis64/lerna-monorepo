import { NotificationType } from '../types'

export interface SetNotificationsAction {
  readonly type: 'SET_NOTIFICATIONS';
  readonly payload: NotificationType[]
}

export interface AddNotificationAction {
  readonly type: 'ADD_NOTIFICATION';
  readonly payload: NotificationType
}

export interface DeleteNotificationAction {
  readonly type: 'DELETE_NOTIFICATION';
  readonly payload: number
}

export type NotificationsActions =
  | SetNotificationsAction
  | AddNotificationAction
  | DeleteNotificationAction

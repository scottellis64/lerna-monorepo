import { NotificationType } from '../types';
import { NotificationsActions } from '../actions';

export interface NotificationsState {
  notifications: NotificationType[];
}

const initialState: NotificationsState = {
  notifications: [{
    id: 1,
    text: 'notification 1'
  },{
    id: 2,
    text: 'notification 2'
  },{
    id: 3,
    text: 'notification 3'
  },{
    id: 4,
    text: 'notification 4'
  }]
}

export const NotificationsReducer = (state: NotificationsState = initialState, action: NotificationsActions): NotificationsState => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      return {
        notifications: action.payload
      };

    case 'ADD_NOTIFICATION':
      return {
        notifications: [...state.notifications, action.payload]
      };

    case 'DELETE_NOTIFICATION':
      return {
        notifications: state.notifications.filter(notification => notification.id !== action.payload)
      };

    default:
      return state;
  }
};

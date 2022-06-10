import { ConversationType } from '../types';
import { LatestConversationsActions } from '../actions';

import { cindyBaker, remySharp, travisHoward } from './FriendsReducer';

export interface LatestConversationsState {
  latestConversations: ConversationType[];
}

const initialState: LatestConversationsState = {
  latestConversations: [{
    id: 1,
    subject: 'Brunch this weekend?',
    friend: remySharp,
    secondary: 'Ali Connors',
    message: ' — I\'ll be in your neighborhood doing errands this…'
  },{
    id: 2,
    subject: 'Summer BBQ',
    friend: travisHoward,
    secondary: 'to Scott, Alex, Jennifer',
    message: ' — Wish I could come, but I\'m out of town this…'
  },{
    id: 3,
    subject: 'Oui Oui',
    friend: cindyBaker,
    secondary: 'Sandra Adams',
    message: ' — Do you have Paris recommendations? Have you ever…'
  }]
}

export const LatestConversationsReducer = (state: LatestConversationsState = initialState, action: LatestConversationsActions): LatestConversationsState => {
  switch (action.type) {
    case 'SET_LATEST_CONVERSATIONS':
      return {
        latestConversations: action.payload
      };

    case 'ADD_LATEST_CONVERSATION':
      return {
        latestConversations: [...state.latestConversations, action.payload]
      }

    case 'DELETE_LATEST_CONVERSATION':
      return {
        latestConversations: state.latestConversations.filter(lc => lc.id !== action.payload)
      }

    default:
      return state;
  }
}

import { combineReducers } from 'redux';

import {
  FeedReducer,
  FriendsReducer,
  LatestConversationsReducer,
  NotificationsReducer,
  UserReducer,
} from './reducers';

import { BidsReducer, EmailsReducer } from './slices';

const rootReducer = combineReducers({
  emails: EmailsReducer,
  feed: FeedReducer,
  friends: FriendsReducer,
  latestConversations: LatestConversationsReducer,
  notifications: NotificationsReducer,
  user: UserReducer,
  bids: BidsReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;

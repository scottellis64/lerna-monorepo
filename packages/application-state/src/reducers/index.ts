import { combineReducers } from 'redux';

import { EmailReducer } from './EmailReducer';
import { FeedReducer } from './FeedReducer';
import { FriendsReducer } from './FriendsReducer';
import { LatestConversationsReducer } from './LatestConversationsReducer';
import { NotificationsReducer } from './NotificationsReducer';
import { UserReducer } from './UserReducer';

const rootReducer = combineReducers({
  emails: EmailReducer,
  feed: FeedReducer,
  friends: FriendsReducer,
  latestConversations: LatestConversationsReducer,
  notifications: NotificationsReducer,
  user: UserReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;


import { FriendType } from './FriendType';

export interface ConversationType {
  id: number;
  subject: string;
  friend: FriendType;
  secondary?: string;
  message: string;
}

import { FriendType } from '../types';
import { FriendsActions } from '../actions';

export interface FriendsState {
  friends: FriendType[];
}

export const remySharp: FriendType = {
  id: 1,
  name: 'Remy Sharp',
  avatar: 'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_1280.png',
  online: false
};

export const travisHoward: FriendType = {
  id: 2,
  name: 'Travis Howard',
  avatar: 'https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png',
  online: true
};

export const cindyBaker: FriendType = {
  id: 3,
  name: 'Cindy Baker',
  avatar: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
  online: false
};

export const agnesWalker: FriendType = {
  id: 4,
  name: 'Agnes Walker',
  avatar: 'https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_1280.jpg',
  online: true
};

export const trevorHenderson: FriendType = {
  id: 5,
  name: 'Trevor Henderson',
  avatar: 'https://cdn.pixabay.com/photo/2016/12/13/16/17/dancer-1904467_1280.png',
  online: false
};

const initialState: FriendsState = {
  friends: [
    remySharp,
    travisHoward,
    cindyBaker,
    agnesWalker,
    trevorHenderson
  ]
}

export const FriendsReducer = (state: FriendsState = initialState, action: FriendsActions): FriendsState => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return {
        friends: action.payload
      };

    case 'ADD_FRIEND':
      return {
        friends: [...state.friends, action.payload]
      };

    case 'DELETE_FRIEND':
      return {
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };

    default:
      return state;
  }
};

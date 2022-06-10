import { UserType } from '../types';
import { UserActions } from '../actions';

export interface UserState {
  user?: UserType;
}

const initialState: UserState = {
  user: {
    id: 1,
    name: 'Buzz Lightyear',
    email: 'buzz@lightyear.com',
    userName: 'blightyear',
    avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'
  }
};

export const UserReducer = (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.payload
      };

    case 'REMOVE_USER':
      return {
        user: undefined
      };

    default:
      return state;
  }
};

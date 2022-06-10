import { FeedType, FeedUpdateLike } from '../types';
import { FeedActions } from '../actions';

export interface FeedState {
  feed: FeedType[];
}

const initialState: FeedState = {
  feed: [{
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/6393615/pexels-photo-6393615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAltText: 'Paella dish',
    subtitle: 'September 14, 2016',
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    title: 'Shrimp and Chorizo Paella',
    liked: false
  },{
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/4021955/pexels-photo-4021955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAltText: 'Hamburger',
    subtitle: 'June 10, 2022',
    text: 'Classic hamburger and french fries on wooden board',
    title: 'Burger and Fries',
    liked: false
  }]
}

const updateFeedLike = (state: FeedState, payload: FeedUpdateLike): FeedState => {
  return {
    feed: state.feed.map(post => {
      return post.id === payload.id ?
        { ...post, liked: ! post.liked } :
        post;
    })
  }
}

export const FeedReducer = (state: FeedState = initialState, action: FeedActions): FeedState => {
  switch (action.type) {
    case 'SET_FEED':
      return {
        feed: action.payload
      };

    case 'ADD_FEED':
      return {
        feed: [...state.feed, action.payload]
      }

    case 'UPDATE_FEED_LIKE':
      return updateFeedLike(state, action.payload);

    case 'DELETE_FEED':
      return {
        feed: state.feed.filter(feed => feed.id !== action.payload)
      }

    default:
      return state;
  }
}

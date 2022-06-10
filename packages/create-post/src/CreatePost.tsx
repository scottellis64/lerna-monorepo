import { Dispatch, useState } from 'react';

import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import { FeedActions, FeedType } from '@sellis/application-state';

import { useDispatch } from 'react-redux';

const newPosts: FeedType[] = [{
  id: 3,
  imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
  imageAltText: 'Pancakes',
  subtitle: 'October 1, 2020',
  text: 'Pancake With Sliced Strawberry',
  title: 'Pancakes',
  liked: false
}, {
  id: 4,
  imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageAltText: 'Boiled Eggs',
  subtitle: 'July 20, 2021',
  text: 'Pastry and Boiled Egg on Plate',
  title: 'Boiled Eggs',
  liked: false
}, {
  id: 5,
  imageUrl: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageAltText: 'Salad',
  subtitle: 'March 24, 2022',
  text: 'Vegetable Salad on White Ceramic Plate',
  title: 'Vegetable Salad',
  liked: false
}, {
  id: 6,
  imageUrl: 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageAltText: 'Spaghetti',
  subtitle: 'April 30, 2019',
  text: 'Black Frying Pan With Spaghetti Sauce Near Brown Wooden Ladle and Ripe Tomatoes',
  title: 'Spaghetti',
  liked: false
}, {
  id: 7,
  imageUrl: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imageAltText: 'Cooked Vegetables',
  subtitle: 'June 7, 2022',
  text: 'Plate Of Cooked Meat With Cooked Vegetable',
  title: 'Cooked Vegetables',
  liked: false
}];

export const CreatePost = () => {
  const [nextPostId, setNextPostId] = useState(3);
  // @ts-ignore
  const postDispatch = useDispatch<Dispatch<FeedActions>>();

  const addPost = () => {
    const newPost = newPosts.find(post => post.id === nextPostId);
    if (newPost) {
      postDispatch({
        type: 'ADD_FEED',
        payload: newPost
      });

      setNextPostId(nextPostId === 7 ? -1 : nextPostId + 1);
    }
  }

  return (
    <>
      <Tooltip title="Add" sx={
        { position: 'fixed',
          bottom: 20,
          display: `${nextPostId === -1 ? 'none' : 'block'}`,
          left: {
            xs: 'calc(50% - 25px)',
            md: 30
          }
        }}>
        <Fab color="primary" aria-label="add" onClick={addPost}>
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
}

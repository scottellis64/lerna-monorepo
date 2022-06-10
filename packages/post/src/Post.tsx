import { Dispatch } from 'react';

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from '@mui/material';

import { FeedActions, FeedType } from '@sellis/application-state';

export interface PostProps {
  post: FeedType;
}

export const Post = (props: PostProps) => {
  const { post } = props;
  // @ts-ignore
  const postDispatch = useDispatch<Dispatch<FeedActions>>();

  const onLikeClicked = () => {
    postDispatch({
      type: 'UPDATE_FEED_LIKE',
      payload: {
        id: post.id,
        liked: ! post.liked
    }});
  }

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: 'red'}}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={post.title}
        subheader={post.subtitle}
      />
      <CardMedia
        component="img"
        height="20%"
        image={post.imageUrl}
        alt={post.imageAltText}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: 'red' }}/>}
                  checked={post.liked}
                  onClick={onLikeClicked}/>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

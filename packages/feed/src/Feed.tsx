import {
  Box
} from '@mui/material';

import { AppState } from '@sellis/application-state';
import { useSelector } from 'react-redux';

import { useAppMetrics } from '@sellis/hooks';

import { Post } from '@sellis/post';

export const Feed = () => {
  const { contentFlex, contentPaddingLeft } = useAppMetrics();

  const { feed } = useSelector((state: AppState) => state.feed)

  return (
    <Box flex={contentFlex} sx={{ paddingLeft: contentPaddingLeft }}>
      {feed.map(post =>
        <Post key={`post_${post.id}`} post={post} />
      )}
    </Box>
  );
}

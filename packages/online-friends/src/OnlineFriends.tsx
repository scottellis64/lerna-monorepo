import { Avatar, AvatarGroup, Typography } from '@mui/material';

import { AppState } from '@sellis/application-state';
import { useSelector } from 'react-redux';

export const OnlineFriends = () => {
  const { friends } = useSelector((state: AppState) => state.friends)

  return (
    <>
      <Typography variant='h6' fontWeight={100}>Online Friends</Typography>

      <AvatarGroup max={4}>
        {friends.map(friend =>
          <Avatar alt={friend.name} src={friend.avatar} key={`friend_${friend.id}`}/>
        )}
      </AvatarGroup>
    </>
  );
}

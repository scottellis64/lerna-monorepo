import { Box } from '@mui/material';

import { LatestConversations } from '@sellis/latest-conversations';
import { OnlineFriends } from '@sellis/online-friends';

import { useAppMetrics } from '@sellis/hooks';

export const Rightbar = () => {
  const { rightbarFlex, rightbarShown } = useAppMetrics();
  return (
    <Box flex={rightbarFlex} sx={{ display: rightbarShown ? 'block' : 'none' }}>
      <Box position='fixed' sx={{ marginRight: 10 }}>
        <OnlineFriends />
        {/*<LatestPhotos />*/}
        <LatestConversations />
      </Box>
    </Box>
  );
}

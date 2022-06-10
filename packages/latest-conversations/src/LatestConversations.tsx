import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Fragment } from 'react';

import { AppState } from '@sellis/application-state';
import { useSelector } from 'react-redux';

export const LatestConversations = () => {
  const { latestConversations } = useSelector((state: AppState) => state.latestConversations)

  return (
    <>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {latestConversations.map(conversation =>
          <div key={`latest_conversation_${conversation.id}`}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={conversation.friend.name} src={conversation.friend.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={conversation.subject}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {conversation.secondary}
                    </Typography>
                    {conversation.message}
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        )}
      </List>
    </>
  );
}

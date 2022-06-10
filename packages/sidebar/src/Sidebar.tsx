import { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { useAppMetrics } from '@sellis/hooks';
import { Route, routes } from '@sellis/routes';

export const Sidebar = () => {
  const { sidebarFlex, sidebarSmall } = useAppMetrics();

  const getListItemText = (text: string): ReactElement => {
    return <ListItemText primary={text} sx={{ display: sidebarSmall ? 'none' : 'block'}}/>;
  }

  const navigate = useNavigate();

  return (
    <Box flex={sidebarFlex}>
      <Box position='fixed'>
        <List>
          {routes.map((route: Route) => (
            <ListItem disablePadding key={route.key}>
              <ListItemButton onClick={() => navigate(route.path!)}>
                <ListItemIcon>
                  {route.icon!}
                </ListItemIcon>
                {getListItemText(route.title)}
              </ListItemButton>
            </ListItem>
          ))
          }
        </List>
      </Box>
    </Box>
  );
}

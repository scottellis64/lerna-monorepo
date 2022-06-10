import { Box, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { AppRoot } from '@sellis/app-root';
import { CreatePost } from '@sellis/create-post';
import { Navbar } from '@sellis/navbar';
import { Rightbar } from '@sellis/rightbar';
import { Sidebar } from '@sellis/sidebar';

import { Route as AppRoute, routes } from '@sellis/routes';

export const ResponsiveApp = () => {
  return (
    <AppRoot>
      <Box>
        <Navbar />
        <Stack direction='row' justifyContent={'space-between'}>
          <Sidebar />

          <Routes>
            {routes.map((route: AppRoute) =>
              <Route path={route.path!} element={route.component} key={route.key}/>
            )}
          </Routes>

          <Rightbar />
        </Stack>
        <CreatePost />
      </Box>
    </AppRoot>
  );
}

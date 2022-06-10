import { ReactNode } from 'react';

import { AccountBox, Groups, Home, Pages, Person, Settings, Storefront } from '@mui/icons-material';

import { Route } from '../types/Route';
import { Feed } from '@sellis/feed';
import { ComingSoon } from '@sellis/coming-soon';

const createComponent = (name: string, icon: ReactNode): ReactNode => {
  return <ComingSoon name={name} icon={icon}/>
};

export const routes: Array<Route> = [{
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: <Feed />,
    path: '/',
    isEnabled: true,
    icon: <Home/>,
    appendDivider: true
  }, {
    key: 'router-pages',
    title: 'Pages',
    description: 'Pages',
    component: createComponent('Pages', <Pages/>),
    path: '/pages',
    isEnabled: true,
    icon: <Pages/>,
    appendDivider: true
  }, {
    key: 'router-groups',
    title: 'Groups',
    description: 'Groups',
    component: createComponent('Groups', <Groups/>),
    path: '/groups',
    isEnabled: true,
    icon: <Groups/>,
    appendDivider: true
  }, {
    key: 'router-marketplace',
    title: 'Marketplace',
    description: 'Marketplace',
    component: createComponent('Marketplace', <Storefront/>),
    path: '/marketplace',
    isEnabled: true,
    icon: <Storefront/>,
    appendDivider: true
  }, {
    key: 'router-friends',
    title: 'Friends',
    description: 'Friends',
    component: createComponent('Friends', <Person/>),
    path: '/friends',
    isEnabled: true,
    icon: <Person/>,
    appendDivider: true
  }, {
    key: 'router-settings',
    title: 'Settings',
    description: 'Settings',
    component: createComponent('Settings', <Settings/>),
    path: '/settings',
    isEnabled: true,
    icon: <Settings/>,
    appendDivider: true
  }, {
    key: 'router-profile',
    title: 'Profile',
    description: 'Profile',
    component: createComponent('Profile', <AccountBox/>),
    path: '/profile',
    isEnabled: true,
    icon: <AccountBox/>,
    appendDivider: true
  }
];

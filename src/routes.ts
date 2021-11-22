import React from 'react';
import Home from './renderer/pages/Home';

export interface RouteInfo {
  path: string;
  component: React.FunctionComponent;
  exact?: boolean;
  children?: RouteInfo[];
}

const routes: RouteInfo[] = [
  {
    path: '/',
    component: Home,
    // exact: true,
    children: [
      {
        path: '/home',
        component: Home,
        exact: true,
      },
    ],
  },
];
export default routes;

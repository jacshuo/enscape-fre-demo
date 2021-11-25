import React from 'react';
import {
  ApartmentOutlined,
  UnorderedListOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import Home from './renderer/pages/Home';
import Demo1 from './renderer/pages/Demo1';
import Demo2 from './renderer/pages/Demo2';
import Demo3 from './renderer/pages/Demo3';
import LargeScreen from './renderer/pages/LargeScreen';

export interface RouteInfo {
  key: string; // 导航Path
  component: React.FunctionComponent; // 组件类型
  exact?: boolean;
  title?: string;
  icon?: any; // 导航图标
  children?: RouteInfo[];
}

const routes: RouteInfo[] = [
  {
    key: '/',
    component: Home,
    exact: false,
    title: '中后台应用演示',
    icon: ApartmentOutlined,
    children: [
      {
        key: '/demo1',
        component: Demo1,
        exact: true,
        title: '示例组合1',
        icon: UnorderedListOutlined,
      },
      {
        key: '/demo2',
        component: Demo2,
        exact: true,
        title: '示例组合2',
        icon: UnorderedListOutlined,
      },
      {
        key: '/demo3',
        component: Demo3,
        exact: true,
        title: '示例组合3',
        icon: UnorderedListOutlined,
      },
    ],
  },
  {
    key: '/largeScreen',
    component: LargeScreen,
    exact: false,
    title: '大屏应用展示',
    icon: RobotOutlined,
    children: [
      {
        key: '/largeScreen/demo3',
        component: Demo3,
        exact: true,
        title: '示例组合3',
        icon: UnorderedListOutlined,
      },
    ],
  },
];
export default routes;

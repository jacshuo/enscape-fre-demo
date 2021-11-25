import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;
const SiderNav: React.FC = () => {
  const [activeMenuKey, setActiveMenuKey] = useState(['1']);
  const handleMenuClick = (e) => {
    console.log(`MenuClicked: ${e.key}`);
    setActiveMenuKey([e.key]);
  };

  return (
    <>
      <Menu
        onClick={handleMenuClick}
        selectedKeys={activeMenuKey}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title="平面基本图表">
          <Menu.Item key="1">
            <Link to="/demo1">示例组合1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/demo2">示例组合2</Link>
          </Menu.Item>
          <Menu.Item key="3">示例组合3</Menu.Item>
          <Menu.Item key="4">示例组合4</Menu.Item>
          <Menu.Item key="5">示例组合5</Menu.Item>
          <Menu.Item key="6">示例组合6</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default SiderNav;

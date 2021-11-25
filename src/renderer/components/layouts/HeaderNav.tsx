import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Col, Menu, Row } from 'antd';
import styles from './HeaderNav.module.scss';

const cl = classNames.bind(styles);
const HeaderNav: React.FC = () => {
  const cls = cl(styles['brand']);
  const [activeMenuKey, setActiveMenuKey] = useState('home');
  const handleMenuClick = (e) => {
    console.log(`MenuClicked: ${e.key}`);
    setActiveMenuKey(e.key);
  };
  return (
    <>
      <Row gutter={5}>
        <Col span={6}>
          <h2 className={cls}>本地部署可视化应用展示</h2>
        </Col>
        <Col span={18}>
          <Menu
            mode="horizontal"
            onClick={handleMenuClick}
            selectedKeys={[activeMenuKey]}
            // theme="dark"
          >
            <Menu.Item key="home">中后台布局演示</Menu.Item>
            <Menu.Item key="largeScreen">大屏应用展示</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default HeaderNav;

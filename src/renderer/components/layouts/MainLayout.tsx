/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Col, Layout, Menu, Row, Switch as AntSwitch, Typography } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import Demo1 from '../../pages/Demo1';
import Demo2 from '../../pages/Demo2';
import Demo3 from '../../pages/Demo3';
import Home from '../../pages/Home';
import 'antd/dist/antd.dark.min.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const MainLayout: React.FC = () => {
  const [mode, setMode] = useState('dark');
  const handleChange = (checked) => {
    if (checked) {
      setMode('light');
    } else {
      setMode('dark');
    }
  };
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact={false}>
            <Header>
              <Row>
                <Col span={6}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                  }}>
                    <Title level={3} style={{ margin: 0 }}>
                      本地部署可视化应用Demo
                    </Title>
                  </div>
                </Col>
                <Col span={6}>
                  <AntSwitch
                    checkedChildren='主题1'
                    unCheckedChildren='主题2'
                    defaultChecked={false}
                    onChange={handleChange}
                  />
                </Col>
                <Col span={12}>
                  <Menu mode='horizontal' theme={mode}>
                    <Menu.Item key='/'>
                      <Link to='/'>ShowBox</Link>
                    </Menu.Item>
                    <Menu.Item key='/demo1'>
                      <Link to='/demo1'>Single</Link>
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </Header>
          </Route>
        </Switch>
        <Content>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/demo1' exact component={Demo1} />
            <Route path='/demo2' exact component={Demo2} />
            <Route path='/demo3' exact component={Demo3} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </>
  );
};

export default MainLayout;

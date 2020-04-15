import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOut } from '../../store/actions/session.actions';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Popover, Button, Avatar } from 'antd';
import logoHead from './logo_head.png';
import defaultProfile from './profile.png';
import './styles.css';

const { Header, Content, Footer, Sider } = Layout;

export default function SiderDemo(props) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
    props.history.push('/');
  }

  function goToProfile() {
    props.history.push('/profile');
  }

  const contentPopUp = (
    <div>
      <Button
        block
        type="primary position-margin"
        onClick={() => goToProfile()}
      >
        Perfil
      </Button>
      <Button block type="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );

  const textPopUp = (
    <>
      <div className="icon-foto-profile">
        <div onClick={() => goToProfile()} style={{ cursor: 'pointer' }}>
          <Avatar
            src={
              localStorage.getItem('@avatar')
                ? localStorage.getItem('@avatar')
                : defaultProfile
            }
          />
        </div>
      </div>
      <center>
        <span>{localStorage.getItem('@email')}</span>
      </center>
    </>
  );

  const onCollapse = menu => {
    setCollapsed(menu);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/home">
              <Icon type="home" />
              <span> Home </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/verify">
              <Icon type="qrcode" />
              <span> Verificador </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/editor">
              <Icon type="edit" />
              <span> Editor </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/documents">
              <Icon type="book" />
              <span> Documentos </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/reports">
              <Icon type="bar-chart" />
              <span> Relatórios </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <img style={{ marginTop: '-3px' }} height="100%" alt="LogoHead" src={logoHead} />
          <Popover
            placement="bottomRight"
            title={textPopUp}
            content={contentPopUp}
            trigger="click"
          >
            <Button style={{ position: 'fixed', right: '14px', top: '14px' }}>
              <Icon type="user" />
            </Button>
          </Popover>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          {props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>IMPA ©2020</Footer>
      </Layout>
    </Layout>
  );
}

Layout.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
  }),
};

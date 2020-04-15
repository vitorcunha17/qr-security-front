import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
//import { SignRequest } from '../../store/actions/session.actions';
import { Form, Input } from '@rocketseat/unform';
import { Icon, Button, Card, Spin } from 'antd';

export default function Login(props) {
  const dispatch = useDispatch();
  const session = useSelector(state => state.auth);
  useEffect(() => {
    if (localStorage.getItem('@token')) {
      props.history.push('/home');
    }
  }, [session])

  /*function handleSubmit(data) {
    const { email, password } = data;
    dispatch(SignRequest(email, password));
  }*/

  function handleSubmit(data) {
    const { email, password } = data;
    if (email === "vitor@connection.com" && password === "admin") {
      props.history.push('/home');
    }
  }

  return (
    <div className="wrapper">
      <Card className="login-card">
        <img alt="logo-login" src={logo} width="100%" />
        <br />
        <Form onSubmit={handleSubmit} className="login-form">
          <Icon type="user" className="icons-position" />
          <Input className="ant-input input-login" name="email" placeholder="&nbsp;Login" />
          <Icon type="lock" className="icons-position2" />
          <Input className="ant-input input-login" name="password" type="password" placeholder="&nbsp;Senha" />
          <Button block type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
          <Button block type="default" htmlType="submit" className="login-form-button">
            Cadastrar
          </Button>
          <div className="container-spinner">
            <Spin spinning={session.loading} size="large" />
          </div>
        </Form>
      </Card>
    </div>
  );
}

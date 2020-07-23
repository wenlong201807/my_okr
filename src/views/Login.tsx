import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// import history from '../historys';
import { useHistory } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/reflect/login.scss';

const Login = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log('登录信息', values);
    history.push('/home/BaseCenterOKR');
  };
  return (
    <div className="loginContainer">
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <span className="login-form-forgot">忘记密码</span>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

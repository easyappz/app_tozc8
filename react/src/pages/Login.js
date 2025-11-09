import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout, Card, Form, Input, Button, message, Typography } from 'antd';
import { MailOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { login as loginApi } from '../api/auth';
import Navigation from '../components/Navigation';

const { Content } = Layout;
const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const data = await loginApi(values);
      login(data.user, data.access, data.refresh);
      message.success('Вход выполнен успешно!');
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
      message.error(error.response?.data?.detail || 'Ошибка при входе');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout data-easytag="id1-react/src/pages/Login.js" className="min-h-screen">
      <Navigation />
      <Content className="flex items-center justify-center p-8">
        <Card className="max-w-md w-full shadow-lg">
          <Title level={2} className="text-center mb-6">
            Вход в систему
          </Title>
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            data-easytag="id2-react/src/pages/Login.js"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Пожалуйста, введите email!' },
                { type: 'email', message: 'Пожалуйста, введите корректный email!' }
              ]}
              data-easytag="id3-react/src/pages/Login.js"
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="example@mail.com"
                size="large"
                data-easytag="id4-react/src/pages/Login.js"
              />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                { required: true, message: 'Пожалуйста, введите пароль!' }
              ]}
              data-easytag="id5-react/src/pages/Login.js"
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Введите пароль"
                size="large"
                data-easytag="id6-react/src/pages/Login.js"
              />
            </Form.Item>

            <Form.Item data-easytag="id7-react/src/pages/Login.js">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<LoginOutlined />}
                loading={loading}
                block
                data-easytag="id8-react/src/pages/Login.js"
              >
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center" data-easytag="id9-react/src/pages/Login.js">
            <Text>Нет аккаунта? </Text>
            <Link to="/register" data-easytag="id10-react/src/pages/Login.js">
              Зарегистрироваться
            </Link>
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default Login;
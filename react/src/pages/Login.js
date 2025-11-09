import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/auth';

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const data = await login(values.email, values.password);
      
      localStorage.setItem('token', data.access);
      localStorage.setItem('refresh', data.refresh);
      
      message.success('Вход выполнен успешно!');
      navigate('/profile');
    } catch (error) {
      const errorMessage = error.response?.data?.detail ||
                          error.response?.data?.non_field_errors?.[0] ||
                          'Неверный email или пароль';
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-easytag="id1-react/src/pages/Login.js"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card
        data-easytag="id2-react/src/pages/Login.js"
        className="w-full max-w-md shadow-lg"
      >
        <div data-easytag="id3-react/src/pages/Login.js" className="text-center mb-8">
          <Title data-easytag="id4-react/src/pages/Login.js" level={2}>
            Авторизация
          </Title>
          <Text data-easytag="id5-react/src/pages/Login.js" type="secondary">
            Войдите в свой аккаунт
          </Text>
        </div>

        <Form
          data-easytag="id6-react/src/pages/Login.js"
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            data-easytag="id7-react/src/pages/Login.js"
            label="Почта"
            name="email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите email!',
              },
              {
                type: 'email',
                message: 'Введите корректный email!',
              },
            ]}
          >
            <Input
              data-easytag="id8-react/src/pages/Login.js"
              prefix={<MailOutlined />}
              placeholder="example@mail.com"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id9-react/src/pages/Login.js"
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
            ]}
          >
            <Input.Password
              data-easytag="id10-react/src/pages/Login.js"
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
            />
          </Form.Item>

          <Form.Item data-easytag="id11-react/src/pages/Login.js">
            <Button
              data-easytag="id12-react/src/pages/Login.js"
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              Войти
            </Button>
          </Form.Item>

          <div data-easytag="id13-react/src/pages/Login.js" className="text-center">
            <Text data-easytag="id14-react/src/pages/Login.js">
              Нет аккаунта?{' '}
              <Link data-easytag="id15-react/src/pages/Login.js" to="/register">
                Зарегистрироваться
              </Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;

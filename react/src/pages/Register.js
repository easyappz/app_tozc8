import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout, Card, Form, Input, Button, message, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { register } from '../api/auth';
import Navigation from '../components/Navigation';

const { Content } = Layout;
const { Title, Text } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const data = await register(values);
      login(data.user, data.access, data.refresh);
      message.success('Регистрация успешна!');
      navigate('/profile');
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error.response?.data?.email?.[0] || 
                          error.response?.data?.password?.[0] ||
                          error.response?.data?.detail ||
                          'Ошибка при регистрации';
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout data-easytag="id1-react/src/pages/Register.js" className="min-h-screen">
      <Navigation />
      <Content className="flex items-center justify-center p-8">
        <Card className="max-w-md w-full shadow-lg">
          <Title level={2} className="text-center mb-6">
            Регистрация
          </Title>
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            data-easytag="id2-react/src/pages/Register.js"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Пожалуйста, введите email!' },
                { type: 'email', message: 'Пожалуйста, введите корректный email!' }
              ]}
              data-easytag="id3-react/src/pages/Register.js"
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="example@mail.com"
                size="large"
                data-easytag="id4-react/src/pages/Register.js"
              />
            </Form.Item>

            <Form.Item
              label="Имя"
              name="first_name"
              rules={[
                { required: true, message: 'Пожалуйста, введите имя!' }
              ]}
              data-easytag="id5-react/src/pages/Register.js"
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Иван"
                size="large"
                data-easytag="id6-react/src/pages/Register.js"
              />
            </Form.Item>

            <Form.Item
              label="Фамилия"
              name="last_name"
              rules={[
                { required: true, message: 'Пожалуйста, введите фамилию!' }
              ]}
              data-easytag="id7-react/src/pages/Register.js"
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Иванов"
                size="large"
                data-easytag="id8-react/src/pages/Register.js"
              />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                { required: true, message: 'Пожалуйста, введите пароль!' },
                { min: 6, message: 'Пароль должен содержать минимум 6 символов!' }
              ]}
              data-easytag="id9-react/src/pages/Register.js"
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Минимум 6 символов"
                size="large"
                data-easytag="id10-react/src/pages/Register.js"
              />
            </Form.Item>

            <Form.Item data-easytag="id11-react/src/pages/Register.js">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<UserAddOutlined />}
                loading={loading}
                block
                data-easytag="id12-react/src/pages/Register.js"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center" data-easytag="id13-react/src/pages/Register.js">
            <Text>Уже есть аккаунт? </Text>
            <Link to="/login" data-easytag="id14-react/src/pages/Register.js">
              Войти
            </Link>
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default Register;
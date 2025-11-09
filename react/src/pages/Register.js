import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/auth';

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const data = await register(
        values.email,
        values.firstName,
        values.lastName,
        values.password
      );
      
      localStorage.setItem('token', data.access);
      localStorage.setItem('refresh', data.refresh);
      
      message.success('Регистрация прошла успешно!');
      navigate('/profile');
    } catch (error) {
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
    <div
      data-easytag="id1-react/src/pages/Register.js"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card
        data-easytag="id2-react/src/pages/Register.js"
        className="w-full max-w-md shadow-lg"
      >
        <div data-easytag="id3-react/src/pages/Register.js" className="text-center mb-8">
          <Title data-easytag="id4-react/src/pages/Register.js" level={2}>
            Регистрация
          </Title>
          <Text data-easytag="id5-react/src/pages/Register.js" type="secondary">
            Создайте новый аккаунт
          </Text>
        </div>

        <Form
          data-easytag="id6-react/src/pages/Register.js"
          form={form}
          name="register"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            data-easytag="id7-react/src/pages/Register.js"
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
              data-easytag="id8-react/src/pages/Register.js"
              prefix={<MailOutlined />}
              placeholder="example@mail.com"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id9-react/src/pages/Register.js"
            label="Имя"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите имя!',
              },
            ]}
          >
            <Input
              data-easytag="id10-react/src/pages/Register.js"
              prefix={<UserOutlined />}
              placeholder="Иван"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id11-react/src/pages/Register.js"
            label="Фамилия"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите фамилию!',
              },
            ]}
          >
            <Input
              data-easytag="id12-react/src/pages/Register.js"
              prefix={<UserOutlined />}
              placeholder="Иванов"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id13-react/src/pages/Register.js"
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
              {
                min: 8,
                message: 'Пароль должен содержать минимум 8 символов!',
              },
            ]}
          >
            <Input.Password
              data-easytag="id14-react/src/pages/Register.js"
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
            />
          </Form.Item>

          <Form.Item data-easytag="id15-react/src/pages/Register.js">
            <Button
              data-easytag="id16-react/src/pages/Register.js"
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              Зарегистрироваться
            </Button>
          </Form.Item>

          <div data-easytag="id17-react/src/pages/Register.js" className="text-center">
            <Text data-easytag="id18-react/src/pages/Register.js">
              Уже есть аккаунт?{' '}
              <Link data-easytag="id19-react/src/pages/Register.js" to="/login">
                Войти
              </Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;

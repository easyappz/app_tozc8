import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Card, Typography, Spin } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile, logout } from '../api/auth';

const { Title, Text } = Typography;

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data);
      form.setFieldsValue({
        email: data.email,
        firstName: data.first_name,
        lastName: data.last_name,
      });
    } catch (error) {
      message.error('Ошибка при загрузке профиля');
      navigate('/login');
    } finally {
      setFetching(false);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const data = await updateProfile(
        values.email,
        values.firstName,
        values.lastName
      );
      setUser(data);
      message.success('Профиль обновлен успешно!');
    } catch (error) {
      const errorMessage = error.response?.data?.email?.[0] ||
                          error.response?.data?.detail ||
                          'Ошибка при обновлении профиля';
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh');
      await logout(refreshToken);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh');
      message.success('Вы вышли из системы');
      navigate('/login');
    }
  };

  if (fetching) {
    return (
      <div
        data-easytag="id1-react/src/pages/Profile.js"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <Spin data-easytag="id2-react/src/pages/Profile.js" size="large" />
      </div>
    );
  }

  return (
    <div
      data-easytag="id3-react/src/pages/Profile.js"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card
        data-easytag="id4-react/src/pages/Profile.js"
        className="w-full max-w-md shadow-lg"
      >
        <div data-easytag="id5-react/src/pages/Profile.js" className="text-center mb-8">
          <Title data-easytag="id6-react/src/pages/Profile.js" level={2}>
            Профиль
          </Title>
          <Text data-easytag="id7-react/src/pages/Profile.js" type="secondary">
            Управление настройками профиля
          </Text>
        </div>

        <Form
          data-easytag="id8-react/src/pages/Profile.js"
          form={form}
          name="profile"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            data-easytag="id9-react/src/pages/Profile.js"
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
              data-easytag="id10-react/src/pages/Profile.js"
              prefix={<MailOutlined />}
              placeholder="example@mail.com"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id11-react/src/pages/Profile.js"
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
              data-easytag="id12-react/src/pages/Profile.js"
              prefix={<UserOutlined />}
              placeholder="Иван"
            />
          </Form.Item>

          <Form.Item
            data-easytag="id13-react/src/pages/Profile.js"
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
              data-easytag="id14-react/src/pages/Profile.js"
              prefix={<UserOutlined />}
              placeholder="Иванов"
            />
          </Form.Item>

          <Form.Item data-easytag="id15-react/src/pages/Profile.js">
            <Button
              data-easytag="id16-react/src/pages/Profile.js"
              type="primary"
              htmlType="submit"
              loading={loading}
              block
            >
              Сохранить изменения
            </Button>
          </Form.Item>

          <Form.Item data-easytag="id17-react/src/pages/Profile.js">
            <Button
              data-easytag="id18-react/src/pages/Profile.js"
              danger
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              block
            >
              Выйти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;

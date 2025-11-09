import React, { useState, useEffect } from 'react';
import { Layout, Card, Form, Input, Button, message, Typography } from 'antd';
import { UserOutlined, MailOutlined, SaveOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from '../api/auth';
import Navigation from '../components/Navigation';

const { Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name
      });
    }
  }, [user, form]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const updatedUser = await updateProfile(values);
      updateUser(updatedUser);
      message.success('Профиль успешно обновлен!');
    } catch (error) {
      console.error('Profile update error:', error);
      message.error(error.response?.data?.detail || 'Ошибка при обновлении профиля');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout data-easytag="id1-react/src/pages/Profile.js" className="min-h-screen">
      <Navigation />
      <Content className="flex items-center justify-center p-8">
        <Card className="max-w-md w-full shadow-lg">
          <Title level={2} className="text-center mb-6">
            Профиль пользователя
          </Title>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            data-easytag="id2-react/src/pages/Profile.js"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Пожалуйста, введите email!' },
                { type: 'email', message: 'Пожалуйста, введите корректный email!' }
              ]}
              data-easytag="id3-react/src/pages/Profile.js"
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="example@mail.com"
                size="large"
                data-easytag="id4-react/src/pages/Profile.js"
              />
            </Form.Item>

            <Form.Item
              label="Имя"
              name="first_name"
              rules={[
                { required: true, message: 'Пожалуйста, введите имя!' }
              ]}
              data-easytag="id5-react/src/pages/Profile.js"
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Иван"
                size="large"
                data-easytag="id6-react/src/pages/Profile.js"
              />
            </Form.Item>

            <Form.Item
              label="Фамилия"
              name="last_name"
              rules={[
                { required: true, message: 'Пожалуйста, введите фамилию!' }
              ]}
              data-easytag="id7-react/src/pages/Profile.js"
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Иванов"
                size="large"
                data-easytag="id8-react/src/pages/Profile.js"
              />
            </Form.Item>

            <Form.Item data-easytag="id9-react/src/pages/Profile.js">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                icon={<SaveOutlined />}
                loading={loading}
                block
                data-easytag="id10-react/src/pages/Profile.js"
              >
                Сохранить
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;
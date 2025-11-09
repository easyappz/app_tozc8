import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Button, Card } from 'antd';
import { LoginOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import Navigation from '../components/Navigation';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  return (
    <Layout data-easytag="id1-react/src/pages/Home.js" className="min-h-screen">
      <Navigation />
      <Content className="flex items-center justify-center p-8">
        <Card className="max-w-2xl w-full shadow-lg">
          <div data-easytag="id2-react/src/pages/Home.js" className="text-center">
            <Title level={1} className="text-blue-600">
              Добро пожаловать!
            </Title>
            {isAuthenticated ? (
              <div data-easytag="id3-react/src/pages/Home.js">
                <Paragraph className="text-lg mb-6">
                  Здравствуйте, {user?.first_name} {user?.last_name}!
                </Paragraph>
                <Paragraph className="text-gray-600 mb-8">
                  Вы успешно авторизованы в системе. Перейдите в профиль для управления вашими данными.
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<UserOutlined />}
                  onClick={() => navigate('/profile')}
                  data-easytag="id4-react/src/pages/Home.js"
                >
                  Перейти в профиль
                </Button>
              </div>
            ) : (
              <div data-easytag="id5-react/src/pages/Home.js">
                <Paragraph className="text-lg mb-6">
                  Это главная страница нашего приложения.
                </Paragraph>
                <Paragraph className="text-gray-600 mb-8">
                  Пожалуйста, войдите в систему или зарегистрируйтесь для продолжения.
                </Paragraph>
                <div className="flex gap-4 justify-center">
                  <Button
                    type="primary"
                    size="large"
                    icon={<LoginOutlined />}
                    onClick={() => navigate('/login')}
                    data-easytag="id6-react/src/pages/Home.js"
                  >
                    Войти
                  </Button>
                  <Button
                    size="large"
                    icon={<UserAddOutlined />}
                    onClick={() => navigate('/register')}
                    data-easytag="id7-react/src/pages/Home.js"
                  >
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default Home;
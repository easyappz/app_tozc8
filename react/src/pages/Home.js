import React from 'react';
import { Button, Card, Typography } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      data-easytag="id1-react/src/pages/Home.js"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card
        data-easytag="id2-react/src/pages/Home.js"
        className="w-full max-w-2xl shadow-lg text-center"
      >
        <div data-easytag="id3-react/src/pages/Home.js" className="mb-8">
          <Title data-easytag="id4-react/src/pages/Home.js" level={1}>
            Добро пожаловать!
          </Title>
          <Paragraph data-easytag="id5-react/src/pages/Home.js" className="text-lg text-gray-600">
            Зарегистрируйтесь или войдите в систему для продолжения
          </Paragraph>
        </div>

        <div data-easytag="id6-react/src/pages/Home.js" className="flex gap-4 justify-center flex-wrap">
          <Button
            data-easytag="id7-react/src/pages/Home.js"
            type="primary"
            size="large"
            icon={<UserAddOutlined />}
            onClick={() => navigate('/register')}
          >
            Регистрация
          </Button>
          <Button
            data-easytag="id8-react/src/pages/Home.js"
            size="large"
            icon={<LoginOutlined />}
            onClick={() => navigate('/login')}
          >
            Войти
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;

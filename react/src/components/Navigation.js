import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, UserOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

const { Header } = Layout;

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Главная</Link>
    }
  ];

  if (isAuthenticated) {
    menuItems.push({
      key: '/profile',
      icon: <UserOutlined />,
      label: <Link to="/profile">Профиль</Link>
    });
  } else {
    menuItems.push(
      {
        key: '/login',
        icon: <LoginOutlined />,
        label: <Link to="/login">Вход</Link>
      },
      {
        key: '/register',
        icon: <UserAddOutlined />,
        label: <Link to="/register">Регистрация</Link>
      }
    );
  }

  return (
    <Header data-easytag="id1-react/src/components/Navigation.js" className="flex items-center justify-between bg-white shadow-md px-8">
      <div className="flex items-center">
        <div className="text-xl font-bold text-blue-600 mr-8">Мое Приложение</div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          className="flex-1 border-0"
        />
      </div>
      {isAuthenticated && (
        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          data-easytag="id2-react/src/components/Navigation.js"
        >
          Выйти
        </Button>
      )}
    </Header>
  );
};

export default Navigation;
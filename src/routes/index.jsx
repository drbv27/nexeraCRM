import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';

const AdminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
    </>
  );
};

const UserRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
    </>
  );
};

const Router = () => {
  const isAdmin = true; // Determina si el usuario es administrador o no

  return (
    <Routes>
      <Route path="/" element={<App />} />
      {isAdmin ? <AdminRoutes /> : <UserRoutes />}
    </Routes>
  );
};

export default Router;


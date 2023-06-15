import React from 'react';
import { Route, Routes,Limk } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';
import ClientDetails from '../pages/ClientDetails';

const AdminRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/clients/:id" element={<ClientDetails />} />
    </>
  );
};

const UserRoutes = () => {
  return (
    <>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/clients/:id" element={<ClientDetails />} />
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


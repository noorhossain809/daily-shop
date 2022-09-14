import StoreView from 'components/common/StoreView';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Homes = React.lazy(() => import('./pages/home/Homes'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Login = React.lazy(() => import('./forms/LoginForm'))

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const AppRouter = (props: BoxProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {props.children}

        <Route path="/" element={<Homes />} />
        <Route path="help" element={<Help />} />
        <Route path="login" element={<Login />} />
        <Route path="store/:id" element={<StoreView />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

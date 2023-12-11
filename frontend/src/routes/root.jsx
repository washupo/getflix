// routes/root.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import CookieConsentComponent from '../components/Cookies';

export default function Root() {
  return (
    <>
      <CookieConsentComponent />
      <Outlet />
    </>
  );
}

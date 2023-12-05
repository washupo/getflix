import React from 'react';
import { Outlet } from "react-router-dom";
import Cookies from '../components/Cookies'; 


export default function Root() {
  return (
    <>
      <Cookies />
      <Outlet />
    </>
  );
}
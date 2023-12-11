import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'

import Home from './pages/accueil.jsx'
import Page1 from './pages/page1.jsx'

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      // {
      //   path: "/",
      //   element: <SignUp />,
      // },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

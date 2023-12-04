import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import Home from './pages/accueil.jsx'
import Page1 from './pages/page1.jsx'
import Gallerie from './pages/gallerie.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import { ConfigProvider } from 'antd'

const theme = {
  token: {
    colorPrimary: '#724c89',
    borderRadius: 2,
    colorBgContainer: '#f6ffed',
  },
}

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
      {
        path: "/gallerie",
        element: <Gallerie />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
     </ConfigProvider>
  </React.StrictMode>,
)

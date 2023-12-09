import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'


// import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Landing from './pages/landing.jsx'
import Login from './pages/login.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#550033ff', // Couleur principale (purple)
    },
    secondary: {
      main: '#C295B0ff', // Couleur secondaire (light pink)
    }
  },
  // Ajoutez d'autres configurations de thème si nécessaire
});



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

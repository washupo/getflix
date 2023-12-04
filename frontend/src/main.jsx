import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'

import Home from './pages/accueil.jsx'
import Page1 from './pages/page1.jsx'

import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      main: '#550033ff', // Couleur principale (purple)
    },
    secondary: {
      main: '#C295B0ff', // Couleur secondaire (light pink)
    },
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
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

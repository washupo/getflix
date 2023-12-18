import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'

import Login from './pages/login.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing.jsx'

import Account from './pages/account.jsx'

import Layout from './components/layout.jsx'

import Parametres from './pages/parametres.jsx'

import Fiche from './pages/fiche.jsx'
import Home from './pages/home.jsx'
import Footer from './components/footer.jsx'

const theme = createTheme({
    palette: {
        primary: {
            main: '#550033ff', // Couleur principale (purple)
        },
        secondary: {
            main: '#C295B0ff', // Couleur secondaire (light pink)
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404</div>,

        children: [
            {
                path: '/',
                element: <Landing />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/account',
                element: <Account />,
            },
            {
                path: '/home',
                element: (
                    <Layout>
                        <Home />
                    </Layout>
                ),
            },
            {
                path: '/parametres',
                element: (
                    <Layout>
                        <Parametres />
                    </Layout>
                ),
            },
            {
                path: '/fiche/:id',
                element: (
                    <Layout>
                        <Fiche />
                    </Layout>
                ),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

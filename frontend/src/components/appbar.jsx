import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import { Link, useNavigate } from 'react-router-dom'
import MyComponent from './catButton'

function ResponsiveAppBar() {
    const navigate = useNavigate()

    const onClickSettings = () => {
        navigate('/parametres')
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <img
                            height="100%"
                            width="70px"
                            src="../assets/chill.png"
                            alt="Logo"
                        />
                    </Link>
                    <MyComponent />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    />
                    <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={onClickSettings} sx={{ p: 0 }}>
                                <Avatar alt="User" src="......" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default ResponsiveAppBar

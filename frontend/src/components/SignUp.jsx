import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Copyright } from './CopyRight'
import { autocompleteClasses } from '@mui/material'

const defaultTheme = createTheme()

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <style>
                    {`
    body {
      background-color: black;
    }
    .form-elements > * {
      margin-bottom: 8px;
    }
  `}
                </style>

                <Box
                    sx={{
                        my: 'auto',
                        mx: 'auto',
                        padding: 12,
                        mt: 7,
                        mb: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: '#9A1665',
                        borderRadius: '12px',
                        width: '150%',
                        height: '100%',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3, mb: 3 }}
                    >
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            sx={{ mb: 2 }}
                        />

                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                bgcolor: 'black',
                                color: 'white',
                                width: '50%',
                                '&:hover': {
                                    bgcolor: '#FC7CC9',
                                },
                            }}
                        >
                            Sign Up
                        </Button>

                        <Link
                            href="#"
                            variant="body2"
                            sx={{ display: 'block', paddingY: 2 }}
                        >
                            Already have an account? Sign in
                        </Link>
                    </Box>
                    <Copyright />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

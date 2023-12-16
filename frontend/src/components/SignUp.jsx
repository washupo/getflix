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
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import { Copyright } from './CopyRight'

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

    const isDesktop = useMediaQuery('(min-width:600px)')

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth={isDesktop ? 'md' : 'xs'}>
                <CssBaseline />
                <style>
                    {`
            body {
              background-color: black;
            }
            .form-elements > * {
              margin-bottom: 8px;
            }
            .MuiInputBase-input,
            .MuiFormLabel-root,
            .MuiTypography-root {
              color: #FFB6C1;
            }
            .MuiOutlinedInput-notchedOutline {
              border-color: #FFB6C1 !important; 
            }
            .MuiInputBase-input:focus,
            .MuiCheckbox-root.Mui-checked {
              color: #FFB6C1 !important; 
            }
            .MuiFormControlLabel-label {
              color: #FFB6C1;
            }
            .yourwebside-text {
              color: #FFB6C1;
                         }
          `}
                </style>

                <Box
                    sx={{
                        my: 'auto',
                        mx: 'auto',
                        padding: 8,
                        mt: 5,
                        mb: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        bgcolor: '#9A1665',
                        borderRadius: '8px',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
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
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox value="allowExtraEmails" />
                                    }
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                    sx={{ color: '#FFB6C1' }} // Rose clair
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,

                                bgcolor: 'black',
                                color: '#FFB6C1', // Rose clair
                                width: '50%',
                                '&:hover': {
                                    bgcolor: '#FC7CC9',
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </form>

                    <Link
                        href="#"
                        variant="body2"
                        sx={{
                            display: 'block',
                            paddingY: 2,
                            color: '#FFB6C1', // Rose clair
                        }}
                    >
                        Already have an account? Sign in
                    </Link>
                    <Copyright sx={{}} />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

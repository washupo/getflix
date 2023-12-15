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
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme()

export default function SignUp() {
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Extract form data from the event
        const data = new FormData(event.currentTarget);

        try {
            const response = await fetch('https://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: data.get('firstName'),
                    email: data.get('email'),
                    password: data.get('password'),
                    phoneNumber: data.get('lastName'),
                }),
                credentials: 'include', // include credentials in the request
            });

            if (response.status === 201) {
                // Registration successful
                console.log(response.body);
          
                const result = await response.json();
                const { token, userId } = result;

            // Save token and userId to local storage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
          
                // Redirect to homepage
                navigate('/home');
                } else if (response.status === 403) {
                    // Email already used
                    console.log("Email already used");
                    setError('Email already used');
                } else {
                    // Handle other status codes if needed
                    setError('Error during registration');
                }     

            

        } catch (error) {
            console.error('Error during authentication:', error.message);
        }
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
                            label="Phone Number"
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
                            sx={{
                                display: 'block',
                                paddingY: 2,
                            }}
                        >
                            Already have an account? Sign in
                        </Link>
                    </Box>

                    <Copyright sx={{}} />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

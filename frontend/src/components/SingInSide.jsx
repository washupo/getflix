import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const defaultTheme = createTheme({
    typography: {
        fontFamily: ['Arial', 'sans-serif'].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
          color: #FFB6C1; 
          background-color: #000000;
        }
      `,
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: '#FFB6C1',
                    },
                    '& fieldset': {
                        borderColor: '#FFB6C1 !important',
                    },
                    '&:hover fieldset': {
                        borderColor: '#FFB6C1 !important',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#FFB6C1 !important',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#FFB6C1 !important',
                },
                focused: {
                    color: '#FFB6C1 !important',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#FFB6C1 !important',
                    '&$checked': {
                        color: '#FFB6C1 !important',
                    },
                },
            },
        },
    },
})

export default function SignInSide() {
    // const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Extract form data from the event
        const data = new FormData(event.currentTarget);


        // try {
        //     const response = await fetch('https://localhost:8000/api/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             email: data.get('email'),
        //             password: data.get('password'),
        //         }),
        //         credentials: 'include', // include credentials in the request
        //     });

        //     if (!response.ok) {
        //         throw new Error('Login failed');
        //     }

        //     const result = await response.json();
        //     const { token, userId } = result;

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container component="main" item xs={0} sm={0} md={12} sx={{
                justifyContent: 'center', mt: 12, mb: 5, mr: 0, ml: 0,  '@media (min-width:600px)': {
                    mt: 15,
                    mb: 5,
                    mx: 20,
                    height: '0vh',
                    width: '60%',
                },
            }}>
                <CssBaseline />

                <Grid
                    item
                    xs={0}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://pics.craiyon.com/2023-09-14/6bb75488481c43bfb4590dfbcf35c96d.webp)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
        {/* Vous pouvez ajouter du contenu ici si nécessaire */}

                </Grid>


                <Grid
                    item
                    xs={0}
                    sm={0}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            bgcolor: '#9A1665',
                            color: '#FFB6C1',
                            padding: '30',
                            boxShadow: '2px 4px 10px rgba(2, 4, 6, 0.1)',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1, margin: 4 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            < Link to="/home" >
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
                                    marginLeft: '25%',
                                    '&:hover': {
                                        bgcolor: 'pink',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            </Link>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Grid>
           
        </ThemeProvider>
    )
}

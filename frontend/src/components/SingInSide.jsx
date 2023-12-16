import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Copyright } from './CopyRight'

const defaultTheme = createTheme({
    typography: {
        fontFamily: ['Arial', 'sans-serif'].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        body {
          color: #FFB6C1; 
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
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid
                container
                component="main"
                item
                xs={0}
                sm={0}
                md={12}
                sx={{
                    height: '0vh',
                    width: '60%',
                    justifyContent: 'center',
                    mt: 15,
                    mb: 5,
                    mr: 15,
                    ml: 40,
                    bgcolor: 'black',
                }}
            >
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
                ></Grid>
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
        </ThemeProvider>
    )
}

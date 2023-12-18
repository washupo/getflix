import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { autocompleteClasses } from '@mui/material'
import { useTheme } from '@mui/system';

export default function Parametres() {
    const avatars = [
        'https://ai-previews.123rf.com/ai-variation/preview/wm/movingmoment/movingmoment1907/movingmoment190700073_3.jpg',
        'https://media.istockphoto.com/id/472091255/fr/photo/chocolat-chaud.jpg?s=612x612&w=0&k=20&c=nhtT7aLHfE-15bMONvlkSDJWY7kn-ITtls3Mj60KZ2Q=',
        'https://www.gourmandiseries.fr/wp-content/uploads/2018/12/chocolat-chaud-epice-chai.jpg',
    ]

    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0)

    const handleAvatarChange = () => {
        const newIndex = (selectedAvatarIndex + 1) % avatars.length
        setSelectedAvatarIndex(newIndex)
    }

    const handleSwitchAccount = () => {
        console.log('Switching account...')
    }

    const handleDeleteAccount = () => {
        console.log('Account deleted!')
    }

    const handleAddAccount = () => {
        console.log('Adding another account...')
    }

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#bc458c',
            }}
        >
            <CssBaseline />
            <Grid sx={{ display: 'flex', width: '100vw', mt: 2, mb: 0, ml: 2 }}>
                <Button>
                    <ArrowBackIosIcon sx={{ color: '#ffe8f6' }} />
                    <Typography sx={{ color: '#ffe8f6' }}>Retour</Typography>
                </Button>
            </Grid>

            <Typography
                variant="h1"
                sx={{
                    textShadow: '0px 0px 15px rgba(255,167,221,2)',
                    color: '#ffe8f6',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    mt: -3,
                }}
            >
                Profil
            </Typography>
            <Typography color={'#ffe8f6'}>Bienvenu(e), { } </Typography>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>

                <Grid item xs={12} md={6} py={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                    <Stack sx={{ py: 3 }}>
                        {selectedAvatarIndex !== null && (
                            <Avatar
                                alt="User Avatar"
                                src={avatars[selectedAvatarIndex]}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: '4px solid #fff',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                                }}
                            />
                        )}
                    </Stack>

                    <Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            {avatars.map((avatar, index) => (
                                <Avatar
                                    key={index}
                                    alt={`Avatar ${index + 1}`}
                                    src={avatar}
                                    sx={{
                                        width: { xs: 80, md: 120 },
                                        height: { xs: 80, md: 120 },
                                        cursor: 'pointer',
                                        opacity:
                                            index === selectedAvatarIndex ? 1 : 0.5,
                                        border: '4px solid #fff',
                                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                                    }}
                                    onClick={() => setSelectedAvatarIndex(index)}
                                />
                            ))}
                        </Stack>
                        <Button
                            variant="outlined"
                            sx={{ mt: 2, bgcolor: '#710446', color: 'white' }}
                            onClick={handleAvatarChange}
                        >
                            Changer l'avatar
                        </Button>
                    </Stack>

                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 1,
                                // Changer la couleur du texte
                                '& input': {
                                    color: '#ffe8f6', // Couleur du texte
                                },
                                // Changer la couleur du label
                                '& label': {
                                    color: '#ffe8f6', // Couleur du label
                                },
                                // Changer la couleur de la bordure
                                '& fieldset': {
                                    borderColor: '#ffe8f6', // Couleur de la bordure
                                },
                            },
                            display: 'flex', flexDirection: 'column',
                            width: '75%',
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="name" label="Name" variant="outlined" />
                        <TextField id="email" label="Email" variant="outlined" />
                        <TextField id="password" label="Password" variant="outlined" />
                        <TextField id="phoneNumber" label="Phone Number" variant="outlined" />
                    </Box>
                    <Button
                        variant="outlined"
                        sx={{ bgcolor: '#710446', color: 'white', fontWeight: 'bold', mt: 2 }}
                        onClick={handleSwitchAccount}
                    >
                        Modifier mes données
                    </Button>
                </Grid>

                {/* <Button
                    variant="outlined"
                    sx={{ bgcolor: '#FFC0CB', p:1.5 }}
                    onClick={handleAddAccount}
                >
                    Ajouter un autre compte
                </Button> */}

            </Grid>

            {/* <Stack
                direction="column"
                alignItems="flex-end"
                spacing={2}
                sx={{ width: '100%' }}   
            >
                 </Stack>

                <IconButton onClick={handleSwitchAccount}>
                    <Avatar
                        alt="Switch Account"
                        src="switch_account_icon.png"
                    />
                </IconButton> */}

            <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                sx={{ bgcolor: 'black', color: 'white', width: '100vw', p: 3, borderRadius: 0, mt: 2 }}
                onClick={handleDeleteAccount}
            >
                Supprimer le compte
            </Button>

        </Box>
    )
}

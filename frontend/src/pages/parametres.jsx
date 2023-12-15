
 
  import React, { useState } from 'react';
  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  import CssBaseline from '@mui/material/CssBaseline';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import IconButton from '@mui/material/IconButton';
  import DeleteIcon from '@mui/icons-material/Delete';
  import Stack from '@mui/material/Stack';
  import Box from '@mui/material/Box';
  
  export default function Parametres() {
    const avatars = [
      'https://ai-previews.123rf.com/ai-variation/preview/wm/movingmoment/movingmoment1907/movingmoment190700073_3.jpg',
      'https://media.istockphoto.com/id/472091255/fr/photo/chocolat-chaud.jpg?s=612x612&w=0&k=20&c=nhtT7aLHfE-15bMONvlkSDJWY7kn-ITtls3Mj60KZ2Q=',
      'https://www.gourmandiseries.fr/wp-content/uploads/2018/12/chocolat-chaud-epice-chai.jpg',
    ];
  
    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(0);
  
    const handleAvatarChange = () => {
      const newIndex = (selectedAvatarIndex + 1) % avatars.length;
      setSelectedAvatarIndex(newIndex);
    };
  
    const handleSwitchAccount = () => {
      console.log('Switching account...');
    };
  
    const handleDeleteAccount = () => {
      console.log('Account deleted!');
    };
  
    const handleAddAccount = () => {
      console.log('Adding another account...');
    };
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100vh',
          backgroundColor: '#FFC0CB',
          backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(180deg, #000 1px, transparent 1px)`,
          border: '2px solid #fff',
          boxShadow: '5 6 20px rgba(255, 0, 255, 0.7)',
        }}
      >
        <CssBaseline />
        <Container component="main" maxWidth="lg">
          <Typography variant="h1" sx={{ textShadow: '2px 2px 4px rgba(5, 5, 3, 1)', color: 'white' }}>
            Bienvenue
          </Typography>
          {selectedAvatarIndex !== null && (
            <Avatar
              alt="User Avatar"
              src={avatars[selectedAvatarIndex]}
              sx={{ width: 200, height: 200, mt: 2, border: '4px solid #fff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
            />
          )}
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} sx={{ mt: 2 }}>
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                alt={`Avatar ${index + 1}`}
                src={avatar}
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 80, md: 120 },
                  cursor: 'pointer',
                  opacity: index === selectedAvatarIndex ? 1 : 0.5,
                  border: '4px solid #fff',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => setSelectedAvatarIndex(index)}
              />
            ))}
          </Stack>
          <Button variant="outlined" sx={{ mt: 2, bgcolor: '#710446', color: 'white' }} onClick={handleAvatarChange}>
            Changer l'avatar
          </Button>
          <Stack direction="column" alignItems="flex-end" spacing={2} sx={{ width: '100%' }}>
            <IconButton onClick={handleSwitchAccount}>
              <Avatar alt="Switch Account" src="switch_account_icon.png" />
            </IconButton>
            <Button variant="outlined" sx={{ mt: 2, bgcolor: '#710446', color: 'white' }} onClick={handleSwitchAccount}>
              Changer de compte
            </Button>
          </Stack>
          <Stack direction="column" alignItems="center" spacing={2} sx={{ mt: 'auto', mb: 2, width: '100%' }}>
            
  
            <Button variant="outlined" sx={{ mt: 2, bgcolor: '#FFC0CB', width: '50%' }} onClick={handleAddAccount}>
              Ajouter un autre compte
            </Button>
          </Stack>

          <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ bgcolor: 'black', color: 'white', width: '50%' }}
              onClick={handleDeleteAccount}
            >
              Supprimer le compte
            </Button>
        </Container>
      </Box>
    );
  }
  
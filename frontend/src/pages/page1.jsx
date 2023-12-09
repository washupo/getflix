import React from 'react'
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/appbar';
import { Grid, Paper, Box, Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import { AddBox } from '@mui/icons-material';

//// theme provider pour le theme couleur //////////
const Mynav = () => {
  return (
    <div>
      {/* <Button color="primary">Bouton principal</Button>
      <Button color="secondary">Bouton secondaire</Button> */}
      {/* <ColorTabs /> Intégration du composant ColorTabs */}
    </div>
  );
};

const affiches = [
  {
    titre: 'Film 1',
    image: 'https://placekitten.com/345/194'
  },
  {
    titre: 'Film 2',
    image: 'https://placekitten.com/345/194'
  },
  {
    titre: 'Film 3',
    image: 'https://placekitten.com/345/194'
  }
]

// const theme = createTheme({
//   spacing: 8,
// })
// theme.spacing(4)


const Page1 = () => (
  <div> 
    <div style={{ backgroundColor: '#F6CDEA', minHeight: '100vh' }}>
    <ResponsiveAppBar />
    <Mynav />
    <AddBox>
      {/* mesure d'espacement temporaire */}
    </AddBox>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {affiches.map((film) => (
            <Grid key={film} item>
           
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // mettre un onclick avatar avec le lien vers le form de connection
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={film.titre}
        subheader="2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={film.image}
        alt="chatton"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
     
      
    </Card>
            </Grid>
          ))}
        </Grid>
        <AddBox>
      {/* mesure d'espacement temporaire */}
    </AddBox>
    <h3>Genre 1</h3>
        <Box sx={{ m: 0.5 }} />
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
              />
             
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      <div>
        <Button color="primary">More movies</Button>
      </div>
        <h3>Genre 2</h3>
        <Box sx={{ m: 0.5 }} />
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
              />
             
            </Grid>
          ))}
        </Grid>
        
        <div>
        <Button color="primary">More movies</Button>
      </div>

      <h3>Genre 3</h3>
        <Box sx={{ m: 0.5 }} />
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2, 4, 5].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
              />
             
            </Grid>
          ))}
        </Grid>
        
        <div>
        <Button color="primary">More movies</Button>
      </div>
    </div>
  </div>
          );

export default Page1


import React from 'react'
import Button from '@mui/material/Button';
import { Grid, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

import classes from './genre.module.css';

const Film = (props) => {
    const { image, titre } = props

    return (
        <div>
         <div className={classes.titre}>{titre}</div>
        <Grid container justifyContent="center" spacing={2}>
            <Grid key={titre} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  title={titre}
                  subheader="2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={image}
                  alt={titre}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  
                  </Typography>
                </CardContent>
              
                
              </Card>
            </Grid>
        </Grid>
          <div className={classes.readMore}>
            <Button color="primary">More movies</Button>
          </div>
        </div>
    );
      
}

export default Film
  
  


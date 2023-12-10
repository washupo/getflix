import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Repeat } from '@mui/icons-material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ backgroundImage: 'url(C:\Users\jduss\code\getflix\frontend\assets\mur rose.png)', backgroundRepeat: 'repeat' ,  height: '100vh' }} />
     <div src="frontend\assets\Chill Home logo blanc 500px.png">

     </div>
      </Container>
    </React.Fragment>
  );
}
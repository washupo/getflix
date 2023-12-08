import React from 'react';
import ResponsiveAppBar from '../components/appbar';
import { Grid } from '@mui/material';
import Movie from '../components/movie';

const Mynav = () => {
    return (
        <div>
            {/* ... */}
        </div>
    );
};

const Page1 = () => (
    <div>
        <ResponsiveAppBar />
        <Mynav />
        <Grid container justifyContent="center">
            <Movie /> {/* Utilisation du composant Movie ici */}
        </Grid>
    </div>
);

export default Page1;

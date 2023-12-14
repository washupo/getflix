import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'

import classes from './genre.module.css'

const Film = (props) => {
    const { image, titre } = props

    return (
        <div
            style={{
                width: '300px',
                height: '250px',
                marginLeft: '10px',
                marginTop: '30px',
            }}
        >
            <Grid container justifyContent="center" spacing={2}>
                <Grid key={titre} item>
                    <Card sx={{ width: '100%' }}>
                        <div className={classes.titre}>{titre}</div>
                        {/* <CardHeader
                  title={titre}
                  subheader="2016"
                /> */}
                        <CardMedia
                            component="img"
                            height="194"
                            image={image}
                            alt={titre}
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            ></Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Film

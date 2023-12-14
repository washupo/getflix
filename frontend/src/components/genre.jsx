import React from 'react'
import Button from '@mui/material/Button'
import {
    Grid,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'

import classes from './genre.module.css'

const Genre = (props) => {
    const { affiches, titre } = props

    return (
        <div>
            <div className={classes.titre}>{titre}</div>
            <Grid container justifyContent="center" spacing={2}>
                {affiches.map((film) => (
                    <Grid key={film} item>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader title={film.titre} subheader="2016" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={film.image}
                                alt="chatton"
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                ></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.readMore}>
                <Button color="primary">More movies</Button>
            </div>
        </div>
    )
}

export default Genre

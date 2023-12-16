import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import BasicCard from '../components/cards'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import styles from './fiche.module.css'
import { useParams } from 'react-router-dom'
import { fetchMovie, fetchTrailers } from '../api'

export default function Fiche() {
    const [movie, setMovie] = useState()
    const [trailer, setTrailer] = useState(null)

    const { id } = useParams()
    const image = `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`

    useEffect(() => {
        fetchMovie(id, setMovie)
    }, [])

    const playTrailer = () => {
        fetchTrailers(id, setTrailer)
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <div
                className={styles.container}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className={styles.overlay}>
                    <BasicCard>
                        <h3>{movie?.title}</h3>
                        <p>Nombre de like - âge - Durée - Genre</p>
                        <p>Date de sortie</p>
                        <p>Distribution</p>
                        <h4>Synopsis</h4>
                        <p>{movie?.overview}</p>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Add to my list</Button>
                            <Button variant="contained" onClick={playTrailer}>
                                Watch the tailer
                            </Button>
                        </Stack>
                    </BasicCard>

                    <BasicCard>
                        <div className={styles.playArea}>
                            {trailer ? (
                                <iframe
                                    allowfullscreen="true"
                                    width="600"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                                ></iframe>
                            ) : (
                                <Button
                                    onClick={playTrailer}
                                    style={{ color: 'lightgray' }}
                                >
                                    <PlayCircleIcon
                                        style={{ fontSize: '10rem' }}
                                    />
                                </Button>
                            )}
                        </div>
                    </BasicCard>
                </div>
            </div>
        </React.Fragment>
    )
}

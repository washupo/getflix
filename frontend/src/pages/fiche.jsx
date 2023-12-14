import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import BasicCard from '../components/cards'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import styles from './fiche.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const MOVIE_DB_API_KEY = '189f34649f00e131c0dc01a9028db68d' // Remplacez par votre clé d'API TMDb

export default function Fiche() {
    const [movie, setMovie] = useState()
    // const { id } = useParams()
    const id = 466420

    axios
        .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_DB_API_KEY}`
        )
        .then((response) => {
            if (response.data && response.data) {
                const movie = response.data
                setMovie(movie)
                // setSuggestions(movie);
            } else {
                console.error('Aucune suggestion trouvée.')
                setMovie(movie)
            }
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
            setMovie(movie)
        })

    console.log(id)

    return (
        <React.Fragment>
            <CssBaseline />

            <div className={styles.container}>
                <div className={styles.overlay}>
                    <BasicCard>
                        <h3>{movie?.title}</h3>
                        <p>Nombre de like - âge - Durée - Genre</p>
                        <p>Date de sortie</p>
                        <p>Distribution</p>
                        <h4>Synopsis</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Iste veritatis aliquid ab reprehenderit
                            molestiae placeat ex animi provident sapiente
                            deserunt. Quia temporibus consequatur nemo earum
                            impedit quidem, laborum amet ut maiores quis dolore
                            asperiores! Ex vel ducimus facere aliquam pariatur
                            minus deserunt. Cum tempora vero, minima tenetur hic
                            sint labore similique dolorem, quis nemo animi
                            fugiat ipsa voluptas repudiandae at officia
                            cupiditate eum culpa suscipit dolorum voluptate
                            voluptates? Suscipit illum corporis pariatur qui?
                            Porro illo corrupti blanditiis doloremque quos,
                            temporibus officia labore dolor dicta dignissimos!
                            Modi officiis quibusdam laborum nisi, quas totam
                            eligendi fuga ipsa nulla quidem ut natus. Sed?
                        </p>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Add to my list</Button>
                            <Button variant="contained">
                                Watch the tailer
                            </Button>
                        </Stack>
                    </BasicCard>

                    <BasicCard />
                </div>
            </div>
        </React.Fragment>
    )
}

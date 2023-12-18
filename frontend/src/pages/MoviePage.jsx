import { Container, ImageList, ImageListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Searchbar from '../components/search'
import { Link } from 'react-router-dom'

import styles from './home.module.css'

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    const getMovie = () => {
        fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=189f34649f00e131c0dc01a9028db68d'
        )
            .then((res) => res.json())
            .then((json) => setMovieList(json.results))
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className={styles.container}>
            <Searchbar updateMovies={setMovieList} />

            <Container
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <ImageList variant="masonry" cols={4} gap={8}>
                    {movieList.map((item) => (
                        <ImageListItem key={item.id}>
                            <Link to={`/fiche/${item.id}`}>
                                <img
                                    height="300px"
                                    key={item.id}
                                    srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </Link>
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* {movieList.map((movie, index) => (
        <Film key={movie.id} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} titre={movie.original_title} />

      ))} */}
            </Container>
        </div>
    )
}

export default MoviePage

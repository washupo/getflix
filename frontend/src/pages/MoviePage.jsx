import { Container, ImageList, ImageListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Searchbar from '../components/search'
import { Link } from 'react-router-dom'

import styles from './home.module.css'
import { fetchMovies } from '../api'

function MoviePage() {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetchMovies(setMovieList)
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

import React, { useEffect, useState } from 'react'
import { Container, ImageList, ImageListItem } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { fetchMoviesByGenre } from '../api'

const CategoryPage = () => {
    const [genres, setGenres] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        fetchMoviesByGenre(search, setGenres)
    }, [search])

    return (
        <div>
            <Container
                sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <ImageList variant="masonry" cols={4} gap={8}>
                    {genres?.length
                        ? genres.map((item) => (
                              <ImageListItem key={item.id}>
                                  <Link to={`/fiche/${item.id}`}>
                                      {item.poster_path ? (
                                          <img
                                              height="300px"
                                              key={item.id}
                                              srcSet={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                              alt={item.title}
                                              loading="lazy"
                                          />
                                      ) : (
                                          <img
                                              height="300px"
                                              key={item.id}
                                              srcSet={`https://placekitten.com/200/300`}
                                              src={`https://placekitten.com/200/300`}
                                              alt={item.title}
                                              loading="lazy"
                                          />
                                      )}
                                  </Link>
                              </ImageListItem>
                          ))
                        : '0 movie found'}
                </ImageList>
            </Container>
        </div>
    )
}

export default CategoryPage

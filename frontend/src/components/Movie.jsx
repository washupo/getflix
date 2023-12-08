import React, { useState, useEffect } from 'react';

function Movie() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=189f34649f00e131c0dc01a9028db68d")
        .then(res => res.json())
        .then(json => setMovieList(json.results));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {movieList.map((movie, index) => (
                <img
                    key={index}
                    style={{ width: "300px", height: "250px", marginLeft: "10px", marginTop: "30px" }}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            ))}
        </div>
    );
}

export default Movie;

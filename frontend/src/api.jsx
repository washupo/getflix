import axios from 'axios'

const { VITE_API_URL } = import.meta.env

export const fetchGenres = (setGenres) => {
    return axios
        .get(`${VITE_API_URL}/genres`)
        .then(function (response) {
            setGenres(response.data.data)
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
        })
}
export const fetchMoviesByGenre = (categoryQuery, setGenre) => {
    const categoryId = categoryQuery.split('=')[1]
    return axios
        .get(`${VITE_API_URL}/genre?categoryId=${categoryId}`)
        .then(function (response) {
            setGenre(response.data.data)
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
        })
}

export const searchMovies = (searchWord, setMovie) => {
    return axios
        .get(`${VITE_API_URL}/search?title=${searchWord}`)
        .then(function (response) {
            setMovie(response.data.data)
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
        })
}

export const fetchMovies = (setMovie) => {
    return axios
        .get(`${VITE_API_URL}/movies`)
        .then(function (response) {
            setMovie(response.data.data)
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
        })
}

export const fetchMovie = (id, setMovie) => {
    return axios
        .get(`${VITE_API_URL}/movie?id=${id}`)
        .then(function (response) {
            setMovie(response.data.data)
        })
        .catch((error) => {
            console.error('Erreur de recherche:', error)
        })
}

export const fetchTrailers = (id, setTrailer) => {
    return axios.get(`${VITE_API_URL}/movie/${id}/videos`).then((response) => {
        if (response.data) {
            const videos = response.data.data.results
            const video = videos.find(
                (v) => v.site === 'YouTube' && v.type === 'Trailer'
            )

            if (video) {
                setTrailer(video)
            }
        }
    })
}

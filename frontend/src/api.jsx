import axios from 'axios'

const { VITE_API_URL } = import.meta.env

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

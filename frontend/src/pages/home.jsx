import React, { useEffect, useState } from 'react'
import style from './home.module.css';
import axios from 'axios';
import Film from '../components/film';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/movies?page=2')
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data.data);
      })
  }, []);


  return (
      <div className={style.container}>
        {data?.map(film => <Film key={film.title} image={`https://image.tmdb.org/t/p/w500${film.poster_path}`} titre={film.title} />)}
      </div>
  );
}

export default Home


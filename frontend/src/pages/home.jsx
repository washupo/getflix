import React from 'react'
import Genre from '../components/genre';
import style from './home.module.css';

const response = [
  {
    genre: 'comedie',
    films: [{
      titre: 'Film 1',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 2',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 3',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 2',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 3',
      image: 'https://placekitten.com/345/194'
    }
  ]
  },
  {
    genre: 'horreur',
    films: [{
      titre: 'Film 4',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 5',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 6',
      image: 'https://placekitten.com/345/194'
    }]
  },
  {
    genre: 'drame',
    films: [{
      titre: 'Film 7',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 8',
      image: 'https://placekitten.com/345/194'
    },
    {
      titre: 'Film 9',
      image: 'https://placekitten.com/345/194'
    }]
  }
]


const Home = () => (
    <div className={style.container}>
      {response.map(filmpargenre => <Genre key={filmpargenre.genre} affiches={filmpargenre.films} titre={filmpargenre.genre} />)}
    </div>
);

export default Home


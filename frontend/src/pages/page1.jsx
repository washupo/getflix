import React from 'react'
import ResponsiveAppBar from '../components/appbar';
import Genre from '../components/genre';

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


const Page1 = () => (
  <div> 
    <div style={{ backgroundColor: '#F6CDEA', minHeight: '100vh' }}>
    <ResponsiveAppBar />

      {response.map(filmpargenre => <Genre affiches={filmpargenre.films} titre={filmpargenre.genre} />)}
      
    </div>
  </div>
);

export default Page1


import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/movies?page=2')
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response);
      })
  }, []);

  return (
    <div>
      {data ? <div style={{ color: 'white' }}>{JSON.stringify(data, null, 2)}</div> : 'Loading...'}
    </div>
  );
}

export default Api;

    // fetch('https://api.themoviedb.org/3/configuration')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    //   .catch(error => console.error(error));
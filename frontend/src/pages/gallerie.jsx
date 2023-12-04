import React from 'react'
import { Link } from "react-router-dom";

export const Gallerie = () => {
  return (
    <div>
      
      gallerie

<p>

          <Link to={`/`}>Home</Link>
</p>
      <p>
          <Link to={`/page1`}>Page 1</Link>
      </p>

    </div>
  )
}

export default Gallerie
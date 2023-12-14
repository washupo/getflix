import React from 'react'
import logo from "../../assets/chill.png";
import style from "./landing.module.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import imageL1 from "../../assets/famille.jpg";

const Landing = () => {
  return (
    <div>
      <div className={style.section0}>
        <img src={logo} />
      </div>
      <div className={style.layout}>
      <div className={style.actions}>
        <Link className={style.actionButton} to="/login">
          <Button style={{ width: "100%" }} variant="contained">Login</Button>
        </Link>
        <Link className={style.actionButton} to="/account">
          <Button style={{ width: "100%" }} variant="contained">Sign up</Button>
        </Link>
      </div>
      </div>
     
      <div className={style.section1}>
      <h2>Revoir ...
  </h2>
      </div>
      <div className={style.section2}>
      <img src={imageL1} />
<h2>Le cinema depuis votre canapé, pour toute la famille
  </h2>
      </div>
      <div className={style.section3}>
      <h2>Revoir ...
  </h2>
  
      </div>

      </div>
  )
}

export default Landing;


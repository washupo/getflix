import React from 'react'
import logo from "../../assets/chill.png";
import style from "./landing.module.css";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Landing = () => {
  return (
    <div>
      <div className={style.layout}>
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
    </div>
  )
}

export default Landing


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import style from './cards.module.css'

export default function BasicCard(props) {
  return (
    <Card style={{ background: 'none', color: 'white' }} className={style.movieCard}>
      <CardContent>
        {props.children}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


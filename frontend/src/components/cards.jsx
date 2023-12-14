import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import style from './cards.module.css'

export default function BasicCard(props) {
    return (
        <Card
            style={{
                background: 'none',
                color: 'white',
                padding: '2rem',
                boxShadow: 'none',
            }}
            className={style.movieCard}
        >
            <CardContent>{props.children}</CardContent>
        </Card>
    )
}

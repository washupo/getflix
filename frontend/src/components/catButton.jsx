import React, { useEffect, useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { fetchGenres } from '../api'

const CategoryButton = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const [genres, setGenres] = useState(null)

    useEffect(() => {
        fetchGenres(setGenres)
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleCategorySelect = (categoryId) => {
        handleClose()
        // Naviguer vers la page des films avec le genre sélectionné
        navigate(`/categorypage?category=${categoryId}`)
    }

    return (
        <div>
            <Button
                id="category-button"
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="text"
                size="large"
                color="secondary"
            >
                Categories
            </Button>
            <Menu
                id="category-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {genres?.map((genre) => (
                    <MenuItem
                        key={genre.id}
                        onClick={() => handleCategorySelect(genre.id)}
                    >
                        {genre.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default CategoryButton

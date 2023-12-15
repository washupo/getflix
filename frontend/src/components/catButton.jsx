import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
// import Box from '@mui/material/Box'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MyComponent = () => {
    const MenuProps = {
        margin: 'auto',
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    }

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
                <Button
                    displayFlex="center"
                    color="secondary"
                    onClick={handleClick}
                >
                    Films par Catégorie
                </Button>

                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuProps={MenuProps}
                >
                    <MenuItem onClick={handleClose}>Romance</MenuItem>
                    <MenuItem onClick={handleClose}>Action </MenuItem>
                    <MenuItem onClick={handleClose}>Comédie</MenuItem>
                </Menu>
        </div>
    )
}

export default MyComponent


// commment centrer le bouton catégories??? :
//  <Box
//                 sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
//             >
//                  </Box>
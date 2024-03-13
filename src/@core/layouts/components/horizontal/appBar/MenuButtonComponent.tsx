// MenuButtonComponent.tsx
import React from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

interface MenuButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const MenuButtonComponent: React.FC<MenuButtonProps> = ({ onClick }) => (
  <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={onClick}
    color="inherit"
  >
    <MenuIcon />
  </IconButton>
)

export default MenuButtonComponent

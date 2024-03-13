import React from 'react'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import MenuButtonComponent from './MenuButtonComponent'
import NavItemComponent from './NavItemComponent'
import { Navigation } from '../navigation/GeneralNavigation'

export default function ResponsiveNavigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <MenuButtonComponent onClick={handleOpenMenu} />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          sx={{
            display: { xs: 'block', md: 'none' }
          }}
        >
          {Navigation.map((navigation) => (
            <NavItemComponent
              path={navigation.path}
              key={navigation.page}
              page={navigation.page}
              onClick={handleCloseMenu}
            />
          ))}
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {Navigation.map((navigation) => (
          <Button
            href={navigation.path}
            key={navigation.page}
            onClick={handleCloseMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {navigation.page}
          </Button>
        ))}
      </Box>
    </>
  )
}

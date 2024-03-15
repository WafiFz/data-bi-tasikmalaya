import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import Logo from 'src/@core/components/bi-tasik/logo'
import ResponsiveNavigationComponent from './ResponsiveNavigationComponent'
import UserMenuComponent from './UserMenuComponent'

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo
            path="/images/logos/bank-indonesia.svg"
            width={'170px'}
            addClass={'hidden md:flex mr-2'}
          />

          <ResponsiveNavigationComponent />

          <div className="flex items-center">
            {/* <img src="/images/logos/bank-indonesia.svg" alt="logo" class="hidden md:flex mr-2" style="height: auto; width: 170px; margin: auto;"> */}
            <Logo
              path="/images/logos/bank-indonesia.svg"
              width={'170px'}
              addClass={'flex md:hidden mr-2'}
            />
          </div>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography> */}

          <UserMenuComponent />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar

import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import Logo from 'src/@core/components/bi-tasik/logo'
import ResponsiveNavigationComponent from './ResponsiveNavigationComponent'
import UserMenuComponent from './UserMenuComponent'

function ResponsiveAppBar() {
  return (
    <AppBar position="static" color={'transparent'} sx={{ boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo
            path="/images/logos/bank-indonesia.svg"
            width={'170px'}
            addClass={'hidden md:flex mr-2'}
          />

          <ResponsiveNavigationComponent />

          <div className="flex-grow">
            <Logo
              path="/images/logos/bank-indonesia.svg"
              width={'170px'}
              addClass={'flex md:hidden mr-2'}
            />
          </div>

          <UserMenuComponent />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar

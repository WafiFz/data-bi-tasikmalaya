import { Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FormattedMessage } from 'react-intl'

import Logo from '@core/components/bi-tasik/logo'
import ResponsiveNavigationComponent from './ResponsiveNavigationComponent'
import UserMenuComponent from './UserMenuComponent'
import { isLoggedInState } from '@core/states/auth/isLoggedIn.state';

function ResponsiveAppBar() {

  const isLoggedIn = useRecoilValue(isLoggedInState)

  const setIsLoggedIn = useSetRecoilState(isLoggedInState)

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

          {isLoggedIn ? (
            <UserMenuComponent />
          ) : (
            <Button
              href={'lo'}
              key={'lo'}
              sx={{ my: 2, color: 'primary', display: 'block' }}
              variant="contained"
            >
              <FormattedMessage id="login" defaultMessage="Login" />
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar

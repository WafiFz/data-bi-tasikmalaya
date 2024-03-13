// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
// import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import HorizontalLayout from 'src/@core/layouts/HorizontalLayout' // Updated import

// ** Navigation Imports
// import HorizontalNavItems from 'src/navigation/horizontal'; // Updated import

// ** Component Import
// import UpgradeToProButton from './components/UpgradeToProButton'
// import HorizontalAppBarContent from './components/horizontal/AppBarContent'; // Updated import

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayoutVertical = ({ children }: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // const UpgradeToProImg = () => {
  //   return (
  //     <Box sx={{ mx: 'auto' }}>
  //       <a
  //         target='_blank'
  //         rel='noreferrer'
  //         href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'
  //       >
  //         <img width={230} alt='upgrade to premium' src={`/images/misc/upgrade-banner-${settings.mode}.png`} />
  //       </a>
  //     </Box>
  //   )
  // }

  return (
    <HorizontalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      //   horizontalNavItems={HorizontalNavItems()} // Updated prop name
      // afterHorizontalNavMenuContent={UpgradeToProImg}
      //   horizontalAppBarContent={(props) => ( // Updated prop name
      //     <HorizontalAppBarContent
      //       hidden={hidden}
      //       settings={settings}
      //       saveSettings={saveSettings}
      //       toggleNavVisibility={props.toggleNavVisibility}
      //     />
      //   )}
    >
      {children}

      {/* <UpgradeToProButton /> */}
    </HorizontalLayout>
  )
}

export default UserLayoutVertical

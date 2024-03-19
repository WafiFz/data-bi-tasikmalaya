// ** React Imports
// import { useState } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
// import themeConfig from 'src/configs/themeConfig'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Components
import ResponsiveAppBar from './components/horizontal/appBar'
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const HorizontalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',

  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',

  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const HorizontalLayout = (props: LayoutProps) => {
  // ** Props
  const { children, scrollToTop } = props

  return (
    <>
      <HorizontalLayoutWrapper className="layout-wrapper">
        {/* AppBar Component */}
        <ResponsiveAppBar />

        <MainContentWrapper className="layout-content-wrapper">
          {/* Content */}
          <ContentWrapper
            className="layout-page-content"
            sx={{
              mx: 'auto',
              '@media (min-width:1440px)': { maxWidth: 1440 },
              '@media (min-width:1200px)': { maxWidth: '100%' }
            }}
          >
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          <Footer {...props} />

          {/* Portal for React Datepicker */}
          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id="react-datepicker-portal"></Box>
          </DatePickerWrapper>
        </MainContentWrapper>
      </HorizontalLayoutWrapper>

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default HorizontalLayout

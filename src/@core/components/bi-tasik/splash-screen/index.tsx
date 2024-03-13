import React from 'react'
import Logo from '../logo'
import { SplashOverlay } from './styled/splash-overlay.styled'
import styled from '@emotion/styled'
import { SplashSpinner } from './styled/splash-spinner.styled'

interface SplashOverlayProps {
  logoPath: string
}

const Container = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SplashScreen: React.FC<SplashOverlayProps> = ({ logoPath }) => (
  <SplashOverlay>
    <Container>
      <Logo path={logoPath} />
      <SplashSpinner />
    </Container>
  </SplashOverlay>
)

export default SplashScreen

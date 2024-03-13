import {
  LogoContainer,
  LogoContainerProps
} from './styled/logo-container.styled'
import { LogoText } from './styled/logo-text.styled'

interface LogoProps extends LogoContainerProps {
  text?: string
  path: string
}

const Logo: React.FC<LogoProps> = ({ text, height, width, path }) => {
  return (
    <>
      <img src={path} alt="logo" />
      {text && <LogoText>{text}</LogoText>}
    </>
  )
}

export default Logo

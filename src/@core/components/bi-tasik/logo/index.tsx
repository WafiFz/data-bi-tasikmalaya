import { LogoContainerProps } from './styled/logo-container.styled'
import { LogoText } from './styled/logo-text.styled'

interface LogoProps extends LogoContainerProps {
  text?: string
  path: string
  height?: string
  width?: string
  addClass?: string
}

const Logo: React.FC<LogoProps> = ({
  text,
  height = 'auto',
  width = 'auto',
  path,
  addClass
}) => {
  return (
    <>
      <img
        src={path}
        alt="logo"
        style={{ height, width }}
        className={addClass}
      />

      {text && <LogoText>{text}</LogoText>}
    </>
  )
}

export default Logo

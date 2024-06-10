import Cookies from 'universal-cookie'
import { loginApi } from './auth.api'
import { useUser } from './auth.state'
import { useAuthContext } from '@core/context/authContext'

export const useAuth = () => {
  const { setUserState } = useUser()
  const cookies = new Cookies()
  const { login } = useAuthContext()

  const loginUser = async (email: string, password: string) => {
    const userData = await loginApi(email, password)

    setUserState(userData)

    cookies.set('access_token', userData.token.access.token, {
      expires: new Date(userData.token.access.expires),
      path: '/'
    })

    cookies.set('userData', userData, {
      path: '/'
    })

    login()
  }

  return { loginUser }
}

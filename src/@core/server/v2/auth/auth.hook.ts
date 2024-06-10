import Cookies from 'universal-cookie'
import { loginApi } from './auth.api'
import { useUser } from './auth.state'
import { useAuthContext } from '@core/context/authContext'

export const useAuth = () => {
  const { setUserState } = useUser()
  const cookies = new Cookies()
  const { login } = useAuthContext()

  const loginUser = async (email: string, password: string) => {
    const responseData = await loginApi(email, password)

    setUserState(responseData)

    cookies.set('access_token', responseData.token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Set expiry to 1 week from now
      path: '/'
    });

    cookies.set('userData', responseData.user, {
      path: '/'
    })

    login()
  }

  return { loginUser }
}

import Cookies from 'universal-cookie'
import { loginApi } from './auth.api'
import { useUser } from './auth.state'

export const useAuth = () => {
  const { setUserState } = useUser()
  const cookies = new Cookies()

  const loginUser = async (email: string, password: string) => {
    const userData = await loginApi(email, password)
    setUserState(userData)
    cookies.set('access_token', userData.token.access.token, {
      expires: new Date(userData.token.access.expires),
      path: '/'
    })
  }

  return { loginUser }
}

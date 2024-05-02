import { loginApi } from './auth.api'
import { useUser } from './auth.state'

export const useAuth = () => {
  const { setUserState } = useUser()

  const loginUser = async (email: string, password: string) => {
    const userData = await loginApi(email, password)
    setUserState(userData)
  }

  return { loginUser }
}

import { atom, useRecoilState } from 'recoil'

export interface User {
  name: string
  email: string
  lastName?: string
  // Add other user data as needed
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null
})

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState)

  const setUserState = (userData: User | null) => {
    setUser(userData)
  }

  return { user, setUserState }
}

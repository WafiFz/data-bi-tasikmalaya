import { atom, useSetRecoilState } from 'recoil'
import { loginApi } from './auth.api'

export interface AuthData {
  isAuthenticated: boolean
  accessToken: string | null
  refreshToken: string | null
  user: any | null // Tipe data pengguna, sesuaikan dengan respons dari server
}

export const authState = atom<AuthData>({
  key: 'authState',
  default: {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    user: null
  }
})

export const useAuthStateSetter = () => {
  return useSetRecoilState(authState)
}

export const login = async (
  email: string,
  password: string,
  setAuthState: (
    newValue: AuthData | ((oldValue: AuthData) => AuthData)
  ) => void
) => {
  try {
    const { user, token } = await loginApi(email, password)

    // Simpan token dan user ke dalam state autentikasi
    setAuthState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      accessToken: token.access,
      refreshToken: token.refresh,
      user
    }))

    // Redirect ke halaman lain setelah login berhasil
  } catch (error) {
    // Handle error
  }
}

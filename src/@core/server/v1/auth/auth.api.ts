import axiosInstance from '@core/constants/axios'
import { handleErrorApi } from '@core/utils/handleErrorApi'

// Fungsi untuk login
export const loginApi = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(
      '/v1/auth/login',
      { email, password },
    )
    return response.data.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

// Fungsi untuk logout
export const logoutApi = async () => {
  try {
    await axiosInstance.post('/v1/auth/logout')
  } catch (error) {
    console.error('Logout failed:', error)
    throw new Error('Logout failed')
  }
}

// Fungsi untuk memperbarui token
export const refreshAccessTokenApi = async (refreshToken: string) => {
  try {
    const response = await axiosInstance.post('/v1/auth/refresh', {
      token: refreshToken
    })
    return response.data.data
  } catch (error) {
    console.error('Token refresh failed:', error)
    throw new Error('Token refresh failed')
  }
}

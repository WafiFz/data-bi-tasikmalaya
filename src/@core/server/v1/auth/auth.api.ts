import axios from 'axios'

// Fungsi untuk login
export const loginApi = async (email: string, password: string) => {
  try {
    const response = await axios.post('/v1/auth/login', { email, password })
    return response.data.data
  } catch (error) {
    console.error('Login failed:', error)
    throw new Error('Login failed')
  }
}

// Fungsi untuk logout
export const logoutApi = async () => {
  try {
    await axios.post('/v1/auth/logout')
  } catch (error) {
    console.error('Logout failed:', error)
    throw new Error('Logout failed')
  }
}

// Fungsi untuk memperbarui token
export const refreshAccessTokenApi = async (refreshToken: string) => {
  try {
    const response = await axios.post('/v1/auth/refresh', {
      token: refreshToken
    })
    return response.data.data
  } catch (error) {
    console.error('Token refresh failed:', error)
    throw new Error('Token refresh failed')
  }
}

import axiosInstance from '@core/constants/axios'

export const getPing = async () => {
  try {
    const response = await axiosInstance.get('/v1/ping')
    const responseData = response.data

    
return responseData
  } catch (error) {
    console.error('Ping error:', error)
    throw error
  }
}

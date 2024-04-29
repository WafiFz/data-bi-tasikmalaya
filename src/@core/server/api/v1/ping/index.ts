import axiosInstance from '@core/constants/axios'
import { pingState } from '@server/states/v1/ping/ping.state'
import { useSetRecoilState } from 'recoil'

export const ping = async () => {
  try {
    const response = await axiosInstance.get('/v1/ping')
    const responseData = response.data
    return responseData
  } catch (error) {
    console.error('Ping error:', error)
    throw error
  }
}

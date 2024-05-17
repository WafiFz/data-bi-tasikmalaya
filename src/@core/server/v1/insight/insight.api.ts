import axiosInsight from '@core/constants/axios/axiosInsight'
import { InsightApiInterface } from '@core/interfaces/insight/insight.api.interface'

export const getInsightData = async (): Promise<InsightApiInterface> => {
  try {
    const response = await axiosInsight.get('/search/google?q=inflasi%20tasikmalaya')
    return response.data
  } catch (error) {
    console.error('Error fetching insight data:', error)
    throw error
  }
}

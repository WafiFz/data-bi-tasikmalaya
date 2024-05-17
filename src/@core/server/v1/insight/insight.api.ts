import axiosInsight from '@core/constants/axios/axiosInsight'
import { InsightApiInterface } from '@core/interfaces/insight/insight.api.interface'

export const getInsightData = async (keyword: string): Promise<InsightApiInterface> => {
  try {
    const response = await axiosInsight.get(`/search/google?q=${encodeURIComponent(keyword)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching insight data:', error);
    throw error;
  }
}
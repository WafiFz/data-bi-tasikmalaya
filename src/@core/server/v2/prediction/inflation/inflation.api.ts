import axiosInstance from '@core/constants/axios'

export const fetchInflationData = async (predictionType = 'mtm') => {
  try {
    const response = await axiosInstance.get(
      `/prediction/inflation/tasikmalaya/${predictionType}`
    )

    return response.data
  } catch (error) {
    console.error('Error fetching inflation data:', error)
    throw error
  }
}

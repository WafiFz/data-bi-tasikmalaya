import axiosInstance from '@core/constants/axios'

export const fetchInflationData = async () => {
  try {
    const response = await axiosInstance.get(
      '/prediction/inflation/tasikmalaya/mtm'
    )

    return response.data
  } catch (error) {
    console.error('Error fetching inflation data:', error)
    throw error
  }
}

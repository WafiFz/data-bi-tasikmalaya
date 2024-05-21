import axiosPrediction from '@core/constants/axios/axiosPrediction'

export const fetchInflationData = async () => {
  try {
    const response = await axiosPrediction.get('/api/actual/predict/inflation')
    return response.data.data
  } catch (error) {
    console.error('Error fetching inflation data:', error)
    throw error
  }
}

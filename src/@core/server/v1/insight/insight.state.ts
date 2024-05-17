import { atom, selector } from 'recoil'
import { getInsightData } from './insight.api'

export const insightState = atom({
  key: 'insightState',
  default: selector({
    key: 'insightState/default',
    get: async () => {
      try {
        const data = await getInsightData()
        return data
      } catch (error) {
        throw error
      }
    }
  })
})

import { useRecoilState } from 'recoil'
import { insightState } from './insight.state'

export const useInsight = () => {
  const [insightData, setInsightData] = useRecoilState(insightState)

  return { insightData, setInsightData }
}

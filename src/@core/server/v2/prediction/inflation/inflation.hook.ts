import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { fetchInflationData } from './inflation.api'
import { inflationDataState, mtmInflationDataState, yoyInflationDataState } from './inflation.state'

export const useInflationData = (predictionType: string = 'mtm') => {
  let inflationDataState;

  switch (predictionType) {
    case 'mtm':
      inflationDataState = mtmInflationDataState;
      break;
    case 'yoy':
      inflationDataState = yoyInflationDataState;
      break;
    default:
      throw new Error(`Unsupported prediction type: ${predictionType}`);
  }

  const [inflationData, setInflationData] = useRecoilState(inflationDataState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInflationData(predictionType);

        setInflationData(data);
      } catch (error) {
        console.error('Error fetching inflation data:', error);
      }
    };

    fetchData();
  }, [setInflationData, predictionType]);

  return inflationData;
};

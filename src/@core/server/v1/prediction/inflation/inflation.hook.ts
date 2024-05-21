import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchInflationData } from './inflation.api';
import { inflationDataState } from './inflation.state';

export const useInflationData = () => {
  const [inflationData, setInflationData] = useRecoilState(inflationDataState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInflationData();
        setInflationData(data);
      } catch (error) {
        console.error('Error fetching inflation data:', error);
      }
    };

    fetchData();
  }, []);

  return inflationData;
};

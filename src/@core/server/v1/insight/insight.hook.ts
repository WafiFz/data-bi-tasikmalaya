import { useRecoilState } from 'recoil';
import { insightState } from './insight.state';
import { getInsightData } from './insight.api';

export const useInsight = () => {
  const [insightData, setInsightData] = useRecoilState(insightState);

  const handleSearch = async (keyword: string) => {
    try {
      // Mengambil data baru dari API berdasarkan keyword
      const newData = await getInsightData(keyword);
      console.log(keyword)
      // Memperbarui state Recoil dengan data baru
      await setInsightData(newData);
    } catch (error) {
      console.error('Error fetching insight data:', error);
    }
  };

  return { insightData, handleSearch };
};

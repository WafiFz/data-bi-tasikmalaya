// insight.hook.ts
import { useRecoilState } from 'recoil';
import { insightState } from './insight.state';
import { getInsightData } from './insight.api';
import { useState } from 'react';

export const useInsight = () => {
  const [insightData, setInsightData] = useRecoilState(insightState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (keyword: string) => {
    try {
      setIsLoading(true); // Set isLoading menjadi true saat memulai pencarian
      // Mengambil data baru dari API berdasarkan keyword
      const newData = await getInsightData(keyword);
      // Memperbarui state Recoil dengan data baru
      setInsightData(newData);
    } catch (error) {
      console.error('Error fetching insight data:', error);
    } finally {
      setIsLoading(false); // Set isLoading menjadi false setelah mendapatkan respons dari API
    }
  };

  return { insightData, handleSearch, isLoading };
};

import { atom, selector } from 'recoil'
import { getInsightData } from './insight.api'

// Create a function to fetch data with a keyword
const fetchInsightData = async (keyword: string) => {
  try {
    const data = await getInsightData(keyword);
    return data;
  } catch (error) {
    throw error;
  }
};

export const insightState = atom({
  key: 'insightState',
  default: selector({
    key: 'insightState/default',
    get: async () => {
      const urlParams = new URLSearchParams(window.location.search);
        const searchKeyword = urlParams.get('q')
        if (searchKeyword) {
            
            return fetchInsightData(searchKeyword); // Call the fetch function with the keyword
        }
        else {
            return null
        }
    }
  })
});

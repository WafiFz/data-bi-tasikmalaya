import { ping } from '@core/server/api/v1/ping';
import { atom, useSetRecoilState } from 'recoil';

export const pingState = atom({
  key: 'pingState',
  default: '',
});


const usePing = () => {
  const setPingData = useSetRecoilState(pingState);

  const fetchData = async () => {
    try {
      const responseData = await ping();
      setPingData(responseData.data.ping);
    } catch (error) {
      console.error('Error fetching ping data:', error);
    }
  };

  return { fetchData };
};

export { usePing };
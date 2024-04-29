import { getPing } from '@core/server/v1/ping/ping.api';
import { atom, useSetRecoilState } from 'recoil';

export const pingState = atom({
  key: 'pingState',
  default: '',
});


const usePing = () => {
  const setPingData = useSetRecoilState(pingState);

  const fetchData = async () => {
    try {
      const responseData = await getPing();
      setPingData(responseData.data.ping);
    } catch (error) {
      console.error('Error fetching ping data:', error);
    }
  };

  return { fetchData };
};

export { usePing };
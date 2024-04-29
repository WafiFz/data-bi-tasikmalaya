import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { pingState, usePing } from '@core/server/states/v1/ping/ping.state';

const PingPage = () => {
  const pingData = useRecoilValue(pingState);
  const { fetchData } = usePing();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Ping Result:</h1>
      <p>{pingData}</p>
    </div>
  );
};

export default PingPage;

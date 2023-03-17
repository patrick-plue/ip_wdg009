import { useState, useEffect } from 'react';

function IP({ ipData, setIpData }) {
  const fetchData = async () => {
    try {
      const apiRes = await fetch(`${process.env.REACT_APP_IPIFY_URL}`);
      if (!apiRes.ok) throw Error('Request failed');
      const data = await apiRes.json();
      setIpData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Your IP {ipData?.ip}</h2>
    </div>
  );
}

export default IP;

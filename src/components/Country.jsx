import { useState, useEffect } from 'react';

function Country({ code }) {
  const [countryData, setCountryData] = useState();
  const fetchData = async () => {
    try {
      const apiRes = await fetch(
        `http://api.countrylayer.com/v2/alpha/${code}?access_key=${process.env.REACT_APP_COUNTRY_KEY}`
      );
      if (!apiRes.ok) throw Error('Request failed');
      const data = await apiRes.json();
      setCountryData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>{countryData?.capital}</div>;
}

export default Country;

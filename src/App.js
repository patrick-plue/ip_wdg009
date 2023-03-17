import IP from './components/IP';
import MapLeaflet from './components/MapLeaflet';
import Country from './components/Country';
import Time from './components/Time';
import { useState } from 'react';
function App() {
  const [ipData, setIpData] = useState();

  return (
    <div>
      <h1>IP PROJECT</h1>
      <IP ipData={ipData} setIpData={setIpData} />
      <MapLeaflet />
      <Time />
      {ipData && <Country code={ipData.location.country} />}
    </div>
  );
}

export default App;

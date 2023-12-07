import { useEffect, useState } from 'react';
import './App.css';
import GeoLocationTable from './GeoLocationTable'

function App() {
  const [data, setData] = useState()

  const fetchGeoLocation = async () => {
    const response = await fetch('https://pradeep-geo-location.onrender.com/');
    return response;
  }

  useEffect(() => {
    fetchGeoLocation()
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="App">
        <GeoLocationTable data={data} />
      </div>

    </>
  );
}

export default App;

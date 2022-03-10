import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { BASE_URL } from '../../components/utils/Api';

function AllHotels() {
  const [hotels, setHotels] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(BASE_URL);
      setHotels(data.data);
    };
    fetchData();
  }, []);
  console.log(hotels)

  return (
  <>
  {hotels.length > 0 ? hotels.map(( hotel, idx ) => {
    return <div key={idx}>
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
    </div>
  })
:null}
  </> 
  
  )
}

export default AllHotels;
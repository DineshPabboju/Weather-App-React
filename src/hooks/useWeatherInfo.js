import axios from "axios";
import React, { useEffect } from 'react'
const apiKey = 'd2f9a5d03a0bfcc067ea2ad09dc94afa';
const useWeatherInfo = (endpoint, city) => {
  const [data, setData] = useState({});
   const apiUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apiKey}&units=metric`;
   useEffect(()=>{
      const fetchData = async () => {
         try {
            const response = await axios.get(apiUrl);
            setData(response.data);
            console.log(response.data);

         } catch (error) {
           console.log(error);
         }
    }
    fetchData();
    
   },[city,endpoint]);
   return data;
}

export default useWeatherInfo
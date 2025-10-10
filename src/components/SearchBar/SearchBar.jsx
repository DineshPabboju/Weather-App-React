import React, { useState } from 'react'
import { useWeather } from '../../context/WeatherContext'
const SearchBar = () => {

  const {city, setCity} = useWeather();
  const [cityName, setCityName] = useState();
  return (

    <div>
        <div className='w-full h-[150px] flex justify-center items-center gap-x-1'>
            <input type="text"  
                   placeholder='Enter City Name...'
                   onChange={(e) => setCityName(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && setCity(cityName)}
                   
            className='w-3/4 p-3 rounded-md bg-white/10 outline-none text-white font-poppins'/>
            <button className='p-2 bg-white/90 rounded-md font-poppins' onClick={() => setCity(cityName)}>Search</button>
        </div>
    </div>
  )
}

export default SearchBar
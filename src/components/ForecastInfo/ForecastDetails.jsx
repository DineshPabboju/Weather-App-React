import React from 'react'
import { useWeather } from '../../context/WeatherContext'
import { useForecast } from '../../context/ForecastContext'
import ForecastCard from './ForecastCard'


const ForecastDetails = () => {
  const {forecastlist} = useForecast();
  const seenDates = new Set();

  const uniqueForecasts = forecastlist?.filter(forecast => {
    const datePart = forecast.dt_txt.split(" ")[0]; // e.g. "2025-10-11"
    if (seenDates.has(datePart)) return false; // already added → skip
    seenDates.add(datePart); // not added yet → keep it
    return true;
  });
  return (
    <div className='px-3 rounded-lg overflow-x-auto overflow-y-hidden
                    scrollbar 
                    scrollbar-track-gray-800/20
                    scrollbar-thumb-white/20 
                    hover:scrollbar-thumb-white/40'>

    <div className="flex gap-4 items-center">
      { 

        uniqueForecasts?.map((forecast, index)=> (
          <ForecastCard
          key={index}
          value={{
            date:forecast.dt_txt,
            icon: forecast.weather[0].id,
            temp: Math.round(forecast.main.temp)

          }}
          />
        ))
        
      }
    </div>
    </div>
  )
}

export default ForecastDetails
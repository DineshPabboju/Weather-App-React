import React from 'react'
import { useWeather } from '../../context/WeatherContext'





const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};


const getWeatherIcon = (id) => {
     if (!id) return 'clear.svg';
    if (id >= 200 && id <= 232) return 'thunderstorm.svg';
    if (id >= 300 && id <= 321) return 'drizzle.svg';
    if (id >= 500 && id <= 531) return 'rain.svg';
    if (id >= 600 && id <= 622) return 'snow.svg';
    if (id >= 701 && id <= 781) return 'atmosphere.svg';
    if (id === 800) return 'clear.svg';
    if (id >= 801 && id <= 804) return 'clouds.svg';
    return 'clear.svg';
    
}
const CurrentWeather = () => {

  const { city, temperature, iconid } = useWeather();
  return (
    <div>
      <div className='px-2 flex justify-between items-center'>
        <div className='text-white font-poppins font-semibold text-2xl capitalize'>{city}</div>
        <div className='text-white font-poppins text-xl'>
          {
            getCurrentDate()
          }
        </div>
      </div>
      <div>
        <div className='w-full flex justify-between px-4 py-3'>
          <div className='w-[120px] h-[120px]'>
            <img 
              src={`/assets/weather/${getWeatherIcon(iconid)}`} 
              alt="Weather Icon"
              className='w-full h-full object-contain'
            />
              
          </div>
          <div className='flex flex-col justify-center items-center p-3'>
            <div className='text-white font-poppins font-semibold text-3xl'>
              {Math.round(temperature)} °C
            </div>
            <div className='text-white font-poppins p-3 text-xl'>Haze</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurrentWeather
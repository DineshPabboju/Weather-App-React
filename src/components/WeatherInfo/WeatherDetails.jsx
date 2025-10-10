import React, { use } from 'react'
import { useWeather } from '../../context/WeatherContext';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';


const WeatherDetails = () => {
  const { humidity, wind } = useWeather();
  return (
    <div>
      <div className='flex justify-between p-2'>
        <div className='flex items-center justify-center gap-2'>
          <div className='text-white'>
            <WaterDropIcon sx={{ fontSize: 32 }} />          
          </div>
          <div>
            <div className='text-white text-xl font-semibold'>Humidity</div>
            <div className='text-white'>{humidity} %</div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <div className='text-white'>
            <AirIcon fontSize="large" />
          </div>
          <div >
            <div className='text-white text-xl font-semibold'>Wind</div>
            <div className='text-white'>{wind} km/h</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WeatherDetails
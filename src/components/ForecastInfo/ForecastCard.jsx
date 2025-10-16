import React from 'react'

const ForecastCard = ({ value }) => {
  const { date, icon, temp } = value;

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
  };

  return (
    <div className="min-w-[100px] flex-shrink-0 bg-white/10 p-2 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-200">
      <div className="flex flex-col items-center gap-2">
        {/* Date */}
        <div className="text-white font-semibold">
          {
          new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit'
          })
          }
        </div>
        
        {/* Weather Icon */}
        <div className="w-14 h-14">
          <img 
            src={`/public/assets/weather/${getWeatherIcon(icon)}`}
            alt="Weather Icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Temperature */}
        <div className="text-white text-l font-bold">
          {temp}°C
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
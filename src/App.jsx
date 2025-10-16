import bgImage from '/public/assets/bg.jpg'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import CurrentWeather from './components/WeatherInfo/CurrentWeather'
import { useWeather } from './context/WeatherContext'
import WeatherDetails from './components/WeatherInfo/WeatherDetails'
import ForecastDetails from './components/ForecastInfo/ForecastDetails'

function App() {
  const {city} = useWeather();

  return (
    <div className='w-full h-screen flex justify-center items-center' 
         style={{
          backgroundColor:'black'
      
      }}>
        <div className='min-w-[320px] max-w-[400px] min-h-[580px] max-h-[600px] backdrop-blur-3xl bg-white/20 rounded-md p-4 flex flex-col'>
          <SearchBar/>
          <CurrentWeather/>
          <WeatherDetails/>
          <ForecastDetails/>
        </div>

    </div>
  )
}

export default App

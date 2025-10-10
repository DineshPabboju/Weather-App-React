import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx'
import { ForecastProvider } from './context/ForecastContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <ForecastProvider>
        <App />
      </ForecastProvider>
    </WeatherProvider>
  </StrictMode>,
)

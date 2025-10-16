import { createContext, useState, useContext, useEffect } from "react";
import { useWeather } from "./WeatherContext";

const apiKey = 'd2f9a5d03a0bfcc067ea2ad09dc94afa';

// Step-1 : Create a Context
export const ForecastContext = createContext();


export const ForecastProvider = ({ children }) => {
    const {city} = useWeather();
    const [endpoint, setEndpoint] = useState('forecast');
    const [data, setData] = useState();
    const [forecastlist, setForecastList] = useState();
   



    const apiUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apiKey}&units=metric`;
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {

                const res = await fetch(apiUrl);
                const data = await res.json();
                console.log(data);
                setData(data);
                setForecastList(data.list);

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchWeatherData();

    }, [endpoint, city]);

    return (
        <ForecastContext.Provider value={{forecastlist}}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useForecast = () => useContext(ForecastContext);
import { createContext, useState, useContext, useEffect } from "react";


const apiKey = import.meta.env.VITE_API_KEY;
// Step-1 : Create a Context
export const WeatherContext = createContext();


// Step-2 : Create a Provider
export const WeatherProvider = ({children}) => {
    
    const [endpoint, setEndpoint] = useState('weather');
    const [city, setCity] = useState('Hyderabad');
    const [data, setData] = useState();
    const [humidity, setHumidity] = useState("0");
    const [temperature, setTemperature] = useState("0")
    const [wind, setWind] = useState("")
    const [iconid, setWeatherIconId] = useState("");


    const apiUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apiKey}&units=metric`;
    useEffect(() => {
        const fetchWeatherData = async() => {
            try{

             const res = await fetch(apiUrl);
             const data = await res.json();
             console.log(data);
             setData(data);
             setTemperature(data.main.temp);
             setWind(data.wind.speed);
             setHumidity(data.main.humidity);
             setWeatherIconId(data.weather[0].id);

        }
        catch(err){
            console.log(err);
        }
    }
       fetchWeatherData();

    },[endpoint, city]);

    return (
        <WeatherContext.Provider value={{city, setCity, temperature, wind, humidity, iconid, setEndpoint}}>
            {children}
        </WeatherContext.Provider>
    )

}

export const useWeather = () => useContext(WeatherContext);
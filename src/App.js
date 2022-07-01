import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemperatureNDetails from './components/TemperatureNDetails';
import TimeandLocation from './components/TimeandLocation';
import TopButtoms from './components/TopButtoms';
import getFormattedWeatherData from './services/WeatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query,setQuery]=useState({ q: "berlin"})
  const [units,setUnits]=useState('metric')
  const [weather,setWeather]=useState(null)


useEffect(()=>{

  const mssage = query.q ? query.q :'Current Location'

  toast.info('Fetching data from ' + mssage)

  const fetchWeather = async ()=>{
    await getFormattedWeatherData({...query,units}).then(
      (data)=>{
        toast.success(`Successfully fetched data for ${data.name},${data.country}`)
        setWeather(data)
      });

  };
  fetchWeather();
}, [query,units]);

const formatBackground = ()=>{
  if(!weather) return 'from-cyan-700 to-blue-700'
  const threshold = units ==='metric' ? 20 : 60
  if (weather.temp <= threshold) return'frio'

  return 'calor'
}

const formatBackground2 = ()=>{
  if(!weather) return 'bg-blue-300 -z-10'
  const threshold = units ==='metric' ? 20 : 60
  if (weather.temp <= threshold) return'bg-blue-300 -z-10'

  return 'bg-orange-300 -z-10'
}

  return (
    <section className={`${formatBackground2()}` }>
      <div className={`mx-auto min-h-screen w-full sm:max-w-screen-lg py-5 px-10 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 items-center
        ${formatBackground()}`}>
        <TopButtoms setQuery ={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather&&(
          <div>
            <TimeandLocation weather={weather}/>
            <TemperatureNDetails weather={weather}/>
    
            <Forecast key={weather.hourly.title} title='Cada Hora'items={weather.hourly}/>
            <Forecast key={weather.daily.title} title='Diario'items={weather.daily}/>
          </div>
        )}

        <ToastContainer autoClose={2000} theme='dark' newestOnTop={true}  />

      </div>
    </section>
  );
}

export default App;

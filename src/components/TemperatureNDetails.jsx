import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTear,
    UilTemperature,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconURLfromCoda, } from '../services/WeatherService'

const TemperatureNDetails = ({weather:{feels_like,humidity,speed,temp_max,temp_min,sunrise,sunset,details,icon,temp,timezone}}) => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{`${details}`} </p>
        </div>

        <div className='grid grid-cols-1  text-white py-3'>
                <img src={iconURLfromCoda(icon)} alt="sun" className='w-20 mx-auto'/>
                <p className='w-full text-5xl text-center'>{`${temp.toFixed()}`} °</p>
            
            <div className='my-5'>
                <div className=' my-2 flex font-light text-sm items-center justify-center text-white'>
                    <UilTemperature size={18} className='mr-1'/>
                    Sensacion Termica:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}`}°</span>
                </div>
                <div className='my-2 flex font-light text-sm items-center justify-center text-white'>
                    <UilTear size={18} className='mr-1'/>
                    Humedad: {`${humidity}`}
                    <span className='font-medium ml-1'>%</span>
                </div>
                <div className='my-2 flex font-light text-sm items-center justify-center text-white'>
                    <UilWind size={18} className='mr-1'/>
                    Viento:
                    <span className='font-medium ml-1'>{`${speed}`} Km/h</span>
                </div>
            </div>
        </div>

    <div className='flex flex-col lg:flex-row items-center justify-center space-x-2 text-white text-sm py-3' >
        <UilSun/>
        <       p className='my-4 font-light'>
                    Rise:{" "}
                    <span className='font-medium ml-1'>
                    {formatToLocalTime(sunrise,timezone,"hh:mm a")}
                    </span>
                </p>
        <   p className=' my-4 hidden lg:font-light'>
            |
        </p>
        <UilSunset/>
        <p className=' my-4 font-light'>Sunset:<span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span></p>
        <p className='hidden lg:font-light'>
            |
        </p>
        <UilArrowUp/>
        <p className='my-4 font-light'>High:<span className='font-medium ml-1'>{`${temp_max.toFixed()}`}C°</span></p>
        <p className='hidden  lg:font-light '>
            |
        </p>
        <UilArrowDown/>
        <p className='my-4 font-light'>Low:<span className='font-medium ml-1'>  {`${temp_min.toFixed()}`}C°</span></p>

    </div>



    </div>
  )
}

export default TemperatureNDetails
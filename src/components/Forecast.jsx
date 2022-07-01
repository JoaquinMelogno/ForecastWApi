import React from 'react'
import { iconURLfromCoda } from '../services/WeatherService'

const Forecast = ({title,items}) => {
  return (
    <div>

        <div className='flex items-center justify-start mt-6 '>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className=' my-2' />
        <div className='text-white flex flex-row justify-between items-center'>
            {items.map((item)=>(
            <div  className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>
                    {item.title}
                </p>
                <img src={iconURLfromCoda(item.icon)} alt='sun' className='w-20  my-1'/>
                
                <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
            </div>

            ))}
        </div>
    </div>
  )
}

export default Forecast
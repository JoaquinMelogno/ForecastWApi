import React from 'react'

const TopButtoms = ({setQuery}) => {
    const cities = [
        {
            id:1,
            title:'Buenos Aires'
        },
        {
            id:2,
            title:'Montevideo'
        },
        {
            id:3,
            title:'Sao Paulo'
        },
        {
            id:4,
            title:'New York'
        },
        {
            id:5,
            title:'London'
        },
        {
            id:6,
            title:'Paris'
        },
    ]  
  return (

    <div className='flex sm:justify-around my- lg:col-span-1 items-center justify-center '>
        {cities.map((city)=>(
            <button onClick={() => setQuery({ q:city.title }) } key={city.id} className='border-t justify-around m-1 text-white text-lg font-medium hover:brightness-75 transition duration-300 ease-in-out '>{city.title}</button>
        )
        )}

    </div>
  )
}

export default TopButtoms
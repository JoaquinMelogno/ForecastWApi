import React from 'react'
import { UilSearchAlt,UilMapMarkerAlt } from '@iconscout/react-unicons'
import { useState,useEffect } from 'react'

const Inputs = ({setQuery,units,setUnits}) => {

  useEffect(()=>{
    document.addEventListener('keydown',detectkey,true)
  },[])

  const detectkey = (e)=>{
    if(e.key==='Enter'){
      let actualcity = document.getElementById('Newcity').value
      setQuery({q:actualcity})
    }else{
      return
    }
      
  }

  const [ city,setCity]=useState('')

  const handlesearchclick = ()=>{
    if (city !== '') setQuery({q:city})
  }

  const handlelocationclick =()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery(
          {
            lat,lon
          }
        )
      })
    }
  }

  const handleunitschange = (e)=>{
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit)
  }


  return (
    <div className="grid grid-cols-1 items-center justify-center sm:flex ">
        <div className=' flex flex-col lg:flex-row items-center content-center ' >
            <input id='Newcity' value={city} onChange={(e)=>setCity(e.currentTarget.value)} type="text" className='text-xl font-light p-2 w-3/4 shadow-xl focus:outline-none capitalize' placeholder='Search...'
            />
            
            <UilSearchAlt size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 m-4'
            onClick={handlesearchclick}
            />
            <UilMapMarkerAlt size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'
            onClick={handlelocationclick}
            />
        </div>

        <div className='flex content-center w-8 items-center'>
            <button name='metric' className='text-xl text-white font-light hover:scale-125 transition ease-out'
            onClick={handleunitschange}
            >°C</button>
            <p className='text-xl text-white my-1 mx-2'>|</p>
            <button name='imperial'className='text-xl text-white font-light
            transition ease-out hover:scale-125'
            onClick={handleunitschange}
            >°F</button>
        </div>
    </div>    


  )
}

export default Inputs
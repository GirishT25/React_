import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero1 from './Hero1'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className=' flex flex-col justify-between h-full w-1/3   pl-12   '>
       <Hero1/>
       <Arrow/>  
    </div>
  )
}

export default LeftContent
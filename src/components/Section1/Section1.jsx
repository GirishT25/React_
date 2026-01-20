import React from 'react'
import Navbar from './Navbar'
import Pagee1Content from './Pagee1Content'

const Section1 = (props) => {
    
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Pagee1Content users={props.users}/>    
    </div>
  )
}

export default Section1
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    
    <div className='flex justify-end px-12 py-10 bg-blue-500  '>
        <div className='flex items-center gap-2 mr-20'> 
        <Link to='/'  >Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/about'  >About</Link>
        </div>
    </div>
  )
}

export default Navbar
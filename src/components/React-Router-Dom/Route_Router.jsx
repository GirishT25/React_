import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from '../Home'
const Route_Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Route_Router
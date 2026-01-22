import React from 'react'

const ApiFetch = () => {
        const  getData = async () =>{
        const data  = await fetch("https://api.github.com/users/GirishT25")
        const response  = await data.json()
        console.log(response);
    }
  return (
    <div>
            <button className='bg-blue-500 p-5 m-5 rounded-full' onClick={getData}>Get the Data</button>
    </div>
  )
}

export default ApiFetch
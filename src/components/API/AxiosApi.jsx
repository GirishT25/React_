import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const AxiosApi = () => {
    const [data, setData] = useState([]);
    const getData = async ()=>{
            const response = await axios.get('https://picsum.photos/v2/list')
            console.log(response)
            setData(response.data);
    }
  return (
    <div className='h-screen bg-gray-700'>
      <button className='bg-blue-500 p-5 m-5 rounded-full cursor-pointer ' onClick={getData}>Get Data</button>
      <div>
        {
            data.map((ele ,idx)=>{
                return <h3 key={idx}> {ele.author}  {idx} </h3>
            })
        }
      </div>
    </div>
  )
}

export default AxiosApi
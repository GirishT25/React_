import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const GalleryProject = () => {
    const [userData, setuserData] = useState([])
    const [index , setIndex] = useState(1)
    const getData = async ()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
        setuserData(response.data);
        console.log(response.data)
    }
    let printUserdata = 'No user Available';
    if(userData.length > 0 ){
      printUserdata = userData.map((ele , idx)=>{
          return <div key={idx}>
          <a href={ele.url} target='_blank'>
            <div className='h-40 w-44 overflow-hidden bg-white rounded-2xl'>
            <img className='h-full object-cover' src={ele.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg text-white'>{ele.author}</h2>
          </a>
          </div>
      })
    }

    useEffect(()=>{
      getData()
    },[index])
  return (
    <div className='h-screen  p-4 text-white overflow-auto bg-black'>
      <h1 className='fixed text-white bg-red-400 text-7xl'>{index}</h1>
        <div className='flex flex-wrap gap-2 p-2'>
          {printUserdata}
        </div>

        <div className='flex justify-center gap-6 items-center p-6'>
          <button
          style={{opacity : index == 1 ? 0.5 : 1}}
          onClick={()=>{
            setIndex(index - 1)
          }} className='bg-amber-500 rounded px-4 py-2 text-black text-sm cursor-pointer'>
            Prev
            </button>
            <h2> Page{index}</h2>
          <button 
          onClick={
            ()=>{
              setIndex(index + 1);
            }
          }
          className='bg-amber-500 rounded px-4 py-2 text-black text-sm cursor-pointer'>
          Next
          </button>

        </div>
    </div>
  )
}

export default GalleryProject
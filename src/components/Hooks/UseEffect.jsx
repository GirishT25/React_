import React, { useEffect, useState } from 'react'
// The use effect is use for the change in the state of the one element and the effect occur for that element
// It works in such manner where the one process works and another process also works simulatenousy 
// It push the other works in the microprocess / microtasks 
// It excutes it after the all task render 

const UseEffect = () => {
    const [num , setnum] = useState(0);
    const [num1 , setnum1] = useState(0);


    const changeA = () =>{
            setnum(num+1);
    }
    const changeB = ()=>{
        setnum1(num1 + 10);
    }

    useEffect(()=>{
            console.log("Use effect is running")
    },[num]) // It works as an dependency array where what we pass here the state of that element changes then only it executes
    
  return (
    <div>
        <div className='flex gap-5 m-5 p-10'>

            <h1 className='bg-gray-800 p-6 rounded-full text-white font-bold'>{num}</h1>
            <h1 className='bg-gray-800 p-6 rounded-full text-white font-bold' >{num1}</h1>
        </div>
        <div className=' px-4 py-4  gap-3 rounded-full'>
            <button className='bg-gray-500 p-5 rounded-full m-2' onClick={changeA}>Change A</button>
            <button className='bg-gray-500 p-5 rounded-full m-2' onClick={changeB}>Change B</button>
        </div>
    </div>
  )
}

export default UseEffect
import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
    console.log(props.users)
  return (
    <div id='right' className='h-full overflow-x-auto rounded-4xl  w-3/4 p-5 flex flex-nowrap gap-4'>
        {
            props.users.map((ele ,idx)=>{
                return <RightCard key={idx} color={ele.color} id={idx} img={ele.img} tag={ele.tag}/>
            })
        }
    </div>
  )
}

export default RightContent
import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between' >
           <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
           <div>
                <p className='text-xl text-white mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id veritatis suscipit dolores quod distinctio!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor : props.color}} className='text-white font-medium rounded-full px-8 py-2'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium rounded-full px-3 py-2'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div> 
        </div>

  )
}

export default RightCardContent
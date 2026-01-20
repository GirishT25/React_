import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Pagee1Content = (props) => {
  return (
    <div className='pb-5 pt-15 flex justify-between h-[90vh]'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Pagee1Content
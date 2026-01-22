import React from 'react'

const LocalStorage = () => {
    const newUser = {
        name : 'Girish',
        age : 21
    }
    const user = localStorage.setItem('user' , JSON.stringify(newUser));
    console.log(newUser);

    const getUser = localStorage.getItem('user')
    console.log(getUser);
    
  return (
    <div className=''>
        <h1 className='h-screen bg-gray-700 text-black'>APP</h1>
    </div>
  )
}

export default LocalStorage
import React from 'react'
// import './card.css'
const Card = (props) => {
  return (
    <div className='card'> 
        <img src={props.img} alt="" />
        <h1>{props.user }</h1>
        <p>Hellp I am Software Developer</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
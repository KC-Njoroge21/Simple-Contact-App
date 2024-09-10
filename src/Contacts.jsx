import React from 'react'

const Contacts = (props) => {

  let starIcon = props.isFilled ? "./images/golden-star.png" : "./images/clear-star.png"

  return (
    <div className='flex flex-col content-center items-center space-y-1 border-2  p-6 shadow-lg shadow-slate-300 rounded-lg m-auto'>
    <div>
    <img  className= 'object-cover w-20 rounded-full h-20' src={props.image} alt="" />
    </div>
        <h3 className='text-2xl font-medium'>{props.firstName} {props.lastName}</h3>
        <h5 className='text-sm '>{props.phone}</h5>
        <h5 className='text-sm'>{props.email}</h5>
        <img onClick={props.handleClick} className='h-8 cursor-pointer' src={starIcon} alt="" />
      </div>
  )
}

export default Contacts
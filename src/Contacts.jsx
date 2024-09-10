import React from 'react'

const Contacts = (props) => {

  let starIcon = props.isFilled ? "./images/golden-star.png" : "./images/clear-star.png"
  let label = props.isFilled ? "Remove from favourites" : "Add to favourites"

  return (
    <div className='flex flex-col content-center items-center space-y-1 border-2  p-5 shadow-lg shadow-slate-300 rounded-lg m-auto'>
    <div>
    <img  className= 'object-cover w-20 rounded-full h-20' src={props.image} alt="" />
    </div>
        <h3 className='text-2xl font-medium'>{props.firstName} {props.lastName}</h3>
        <h5 className='text-sm '>{props.phone}</h5>
        <h5 className='text-sm'>{props.email}</h5>
        <div className='flex items-center space-x-2'>
        <img onClick={props.handleClick} className='h-6 cursor-pointer' src={starIcon} alt="" />
        <h5 className='text-sm '>{label}</h5>
        </div>
      </div>
  )
}

export default Contacts
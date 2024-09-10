import React from 'react'

const Contacts = (props) => {
  return (
    <div>
        <img src="" alt="" />
        <h3>{props.firstName} {props.lastName}</h3>
        <h5>{props.phone}</h5>
        <h5>{props.email}</h5>
      </div>
  )
}

export default Contacts
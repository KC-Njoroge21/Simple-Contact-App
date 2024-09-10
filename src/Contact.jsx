import React from 'react'
import { useState } from 'react'
import contactData from './contactData'
import Contacts from './Contacts'

const Contact = () => {

  const [contacts, setContacts] = useState(contactData)

  const toogle = (id) => {
    setContacts((prevState) => {
      return (
        prevState.map((contact) => {
          return (
            contact.id === id ? {...contact, isFavourite: !contact.isFavourite} : contact
          )
        })
      )
    })
  }

  const allContacts = contacts.map((contact) => {
    return (
      <Contacts firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} email={contact.email} image={contact.img} isFilled={contact.isFavourite} handleClick={() => {toogle(contact.id)}} />
    )
  })

  return (
    <div className='flex space-x-8  flex-row'>
      {allContacts}
    </div>
  )
}

export default Contact
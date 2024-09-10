import React from 'react'
import { useState } from 'react'
import contactData from './contactData'
import Contacts from './Contacts'

const Contact = () => {

  const [contacts, setContacts] = useState(contactData)

  const allContacts = contacts.map((contact) => {
    return (
      <Contacts firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} email={contact.email} />
    )
  })

  return (
    <div>
      {allContacts}
    </div>
  )
}

export default Contact
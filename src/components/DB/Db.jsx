import React from 'react'
import './Db.style.css'
import Button from '../Buttons/SubmitButton'
const Db = () => {
    const contactList =[
        {
            id:1,
            firstName:'Hamid',
            lastName:'Asadi',
            phoneNumber:'09123456789',
        },
        {
            id:2,
            firstName:'Ali',
            lastName:'Golestani',
            phoneNumber:'09351234567',
        },
        {
            id:3,
            firstName:'Reza',
            lastName:'Khosravi',
            phoneNumber:'09194567890',
        },
    ]
  return (
    <div>
        {contactList.map((item)=>(
            <div className='db-container'>
                    <h4>First Name : {item.firstName}</h4>
                    <h4>Last Name : {item.lastName}</h4>
                    <p>Phone Number : {item.phoneNumber}</p>
                    <div className='button-container'>
                    <Button title='DELETE' className='delete-button'/>
                    <Button title='UPDATE' className='update-button'/>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Db
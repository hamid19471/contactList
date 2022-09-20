import React from 'react'
import './Db.style.css'
import Button from '../Buttons/SubmitButton'
const Db = ({onDelete, contactList}) => {
  return (
    <div>
        {contactList.map((item)=>(
            <div className='db-container'>
                    <h4>First Name : {item.firstName}</h4>
                    <h4>Last Name : {item.lastName}</h4>
                    <p>Phone Number : {item.phoneNumber}</p>
                    <div className='button-container'>
                    <Button title='DELETE' className='delete-button' onClick={()=>onDelete(item.id)}/>
                    <Button title='UPDATE' className='update-button'/>
                    </div>
            </div>
        ))}
    </div>
  )
}

export default Db
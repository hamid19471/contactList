import React from 'react';
import './Input.style.css';
const Input = ({placeHolder, name, className, onChange}) => {
  return (
    <div>
        <input type="text" placeholder={placeHolder} name={name} className={className} onChange={onChange}/>
    </div>
  )
}

export default Input;
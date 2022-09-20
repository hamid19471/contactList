import React from 'react';
import './Input.style.css';
const Input = ({placeHolder, name, className}) => {
  return (
    <div>
        <input type="text" placeholder={placeHolder} name={name} className={className} />
    </div>
  )
}

export default Input;
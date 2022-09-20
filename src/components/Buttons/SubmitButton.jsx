import React from 'react'
import './Button.style.css';

const Button = ({title, onClick,className}) => {
  return (
    <div>
        <button type='submit' onClick={onClick} className={className}>{title}</button>
    </div>
  )
}

export default Button;
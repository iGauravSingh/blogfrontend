import React from 'react'

const Button = ({children,onClick}) => {
  const buttonStyle = {
    backgroundColor: 'white',
    padding: '5px',
    border: '1px solid royalblue',
    borderRadius: '5px',
    color: 'royalblue'
  }
  return (
    <div>
        <button onClick={onClick} style={buttonStyle}>{children}</button>
    </div>
  )
}

export default Button
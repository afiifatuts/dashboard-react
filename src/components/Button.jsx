import React from 'react'

function Button({icon, bgColor,color,bgHoverColor, size,text, borderRadius}) {
  return (
    <button
    type='button'
    style={{backgroundColor:bgColor, color,borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl 
    hover:bg-${bgHoverColor}`}
    >
      {text}{icon}
    </button>
  )
}

export default Button
import React from 'react'

export default function Checkbox({type,text,className}) {
    return (
    
            <label className={className}>
              <input type={type} />
              <span>{text}</span>
            </label>
      
    )
}

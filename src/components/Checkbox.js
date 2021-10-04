import React from 'react'

export default function Checkbox({type,text}) {
    return (
    
            <label>
              <input type={type} />
              <span>{text}</span>
            </label>
      
    )
}

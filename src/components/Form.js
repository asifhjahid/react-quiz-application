import React from 'react'
import classes from '../styles/Form.module.css'

export default function Form({children,className, ...rest}) {
    return (
        <div>
            <form className={`${className} ${classes.form}`} {...rest} action="#">
                {children}
            </form>
        </div>
    )
}

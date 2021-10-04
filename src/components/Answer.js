import React from 'react'
import Checkbox from './Checkbox'
import classes from '../styles/Answer.module.css'

export default function Answer() {
    return (
        <div className={classes.answers}>
            <Checkbox type='checkbox'  className={classes.answer} text='Test answer'/>
        </div>
    )
}

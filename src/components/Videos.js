import React from 'react'
import Video from './Video'
import classes from '../styles/Videos.module.css'
import { Link } from 'react-router-dom'


export default function Videos() {
    return (
        <div className={classes.videos}>
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
           <Link to='/quiz'><Video /></Link> 
            
        </div>
    )
}

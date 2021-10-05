import React from 'react'
import classes from '../styles/Illustration.module.css'


export default function Illustration({loginImage,signupImage}) {
    return (
           <div className={classes.illustration}>
            {/* <img signupImage={signupImage} alt="Signup" /> */}
            <img loginImage={loginImage} alt="Login" />
          </div>
        
    )
}

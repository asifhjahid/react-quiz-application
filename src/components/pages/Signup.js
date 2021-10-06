import React from 'react'
import Illustration from '../Illustration'

import signupImage from '../../assets/images/signup.svg'
import SignupForm from '../SignupForm'

export default function Signup() {
    return (
        <div>
            <h1>Create an account</h1>

            <div className='column'>
            <Illustration signupImage={signupImage} />
            <SignupForm />
            </div>
        </div>
    )
}

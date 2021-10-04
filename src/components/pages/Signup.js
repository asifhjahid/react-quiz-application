import React from 'react'
import classes from '../../styles/Signup.module.css'
import Illustration from '../Illustration'
import Form from '../Form'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'
import Button from '../Button'

export default function Signup() {
    return (
        <div>
            <h1>Create an account</h1>

            <div className='column'>
            <Illustration />
            <Form className={`${classes.signup}`}>
                <TextInput 
                type='text'
                placeholder='Enter Name'
                icon='person'
                />
                <TextInput 
                type='text'
                placeholder='Enter email'
                icon='alternate_email'
                />
                <TextInput 
                type='password'
                placeholder='Enter Password'
                icon='lock'
                />
                <TextInput 
                type='password'
                placeholder='Confirm password'
                icon='lock_clock'
                />
                <Checkbox 
                type='checkbox'
                text=' I agree to the Terms &amp; Conditions'/>
                <Button>
                    Submit Now
                </Button>
                <div className="info">
                    Already have an account? <a href="login.html">Login</a> instead.
                </div>
            </Form>
            </div>
        </div>
    )
}

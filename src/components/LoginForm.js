import React from 'react'
import Form from '../components/Form'
import TextInput from './TextInput'
import Button from './Button'
import classes from '../styles/Login.module.css'

export default function LoginForm() {
    return (
        <div>
            <Form className={`${classes.login}`}>
                
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
              
                <Button>
                    <span>Submit Now</span>
                </Button>
                <div className="info">
                     Don't have an account? <a href="signup,html">Signup</a> instead.
                </div>
            </Form>
        </div>
    )
}

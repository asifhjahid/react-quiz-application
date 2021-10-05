import React from 'react'
import Form from '../components/Form'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Button from './Button'

export default function LoginForm() {
    return (
        <div>
            <Form >
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
                    <span>Submit Now</span>
                </Button>
                <div className="info">
                     Don't have an account? <a href="signup,html">Signup</a> instead.
                </div>
            </Form>
        </div>
    )
}

import React from 'react'
import Classes from '../styles/Account.module.css'
import { Link } from 'react-router-dom'

export default function Account() {
    return (
        <div>
            <div className={Classes.account}>
                <span class="material-icons-outlined" title="Account">
                account_circle
                </span>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
            </div>
        </div>
    )
}

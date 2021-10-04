import React from 'react'
import Classes from '../styles/Account.module.css'
export default function Account() {
    return (
        <div>
            <div className={Classes.account}>
                <span class="material-icons-outlined" title="Account">
                account_circle
                </span>
                <a href="signup.html">Signup</a>
                {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
            </div>
        </div>
    )
}

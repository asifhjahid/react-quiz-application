import Illustration from '../Illustration'
import loginImage from '../../assets/images/login.svg'
import LoginForm from '../LoginForm'


export default function Login() {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className='column'>
            <Illustration />
            {/* <img src={loginImage} alt=''/> */}
            <LoginForm />
            </div>
        </div>
    )
}

import './login.scss';
import logo from '../../img/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formvalues, setFormvalues] = useState({
        username: '',
        password: ''
    })

    const login = (e) => {
        e.preventDefault();
    }

    return (
        <div className='loginwrapper'>
            <div className='loginwrapper__box'>
                <div>
                    <figure className='loginwrapper__box-logowrapper'>
                        <img src={logo} alt="logo" className='loginwrapper__box-logo' />
                        <figcaption className='loginwrapper__box-logocaption'>Trillo</figcaption>
                    </figure>
                </div>
                <form onSubmit={(e) => login(e)}>
                    <div className='loginwrapper__box-forminput--wrapper'>
                        <div className='loginwrapper__box-forminput--label'>Email</div>
                        <input className='loginwrapper__box-forminput--field' type='text'
                            value={formvalues.username} placeholder='Email' name='username'
                            onChange={(e) => setFormvalues({ [e.target.name]: e.target.value, password: formvalues.password })} />
                    </div>
                    <div className='loginwrapper__box-forminputwrapper'>
                        <div className='loginwrapper__box-forminput--label'>Password</div>
                        <input className='loginwrapper__box-forminput--field' type='password'
                            value={formvalues.password} placeholder='Password' name='password'
                            onChange={(e) => setFormvalues({ username: formvalues.username, [e.target.name]: e.target.value })} />
                    </div>
                    <input className='loginwrapper__box-forminput--submit' type='submit' />
                </form>
                <div className='loginwrapper__box-links' style={{marginTop:'1rem'}}>
                <Link to={'/signup'} style={{display:'block', fontSize:'1.1rem', marginBottom:'.7rem', textDecorationLine:'none'}}>Forgot Password? </Link>
                    Not registered? <Link to={'/signup'} style={{fontSize:'1.1rem', textDecorationLine:'none'}}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
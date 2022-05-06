import './login.scss';
import logo from '../../img/logo.png';
import icon_success from '../../img/SVG/check_circle_outline.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/data-fetch-service';
import { useModal } from '../../services/AppstateContext';
import { Modal_model } from '../../models/Modal';

const Login = () => {
    const modal = useModal();
    const setModal = modal.func;

    const [formvalues, setFormvalues] = useState({
        username: '',
        password: '',
        email: ''
    })

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(formvalues);
            console.log(response);
        } catch (error) {
            if (error.status === 406) {
                console.log(error.status)
                setModal(new Modal_model(true, 'Error', <><h1>Body</h1></>, `${icon_success}#icon-cancel-circle`));
            }
        }
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
                            value={formvalues.email} placeholder='Email' name='email'
                            onChange={(e) => setFormvalues({ [e.target.name]: e.target.value, password: formvalues.password, username: formvalues.username })} />
                    </div>
                    <div className='loginwrapper__box-forminput--wrapper'>
                        <div className='loginwrapper__box-forminput--label'>Username</div>
                        <input className='loginwrapper__box-forminput--field' type='text'
                            value={formvalues.username} placeholder='Username' name='username'
                            onChange={(e) => setFormvalues({ [e.target.name]: e.target.value, password: formvalues.password, email: formvalues.email })} />
                    </div>
                    <div className='loginwrapper__box-forminputwrapper'>
                        <div className='loginwrapper__box-forminput--label'>Password</div>
                        <input className='loginwrapper__box-forminput--field' type='password'
                            value={formvalues.password} placeholder='Password' name='password'
                            onChange={(e) => setFormvalues({ username: formvalues.username, [e.target.name]: e.target.value, email: formvalues.email })} />
                    </div>
                    <input className='loginwrapper__box-forminput--submit' type='submit' />
                </form>
                <div className='loginwrapper__box-links' style={{ marginTop: '1rem' }}>
                    <Link to={'/signup'} style={{ display: 'block', fontSize: '1.1rem', marginBottom: '.7rem', textDecorationLine: 'none' }}>Forgot Password? </Link>
                    Not registered? <Link to={'/signup'} style={{ fontSize: '1.1rem', textDecorationLine: 'none' }}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
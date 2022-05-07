import './login.scss';
import logo from '../../img/logo.png';
import icon_success from '../../img/SVG/check_circle_outline.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../services/AppstateContext';
import { Modal_model } from '../../models/Modal';
import { login } from '../../services/data-fetch-service';
import { getSHA256 } from '../../utils/utils';
import jwt from 'jwt-decode';

const Login = () => {
    const modal = useModal();
    const setModal = modal.func;

    const [formvalues, setFormvalues] = useState({
        username: '',
        password: '',
    })

    const login_func = async (e) => {
        e.preventDefault();
        try {
            let hashedPass = await getSHA256(formvalues.password);
            const response = await login(formvalues.username, hashedPass);
            if(response.status === 200){
                setModal(new Modal_model(true, 'Success', <><h1>Got token</h1></>, `${icon_success}#icon-check_circle_outline`));
                let token = response.data.token;
                // let decodedToken = jwt(token);
            }
        } catch (error) {
            if (error.status === 401 || error.status === 406) {
                setModal(new Modal_model(true, 'Error', <h1>{error.data.err}</h1>, `${icon_success}#icon-cancel-circle`));
            } else {
                setModal(new Modal_model(true, 'Error', <h1>Unexpected error occured.</h1>, `${icon_success}#icon-cancel-circle`));
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
                <form onSubmit={(e) => login_func(e)}>
                    <div className='loginwrapper__box-forminput--wrapper'>
                        <div className='loginwrapper__box-forminput--label'>Username</div>
                        <input className='loginwrapper__box-forminput--field' type='text'
                            value={formvalues.username} placeholder='Username' name='username' required maxLength='50'
                            onChange={(e) => setFormvalues({ [e.target.name]: e.target.value, password: formvalues.password})} />
                    </div>
                    <div className='loginwrapper__box-forminputwrapper'>
                        <div className='loginwrapper__box-forminput--label'>Password</div>
                        <input className='loginwrapper__box-forminput--field' type='password'
                            value={formvalues.password} placeholder='Password' name='password' required 
                            onChange={(e) => setFormvalues({ username: formvalues.username, [e.target.name]: e.target.value})} />
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
import './login.scss';
import logo from '../../img/logo.png';
import icon_success from '../../img/SVG/check_circle_outline.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useModal, useStatusbar } from '../../services/AppstateContext';
import { Modal_model } from '../../models/Modal';
import { login } from '../../services/data-fetch-service';
import { getSHA256 } from '../../utils/utils';
import jwt from 'jwt-decode';
import Spinner from '../../components/Spinner/Spinner';
import { Statusbar_model } from '../../models/Statusbar_model';

const Login = () => {
    const modal = useModal();
    const statusbar = useStatusbar();
    const setModal = modal.func;
    const setStatusbar = statusbar.func;
    const navigate = useNavigate();

    const [spinner, setSpinner] = useState(false);

    const [formvalues, setFormvalues] = useState({
        username: '',
        password: '',
    })

    const login_func = async (e) => {
        e.preventDefault();
        try {
            setSpinner(true);
            let hashedPass = await getSHA256(formvalues.password);
            const response = await login(formvalues.username, hashedPass);
            if (response.status === 200) {
                // setModal(new Modal_model(true, 'Success', <><h1>Got token</h1></>, `${icon_success}#icon-check_circle_outline`));
                let token = response.data.token;
                let decodedToken = jwt(token);
                // console.log(decodedToken);
                // getTime Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
                const now = new Date().getTime();
                const jwtExp = now + decodedToken.exp;
                const jwtExpDate = new Date(jwtExp);
                // console.log(jwtExpDate < new Date())
                localStorage.setItem('token', token);
                localStorage.setItem('tokenissue', btoa(jwtExpDate));
                navigate('/hotel');
                setStatusbar(new Statusbar_model(true, "Successfully logged in!.", `${icon_success}#icon-check_circle_outline`, 'success'));
            }
        } catch (error) {
            if (error.status === 401 || error.status === 406) {
                setModal(new Modal_model(true, 'Error', <h1>{error.data.err}</h1>, `${icon_success}#icon-cancel-circle`));
            } else {
                setModal(new Modal_model(true, 'Error', <h1>Unexpected error occured.</h1>, `${icon_success}#icon-cancel-circle`));
            }
        } finally {
            setSpinner(false);
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
                <form className='loginwrapper__box-forminput' onSubmit={(e) => login_func(e)}>
                    <div className='loginwrapper__box-forminput--wrapper'>
                        <div className='loginwrapper__box-forminput--label'>Username</div>
                        <input className='loginwrapper__box-forminput--field' type='text'
                            value={formvalues.username} placeholder='Username' name='username' required maxLength='50'
                            onChange={(e) => setFormvalues({ [e.target.name]: e.target.value, password: formvalues.password })} />
                    </div>
                    <div className='loginwrapper__box-forminputwrapper'>
                        <div className='loginwrapper__box-forminput--label'>Password</div>
                        <input className='loginwrapper__box-forminput--field' type='password'
                            value={formvalues.password} placeholder='Password' name='password' required
                            onChange={(e) => setFormvalues({ username: formvalues.username, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        {/* <input className='loginwrapper__box-forminput--submit' type='submit' /> */}
                        <button className='loginwrapper__box-forminput--submit' type='submit'> Login </button>
                    </div>
                    {spinner && <Spinner />}
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
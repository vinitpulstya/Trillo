import './header.scss';
import logo from '../../img/logo.png';
import sprite from '../../img/sprite.svg';
import user from '../../img/user.jpg';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Header() {
  let navigate = useNavigate();
  const location = useLocation();
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    if (location.pathname.includes('hotels') || location.pathname.includes('hotel')) {
      setPlaceholder('Search Hotels');
    } else if (location.pathname.includes('flight')) {
      setPlaceholder('Search Flights');
    }
  }, [location.pathname]);

  return (
    <header className='header'>
      <img src={logo} alt='trillo logo' className='logo' onClick={() => navigate('/')} />
      <form action='#' className='search'>
        {/* <select className='search__type' name="search_type" id="search_type">
          <option value="Name">Name</option>
          <option value="location">Location</option>
        </select> */}
        <input type='text' className='search__input' placeholder={placeholder} />
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className='user-nav'>

        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${sprite}#icon-bookmark`}></use>
          </svg>
          <span className='user-nav__notification'>7</span>
        </div>

        <div className='nav-content'>
          <ul className='nav-content__list'>
            <li className='nav-content__list-item'>Something</li>
            <li className='nav-content__list-item'>Something else</li>
          </ul>
        </div>

        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref={`${sprite}#icon-chat`}></use>
          </svg>
          <span className='user-nav__notification'>13</span>
        </div>

        <div className='nav-content'>
          <ul className='nav-content__list'>
            <li className='nav-content__list-item'>Something</li>
            <li className='nav-content__list-item'>Something else</li>
            <li className='nav-content__list-item'>Something else</li>
            <li className='nav-content__list-item'>Something else</li>
            <li className='nav-content__list-item'>Something else</li>
            <li className='nav-content__list-item'>Something else</li>

          </ul>
        </div>

        <div className='user-nav__user'>
          <img src={user} alt='user' className='user-nav__user-photo' />
          <span className='user-nav__user-name'>Jonas</span>
        </div>

      </nav>
    </header>
  );
}

export default Header;
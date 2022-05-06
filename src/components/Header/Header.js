import './header.scss';
import logo from '../../img/logo.png';
import sprite from '../../img/sprite.svg';
import user from '../../img/user.jpg';
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  return (
    <header className='header'>
      <img src={logo} alt='trillo logo' className='logo' onClick={() => navigate('')}/>
      <form action='#' className='search'>
        <input type='text' className='search__input' placeholder='Search hotels' />
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
import './sidebar.scss';
import sprite from '../../img/sprite.svg';

function Sidebar() {
    // let activeClassName = 'side-nav__item--active';

    return (
        <nav className='sidebar'>
            <ul className='side-nav'>
                <li className='side-nav__item side-nav__item--active'>
                    <a href={'/hotel'} className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprite}#icon-home`}></use>
                        </svg>
                        <span>Hotel</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='/flight' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprite}#icon-aircraft-take-off`}></use>
                        </svg>
                        <span>Flight</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='carrental' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprite}#icon-key`}></use>
                        </svg>
                        <span>Car rental</span>
                    </a>
                </li>
                <li className='side-nav__item'>
                    <a href='/tours' className='side-nav__link'>
                        <svg className='side-nav__icon'>
                            <use xlinkHref={`${sprite}#icon-map`}></use>
                        </svg>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>

            <div className='legal'>
                &copy; 2017 by trillo. All rights reserved.
            </div>
        </nav>
    );
}

export default Sidebar;
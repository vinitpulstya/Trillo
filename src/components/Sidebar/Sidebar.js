import './sidebar.scss';
import sprite from '../../img/sprite.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const [activepath, setActivepath] = useState('/');

    const navArr = [
        {
            name: 'hotels',
            iconName: '#icon-home',
            pathname: '/hotels'
        },
        {
            name: 'flight',
            iconName: '#icon-aircraft-take-off',
            pathname: '/flight'
        },
        {
            name: 'car rental',
            iconName: '#icon-key',
            pathname: '/carrental'
        },
        {
            name: 'tours',
            iconName: '#icon-map',
            pathname: '/tours'
        }
    ]

    const location = useLocation();
    const navigate = useNavigate();

    const linkClicked = (e, navigateTo) => {
        e.preventDefault();
        navigate(navigateTo);
    }

    useEffect(() => {
        setActivepath(location.pathname);
    }, [location.pathname]);

    let navList = navArr.map((item, index) => {
        return (
            <li key={index} className={`side-nav__item ${activepath.includes(item.pathname) ? 'side-nav__item--active' : (activepath === '/' && item.name === 'hotel') ? 'side-nav__item--active' : ''}`} 
                onClick={(e) => linkClicked(e, item.pathname)}>
                <a href={item.pathname} className='side-nav__link'>
                    <svg className='side-nav__icon'>
                        <use xlinkHref={`${sprite}${item.iconName}`}></use>
                    </svg>
                    <span>{item.name}</span>
                </a>
            </li>
        )
    })

    return (
        <nav className='sidebar'>
            <ul className='side-nav'>
                {navList}
            </ul>
            <div className='legal'>
                &copy; 2017 by trillo. All rights reserved.
            </div>
        </nav>
    );
}

export default Sidebar;
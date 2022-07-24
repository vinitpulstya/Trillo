import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Hoteltile } from '../../components/Hoteltile/Hoteltile';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Testimonial } from '../../components/Testimonial/Testimonial';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';
import user3 from '../../img/user-3.jpg';
import './hotels.scss';

export const Hotels = () => {
    const location = useLocation();

    const shouldDisplayTiles = () => {
        if (!location.search) {
            return false;
        }
        return true;
    }

    return (
        <>
            <Header />
            <div className="content">
                <Sidebar />
                {shouldDisplayTiles() ? <Hoteltile /> : <HotelsLanding />}

            </div>
        </>
    )
}

const HotelsLanding = () => {
    return (
        <div className='hotelslanding'>
            <h1 className='hotelslanding__heading hotelslanding__heading-primary'>Thanks for choosing us!</h1>
            <p className='hotelslanding__heading hotelslanding__heading-secondary'>
                Your search for hotels ends here. Use the search bar above to find hotels relevent to you.
                We hope you find the best stay for you!
            </p>
            <p className='hotelslanding__heading hotelslanding__heading-tertiary'>
                See what our users have to say.
            </p>

            <div className='testimonials'>
                <Testimonial image={user1} date='24th May 2022' testimony={'lorem'} name='Vinit'/>
                <Testimonial image={user2} date='26th Feb 2022' testimony={'lorem'} name='Anna'/>
                <Testimonial image={user3} date='25th Feb 2022' testimony={'lorem'} name='Tony'/>
            </div>
        </div>
    )
}
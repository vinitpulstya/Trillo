import './hotelview.scss';
import hotel1 from '../../img/hotel-1.jpg';
import hotel2 from '../../img/hotel-2.jpg';
import hotel3 from '../../img/hotel-3.jpg';
import sprite from '../../img/sprite.svg';
import friend1 from '../../img/user-3.jpg';
import friend2 from '../../img/user-4.jpg';
import friend3 from '../../img/user-5.jpg';
import friend4 from '../../img/user-6.jpg';
import user1 from '../../img/user-1.jpg';
import user2 from '../../img/user-2.jpg';

const images = [hotel1, hotel2, hotel3];
const imageGallery = images.map((image, index) => {
    return (
        <figure key={index} className='gallery__item'>
            <img src={image} alt={`hotel ${index + 1}`} className='gallery__photo' />
        </figure>
    )
});

const hotel = {
    name: 'Hotel Las Palmas',
    stars: 4.2,
    location: 'Kurkshetra, India',
    features: ['Close to the beach', 'Breakfast included', 'Free airport shuttle', 'Free WiFi in all rooms', 'Air conditioning and heating', 'Pets allowed', 'We speak all languages', 'Perfect for families']
}

const getStars = () => {
    const selectedStars = Math.round(hotel.stars);
    const unselectedStars = 5 - selectedStars;

    let starsArr = [];
    for (let i = 0; i < selectedStars; i++) {
        starsArr.push(
            <svg key={starsArr.length} className='overview__icon-star overview__icon-star-selected'>
                <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
        )
    }

    for (let i = 0; i < unselectedStars; i++) {
        starsArr.push(
            <svg key={starsArr.length} className='overview__icon-star overview__icon-star-unselected'>
                <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
        )
    }
    return starsArr;
}

const amenities = hotel.features.map((feature, index) => {
        return (
            <li key={index} className='list__item'>
                <svg className='list__item-arrow'>
                    <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                </svg>
                {feature}
            </li>
        )
    })


function Hotelview() {
    return (
        <main className='hotel-view'>
            <div className='gallery'>
                {imageGallery}
            </div>

            <div className='overview'>
                <h1 className='overview__heading'>
                    {hotel.name}
                </h1>
                <div className='overview__stars'>
                    {getStars()}
                </div>
                <div className='overview__location'>
                    <svg className='overview__icon-location'>
                        <use xlinkHref={`${sprite}#icon-location-pin`}></use>
                    </svg>
                    <button className='btn-inline'>{hotel.location}</button>
                </div>

                <div className='overview__rating'>
                    <div className='overview__rating-average'>8.6</div>
                    <div className='overview__rating-count'>429 votes</div>
                </div>
            </div>

            <div className='detail'>
                <div className='description'>
                    <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className='paragraph'>
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className='list'>
                        {amenities}
                    </ul>
                    <div className='recommend'>
                        <p className='recommend__count'>
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className='recommend__friends'>
                            <img src={friend1} alt="Friend 1" className='recommend__photo'></img>
                            <img src={friend2} alt="Friend 2" className='recommend__photo'></img>
                            <img src={friend3} alt="Friend 3" className='recommend__photo'></img>
                            <img src={friend4} alt="Friend 4" className='recommend__photo'></img>
                        </div>
                    </div>
                </div>
                <div className='user-reviews'>
                    <figure className='review'>
                        <blockquote className='review__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className='review__user'>
                            <img src={user1} alt='user1' className='review__photo'></img>
                            <div className='review__user-box'>
                                <p className='review__user-name'>Nick Smith</p>
                                <p className='review__user-date'>Feb 23rd, 2017</p>
                            </div>
                            <div className='review__rating'>7.8</div>
                        </figcaption>
                    </figure>
                    <figure className='review'>
                        <blockquote className='review__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.

                        </blockquote>
                        <figcaption className='review__user'>
                            <img src={user2} alt='user2' className='review__photo'></img>
                            <div className='review__user-box'>
                                <p className='review__user-name'>Mary Thomas</p>
                                <p className='review__user-date'>Sept 13th, 2017</p>
                            </div>
                            <div className='review__rating'>9.3</div>
                        </figcaption>
                    </figure>

                    <button className='btn-inline'>Show all <span>&rarr;</span></button>
                </div>
            </div>
            {/* CTA is call to action */}
            <div className='cta'>
                <h2 className='cta__book-now'>
                    Good news! We have 4 rooms available for your selected dates!
                </h2>
                <button className='btn'>
                    <span className='btn__visible'>Book now</span>
                    <span className='btn__invisible'>Only 4 rooms left</span>
                </button>
            </div>

        </main>
    );
}

export default Hotelview;
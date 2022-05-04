import './hotelview.scss';
import hotel1 from '../../img/hotel-1.jpg';
import hotel2 from '../../img/hotel-2.jpg';
import hotel3 from '../../img/hotel-3.jpg';
import sprite from '../../img/sprite.svg';
import friend1 from '../../img/user-3.jpg';
import friend2 from '../../img/user-4.jpg';
import friend3 from '../../img/user-5.jpg';
import friend4 from '../../img/user-6.jpg';

function Hotelview() {
    return (
        <main className='hotel-view'>
            <div className='gallery'>
                <figure className='gallery__item'>
                    <img src={hotel1} alt='hotel 1' className='gallery__photo' />
                </figure>
                <figure className='gallery__item'>
                    <img src={hotel2} alt='hotel 2' className='gallery__photo' />
                </figure>
                <figure className='gallery__item'>
                    <img src={hotel3} alt='hotel 3' className='gallery__photo' />
                </figure>
            </div>

            <div className='overview'>
                <h1 className='overview__heading'>
                    Hotel Las Palmas
                </h1>
                <div className='overview__stars'>
                    <svg className='overview__icon-star'>
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className='overview__icon-star'>
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className='overview__icon-star'>
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className='overview__icon-star'>
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                    <svg className='overview__icon-star'>
                        <use xlinkHref={`${sprite}#icon-star`}></use>
                    </svg>
                </div>
                <div className='overview__location'>
                    <svg className='overview__icon-location'>
                        <use xlinkHref={`${sprite}#icon-location-pin`}></use>
                    </svg>
                    <button className='btn-inline'>Kurukshetra, India</button>
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
                        <li className='list__item'>
                            <svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Close to the beach</li>
                        <li className='list__item'>
                        <svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Breakfast included</li>
                        <li className='list__item'>
                        <svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Free airport shuttle</li>
                        <li className='list__item'><svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Free WiFi in all rooms</li>
                        <li className='list__item'><svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Air conditioning and heating</li>
                        <li className='list__item'><svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Pets allowed</li>
                        <li className='list__item'><svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            We speak all languages</li>
                        <li className='list__item'><svg className='list__item-arrow'>
                                <use xlinkHref={`${sprite}#icon-chevron-thin-right`}></use>
                            </svg>
                            Perfect for families</li>
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
                    user reviews
                </div>
            </div>

        </main>
    );
}

export default Hotelview;
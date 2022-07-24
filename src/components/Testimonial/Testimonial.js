import './testimonial.scss';

export const Testimonial = ({image, testimony, name, date}) => {
    return (
        <figure className='testimonial'>
            <blockquote className='testimonial__text'>
                {testimony}
            </blockquote>
            <figcaption className='testimonial__user'>
                <img src={image} alt={name} className='testimonial__photo'></img>
                <div className='testimonial__user-box'>
                    <p className='testimonial__user-name'>{name}</p>
                    <p className='testimonial__user-date'>{date}</p>
                </div>
            </figcaption>
        </figure>
    )
}
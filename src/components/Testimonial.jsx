const Testimonial = ({imgSrc, text, name}) => {
    return (
        <figure className="testimonial">
            <img className="testimonial-img" src={imgSrc} alt={`Photo of customer ${name}`}/>
            <blockquote className="testimonial-text">{text}</blockquote>
            <p className="testimonial-name">{name}</p>
        </figure>
    )
};

export default Testimonial;
const FeatureCard = ({imgSrc, title, desc}) => {
    return (
        <div className="feature">
            <img className="feature-icon" src={imgSrc} />
            <p className="feature-title">{title}</p>
            <p className="feature-description">{desc}</p>
        </div>
    );
};

export default FeatureCard;
const Step = ({ stepNumber, title, description, imgSrc, imgAlt, reverseOrder }) => {
  return (
    <div className="container grid grid--2-cols grid--center-margin">
      <div className="step-text-box">
        <p className="step-number">{stepNumber}</p>
        <h3 className="heading-tertiary">{title}</h3>
        <p className="step-description">{description}</p>
      </div>
      <div className={`step-img-box ${reverseOrder}`}>
        <img src={imgSrc} className="step-img" alt={imgAlt} />
      </div>
    </div>
  );
};

export default Step;

import icon1 from "../assets/img/icons/fire.svg";
import icon2 from "../assets/img/icons/fork-knife.svg";
import icon3 from "../assets/img/icons/star.svg";

const MealCard = ({
  imgSrc,
  imgAlt,
  title,
  tag,
  tag2,
  mealAtt1,
  mealAtt2,
  mealAtt3,
}) => {
  return (
    <div className="meal-card">
      <img className="meal-img" src={imgSrc} alt={imgAlt} />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag">{tag}</span>
          <span className="tag">{tag2}</span>
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span>
              <img className="meal-icon" src={icon1} />
            </span>
            {mealAtt1}
          </li>
          <li className="meal-attribute">
            <span>
              <img className="meal-icon" src={icon2} />
            </span>
            {mealAtt2}
          </li>
          <li className="meal-attribute">
            <span>
              <img className="meal-icon" src={icon3} />
            </span>
            {mealAtt3}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;

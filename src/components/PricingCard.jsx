import check from "../assets/img/icons/check.svg";
import x from "../assets/img/icons/x.svg";

const PricingCard = ({ name, price, text, list1, list2, list3 }) => {
  let list4;
  if (name == "starter") {
    list4 = (
      <li className="list-item">
        <span>
          <img className="list-icon" src={x} />
        </span>
        Get access to latest recipes
      </li>
    );
  } else {
    list4 = (
      <li className="list-item">
        <span>
          <img className="list-icon" src={check} />
        </span>
        Get access to latest recipes
      </li>
    );
  }
  return (
    <div className={`pricing-plan ${name}`}>
      <header className="plan-header">
        <p className="plan-name">{name}</p>
        <p className="plan-price">
          <span>$</span>
          {price}
        </p>
        <p className="plan-text">{text}</p>
      </header>
      <ul className="list">
        <li className="list-item">
          <span>
            <img className="list-icon" src={check} />
          </span>
          {list1}
        </li>
        <li className="list-item">
          <span>
            <img className="list-icon" src={check} />
          </span>
          {list2}
        </li>
        <li className="list-item">
          <span>
            <img className="list-icon" src={check} />
          </span>
          {list3}
        </li>
        {list4}
      </ul>
      <div className="plan-cta">
        <a href="#" className="btn btn-full">
          Start eating well
        </a>
      </div>
    </div>
  );
};

export default PricingCard;

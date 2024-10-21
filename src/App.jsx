// CSS
import "./assets/css/App.css";
// IMAGES
import heroImg from "./assets/img/hero.png";
import customer1 from "./assets/img/customers/customer-1.jpg";
import customer2 from "./assets/img/customers/customer-2.jpg";
import customer3 from "./assets/img/customers/customer-3.jpg";
import customer4 from "./assets/img/customers/customer-4.jpg";
import customer5 from "./assets/img/customers/customer-5.jpg";
import customer6 from "./assets/img/customers/customer-6.jpg";
import appImg1 from "./assets/img/app-img/app-screen-1.png";
import appImg2 from "./assets/img/app-img/app-screen-2.png";
import appImg3 from "./assets/img/app-img/app-screen-3.png";
import logo1 from "./assets/img/logos/business-insider.png";
import logo2 from "./assets/img/logos/forbes.png";
import logo3 from "./assets/img/logos/techcrunch.png";
import logo4 from "./assets/img/logos/the-new-york-times.png";
import logo5 from "./assets/img/logos/usa-today.png";
import meal1 from "./assets/img/meals/meal-1.jpg";
import meal2 from "./assets/img/meals/meal-2.jpg";
import listIcon from "./assets/img/icons/check.svg";
// COMPONENTS
import CustomerPhoto from "./components/CustomerPhoto";
import Header from "./components/Header";
import Step from "./components/Step";
import LogoPhoto from "./components/LogoPhoto";
import MealCard from "./components/Meal";

function App() {
  const customers = [
    { image: customer1 },
    { image: customer2 },
    { image: customer3 },
    { image: customer4 },
    { image: customer5 },
    { image: customer6 },
  ];

  const logos = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
  ];

  return (
    <div id="App">
      <Header />
      <main>
        <div className="hero-section">
          <div className="hero">
            <div className="hero-text">
              <h1 className="heading-primary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="hero-description">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href="#" className="btn btn-full margin-right-sm">
                Start eating well
              </a>
              <a href="#" className="btn btn-outline">
                Learn more &darr;
              </a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  {customers.map((customer, index) => {
                    return <CustomerPhoto key={index} image={customer.image} />;
                  })}
                </div>
                <p className="delivered-text">
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div className="hero-img-section">
              <img
                className="hero-img"
                src={heroImg}
                alt="Food in bowls on a table, meals in containers, and a woman eating pasta"
              />
            </div>
          </div>
        </div>

        <div className="featured-section">
          <div className="container">
            <h2 className="heading-featured">As featured in</h2>
            <div className="logos">
              {logos.map((logo, index) => {
                return <LogoPhoto key={index} image={logo.image} />;
              })}
            </div>
          </div>
        </div>

        <div className="how-section">
          <div className="container">
            <span className="how-subheading">How It Works</span>
            <h2 className="heading-secondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>
          <Step
            stepNumber="01"
            title="Tell us what you like (and what not)"
            description="Never again waste time thinking about what to eat! Omnifood AI will
          create a 100% personalized weekly meal plan just for you. It makes
          sure you get all the nutrients and vitamins you need, no matter what
          diet you follow!"
            imgSrc={appImg1}
            imgAlt="An iPhone app screen with preferences selection"
          />
          <Step
            stepNumber="02"
            title="Approve your weekly meal plan"
            description="Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes."
            imgSrc={appImg2}
            imgAlt="An iPhone app screen with meal plan"
            reverseOrder="reverse"
          />
          <Step
            stepNumber="03"
            title="Receive meals at a convenient time"
            description="Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!"
            imgSrc={appImg3}
            imgAlt="An iPhone app screen with personalized meal prep"
          />
        </div>

        <div className="meals-section">
          <div className="container">
            <span className="how-subheading">Meals</span>
            <h2 className="heading-secondary">
              Omnifood AI chooses from 5,000+ recipes
            </h2>
          </div>
          <div className="container grid grid--3-cols margin-bottom-md">
            <MealCard
              imgSrc={meal1}
              imgAlt="Three bowls of Japanese Gyozas"
              title="Japanese Gyozas"
              tag="Vegetarian"
              tag2="Lactose-free"
              mealAtt1="650 calories"
              mealAtt2="NutriScore&reg; 74"
              mealAtt3="4.9 rating (537)"
            />
            <MealCard
              imgSrc={meal2}
              imgAlt="A bowl of avocado salad"
              title="Avocado Salad"
              tag="Vegan"
              tag2="Paleo"
              mealAtt1="400 calories"
              mealAtt2="NutriScore&reg; 92"
              mealAtt3="4.8 rating (441)"
            />
            <div className="diets">
              <h3 className="heading-tertiary">Works with any diet</h3>
              <ul className="list">
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Vegetarian
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Vegan
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Pescatarian
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Gluten-free
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Lactose-free
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Keto
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Paleo
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Low FODMAP
                </li>
                <li className="list-item">
                  <span>
                    <img className="list-icon" src={listIcon} />
                  </span>
                  Kid-friendly
                </li>
              </ul>
            </div>
          </div>
          <div className="container all-recipes">
            <a href="#" className="link">See all recipes &rarr;</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

/*
- Logo + Navigation
- Hero
- Featured in
- How it works
- Diets
- Meals (and list of diets)
- Testimonials + gallery
- Pricing + features
- CTA
- Footer
*/

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
// COMPONENTS
import CustomerPhoto from "./components/CustomerPhoto";
import Header from "./components/Header";
import Step from "./components/Step";

function App() {
  const customers = [
    { image: customer1 },
    { image: customer2 },
    { image: customer3 },
    { image: customer4 },
    { image: customer5 },
    { image: customer6 },
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

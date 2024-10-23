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
import customerDave from "./assets/img/customers/dave.jpg";
import customerBen from "./assets/img/customers/ben.jpg";
import customerHannah from "./assets/img/customers/hannah.jpg";
import customerSteve from "./assets/img/customers/steve.jpg";
import gallery1 from "./assets/img/gallery/gallery-1.jpg";
import gallery2 from "./assets/img/gallery/gallery-2.jpg";
import gallery3 from "./assets/img/gallery/gallery-3.jpg";
import gallery4 from "./assets/img/gallery/gallery-4.jpg";
import gallery5 from "./assets/img/gallery/gallery-5.jpg";
import gallery6 from "./assets/img/gallery/gallery-6.jpg";
import gallery7 from "./assets/img/gallery/gallery-7.jpg";
import gallery8 from "./assets/img/gallery/gallery-8.jpg";
import gallery9 from "./assets/img/gallery/gallery-9.jpg";
import gallery10 from "./assets/img/gallery/gallery-10.jpg";
import gallery11 from "./assets/img/gallery/gallery-11.jpg";
import gallery12 from "./assets/img/gallery/gallery-12.jpg";
import featureIcon1 from "./assets/img/icons/infinite.svg";
import featureIcon2 from "./assets/img/icons/leaf.svg";
import featureIcon3 from "./assets/img/icons/recycle.svg";
import featureIcon4 from "./assets/img/icons/pause.svg";
// COMPONENTS
import CustomerPhoto from "./components/CustomerPhoto";
import Header from "./components/Header";
import Step from "./components/Step";
import LogoPhoto from "./components/LogoPhoto";
import MealCard from "./components/Meal";
import Testimonial from "./components/Testimonial";
import GalleryPhoto from "./components/GalleryPhoto";
import PricingCard from "./components/PricingCard";
import FeatureCard from "./components/FeatureCard";

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

  const galleryImgs = [
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
    { image: gallery5 },
    { image: gallery6 },
    { image: gallery7 },
    { image: gallery8 },
    { image: gallery9 },
    { image: gallery10 },
    { image: gallery11 },
    { image: gallery12 },
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
            <a href="#" className="link">
              See all recipes &rarr;
            </a>
          </div>
        </div>

        <div className="testimonials-section">
          <div className="testimonials-container">
            <span className="how-subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Once you try it, you can't go back
            </h2>
            <div className="testimonials">
              <Testimonial
                imgSrc={customerDave}
                text="Inexpensive, healthy and great tasting meals, without even having to order manually! It feels truly magical."
                name="&mdash; Dave Bryson"
              />
              <Testimonial
                imgSrc={customerBen}
                text="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
                name="&mdash; Ben Hadley"
              />
              <Testimonial
                imgSrc={customerSteve}
                text="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
                name="&mdash; Steve Miller"
              />
              <Testimonial
                imgSrc={customerHannah}
                text="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
                name="&mdash; Hannah Smith"
              />
            </div>
          </div>
          <div className="gallery">
            {galleryImgs.map((galleryImg, index) => {
              return <GalleryPhoto key={index} image={galleryImg.image} />;
            })}
          </div>
        </div>

        <div className="pricing-section">
          <div className="container">
            <span className="how-subheading">Pricing</span>
            <h2 className="heading-secondary">
              Eating well without breaking the bank
            </h2>
          </div>
          <div className="container grid grid--2-cols pricing-grid">
            <PricingCard
              name="starter"
              price="399"
              text="per month. That's just $13 per meal!"
              list1="1 meal per day"
              list2="Order from 11am to 9pm"
              list3="Delivery is free"
            />
            <PricingCard
              name="complete"
              price="649"
              text="per month. That's just $11 per meal!"
              list1="2 meals per day"
              list2="Order 24/7"
              list3="Delivery is free"
            />
          </div>

          <div className="container grid plan">
            <aside className="plan-details">
              Prices include all applicable taxes. You can cancel at any time.
              Both plans include the following:
            </aside>
          </div>

          <div className="container grid grid--4-cols">
            <FeatureCard
              imgSrc={featureIcon1}
              title="Never cook again"
              desc="Our subscriptions cover 365 days per year, even including major holidays."
            />
            <FeatureCard
              imgSrc={featureIcon2}
              title="Local and organic"
              desc="Our cooks only use local, fresh, and organic products to prepare your meals."
            />
            <FeatureCard
              imgSrc={featureIcon3}
              title="No waste"
              desc="All our partners only use reusable containers to package all your meals."
            />
            <FeatureCard
              imgSrc={featureIcon4}
              title="Pause anytime"
              desc="Going on vacation? Just pause your subscription, and we refund unused days."
            />
          </div>
        </div>

        <div className="cta-section">
          <div className="container">
            <div className="cta">
              <div className="cta-textbox">
                <h2 className="heading-secondary">
                  Get your first meal for free!
                </h2>
                <p className="cta-text">
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>
                <form className="cta-form" action="#">
                  <div>
                    <label for="full-name">Full Name</label>
                    <input
                      id="full-name"
                      placeholder="John Smith"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label for="email">Email Address</label>
                    <input
                      id="email"
                      placeholder="example@example.com"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <label for="select-where">
                      Where did you hear about us?
                    </label>
                    <select id="select-where" required>
                      <option value="">--Please choose an option--</option>
                      <option value="friends">Friends and family</option>
                      <option value="youtube">YouTube</option>
                      <option value="podcast">Podcast</option>
                      <option value="tiktok">TikTok</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button className="btn">Sign up now</button>
                </form>
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Woman enjoying food"
              >
                Img
              </div>
            </div>
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

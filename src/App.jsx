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
// COMPONENTS
import CustomerPhoto from "./components/CustomerPhoto";

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
            <p>250,000+ meals delivered last year!</p>
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

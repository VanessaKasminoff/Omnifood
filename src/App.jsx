import "./assets/css/App.css";
import heroImg from "./assets/img/hero.png";

function App() {
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
              nutritional needs. We have delivered 250,000+ meals last year!
            </p>
            <a href="#" className="btn btn-full margin-right-sm">
              Start eating well
            </a>
            <a href="#" className="btn btn-outline">
              Learn more &darr;
            </a>
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

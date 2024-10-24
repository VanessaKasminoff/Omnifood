const Form = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="cta">
          <div className="cta-textbox">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form className="cta-form" action="#">
              <div>
                <label for="full-name">Full Name*</label>
                <input
                  id="full-name"
                  placeholder="John Smith"
                  type="text"
                  required
                />
              </div>
              <div>
                <label for="email">Email Address*</label>
                <input
                  id="email"
                  placeholder="example@example.com"
                  type="email"
                  required
                />
              </div>
              <div>
                <label for="select-where">Where did you hear about us?*</label>
                <select id="select-where" required>
                  <option value="">--Please choose an option--</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube</option>
                  <option value="podcast">Podcast</option>
                  <option value="tiktok">TikTok</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Form;

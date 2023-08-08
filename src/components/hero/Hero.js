import "./Hero.css";
import Signin from "../signin/Signin";

const Hero = () => {
  return (
    <div className="hero container">
      <h1>Unlimited movies, TV shows and more</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <p className="hero-line">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Signin></Signin>
    </div>
  );
};

export default Hero;

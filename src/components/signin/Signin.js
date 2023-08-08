import { ReactComponent as Arrow } from "../../assets/asset 8.svg";
import "./Signin.css";
const Signin = () => {
  return (
    <div className="hero-btns flex">
      <div className="hero-input">
        <input type="email" name="email" id="input-email" />
        <div className="email-label">Email address</div>
      </div>
      <div className="primary-button getbutton flex">
        <p>Get Started</p>
        <Arrow></Arrow>
      </div>
    </div>
  );
};

export default Signin;

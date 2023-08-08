import "./Navbar.css";
import Lang from "../language/Lang";
const Navbar = () => {
  return (
    <div className="navbar flex container">
      <div className="logo">
        <img src={require("../../assets/asset 1.octet-stream")} alt="" />
      </div>
      <div className="links flex">
        <Lang></Lang>
        <div className="signin primary-button">
          <a href="/">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

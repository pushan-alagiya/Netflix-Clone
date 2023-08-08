import Navbar from "../navbar/Navbar";
import "./Back.css";
import Hero from "../hero/Hero";

const Back = () => {
  return (
    <div className="background">
      <div className="image">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Back;

import "./Tv.css";

const Tv = () => {
  return (
    <div className="tv flex container">
      <div className="tv-txt">
        <h1>Enjoy on your TV</h1>
        <h3 className="tv-extra-text">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </h3>
      </div>
      <div className="tv-img">
        <img src={require("../../assets/tv.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Tv;
